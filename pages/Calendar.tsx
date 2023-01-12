import Date_Picker from "../components/feature/Calendar/Date_Picker";
import Title from "../components/layout/Title";
import styled from "styled-components";
import Date_Range_Picker from "../components/feature/Calendar/Date_Range_Picker";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Calendar() {
  return (
    <>
      <Title title="My Calendar" />
      <Wrapper>
        <Date_Picker />
      </Wrapper>
      <Wrapper>
        <Date_Range_Picker />
      </Wrapper>
    </>
  );
}

export default Calendar;
