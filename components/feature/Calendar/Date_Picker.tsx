import { useState } from "react";
import styled, { css } from "styled-components";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { dateFormat } from "../../../lib/dateFormat";

const OpenButton = styled.div<{ modal: boolean }>`
  width: 60px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid darkgray;
  border-radius: 3px;
  color: gray;
  cursor: pointer;
  position: relative;
  ${({ modal }) =>
    modal &&
    css`
      color: white;
      background-color: darkgray;
    `}
`;

const RowBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const ValueViewer = styled.div`
  font-size: 17px;
  margin-left: 20px;
`;

const CalendarContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px;
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 10px;
  background-color: white;
  z-index: 10;
`;

const Header = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5px 0 10px 0;
`;

const HeaderArrow = styled.div`
  cursor: pointer;
  :hover {
    color: darkgray;
  }
`;

const HeaderText = styled.div``;

const DateGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const DateBox = styled.div<{ current: boolean; selected: boolean }>`
  width: 100%;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  border-radius: 3px;
  cursor: pointer;
  ${({ current }) =>
    !current
      ? css`
          color: gray;
        `
      : css`
          :hover {
            border: 1px solid lightgray;
          }
        `}
  ${({ selected }) =>
    selected &&
    css`
      background-color: black;
      color: white;
    `}
`;

const WeekGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 5px;
`;

const WeekBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  border-radius: 2px;
`;

interface getFullMonthReturnTypes {
  year: number;
  month: number;
  date: number;
  dateObj: Date;
  state: string;
}
const Date_Picker = () => {
  const today = new Date();
  const [selectDate, setSelectDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), today.getDate())
  );
  const [modal, setModal] = useState(false);
  const [yearMonth, setYearMonth] = useState<number[]>([
    today.getFullYear(),
    today.getMonth() + 1,
  ]);

  const getFullMonth = (yearMonth: number[]) => {
    const curMonthStart = new Date(yearMonth[0], yearMonth[1] - 1); //Date 객체로 생성
    const preMonthEnd = new Date(yearMonth[0], yearMonth[1] - 1, 0).getDate(); //이전달 끝나는 날
    const curStartDate = curMonthStart.getDay(); //이번달 시작 요일 -> 일요일 0 ~ 토요일 6
    const curEndDate = new Date(yearMonth[0], yearMonth[1], 0).getDate();
    let list: Array<Array<getFullMonthReturnTypes>> = [[]];

    for (let i = curStartDate - 1; i >= 0; i--) {
      const preDate = new Date(yearMonth[0], yearMonth[1] - 2, preMonthEnd - i);
      list[0].push({
        year: preDate.getFullYear(),
        month: preDate.getMonth() + 1,
        date: preDate.getDate(),
        dateObj: preDate,
        state: "pre",
      });
    }

    for (let i = 1, j = 0; i <= curEndDate; i++) {
      if (list[j].length === 7) {
        j++;
        list.push([]);
      }
      list[j].push({
        year: yearMonth[0],
        month: yearMonth[1],
        date: i,

        dateObj: new Date(yearMonth[0], yearMonth[1] - 1, i),
        state: "cur",
      });
    }
    let i = 0;
    while (list[list.length - 1].length < 7) {
      i++;
      const nextDate = new Date(yearMonth[0], yearMonth[1], i);
      list[list.length - 1].push({
        year: nextDate.getFullYear(),
        month: nextDate.getMonth() + 1,
        date: nextDate.getDate(),
        dateObj: nextDate,
        state: "next",
      });
    }
    return list;
  };

  const calendarHandel = (arrow: string) => {
    let year = yearMonth[0];
    let month = yearMonth[1];
    switch (arrow) {
      case "pre":
        if (month === 1) {
          year--;
          month = 12;
        } else month--;
        break;
      case "next":
        if (month === 12) {
          year++;
          month = 1;
        } else month++;
        break;
    }
    setYearMonth([year, month]);
  };

  const selectDateHandle = (day: getFullMonthReturnTypes) => {
    setSelectDate(day.dateObj);
    setModal(false);
  };

  return (
    <>
      <RowBox>
        <OpenButton modal={modal} onClick={() => setModal(!modal)}>
          달력
        </OpenButton>
        <ValueViewer>{dateFormat(selectDate, "yyyy.MM.dd (W)")}</ValueViewer>
        {modal && (
          <>
            <CalendarContainer>
              <Header>
                <HeaderArrow onClick={() => calendarHandel("pre")}>
                  <FaCaretLeft />
                </HeaderArrow>
                <HeaderText>
                  {yearMonth[0]}.
                  {yearMonth[1] < 10 ? `0${yearMonth[1]}` : yearMonth[1]}
                </HeaderText>
                <HeaderArrow onClick={() => calendarHandel("next")}>
                  <FaCaretRight />
                </HeaderArrow>
              </Header>
              <WeekGrid>
                {["일", "월", "화", "수", "목", "금", "토"].map((el, index) => (
                  <WeekBox key={index}>{el}</WeekBox>
                ))}
              </WeekGrid>
              <DateGrid>
                {getFullMonth(yearMonth).map((week, index) =>
                  week.map((day, idx) => (
                    <DateBox
                      key={idx}
                      current={day.state === "cur"}
                      selected={String(selectDate) === String(day.dateObj)}
                      onClick={() =>
                        day.state === "cur" && selectDateHandle(day)
                      }
                    >
                      {day.date}
                    </DateBox>
                  ))
                )}
              </DateGrid>
            </CalendarContainer>
          </>
        )}
      </RowBox>
    </>
  );
};

export default Date_Picker;
