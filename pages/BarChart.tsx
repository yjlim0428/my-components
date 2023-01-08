import Title from "../components/layout/Title";
import styled, { keyframes } from "styled-components";
import {
  PropsTypes,
  ContainerTypes,
  ChartTitleTypes,
  DataTitleTextTypes,
  DataTitleDotType,
  BarType,
} from "../lib/BarChart";
import { useEffect, useState } from "react";

const barAnimation = (height: number) => keyframes`
    0%{
        height: 0%;
    }
    100%{
        height:${height}%;
    }
`;

const Container = styled.div<ContainerTypes>`
  width: ${({ width }) => (width ? width : 616)}px;
  height: ${({ height }) => (height ? height : 334)}px;
`;

const ChartTitle = styled.div<ChartTitleTypes>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 16)}px;
`;

const RowBox = styled.div<{ jContents: string }>`
  width: 100%;
  display: flex;
  justify-content: ${({ jContents }) => jContents};
  align-items: center;
  margin-bottom: 12px;
`;

const DataTitleRowBox = styled.div`
  display: flex;
  align-items: center;
`;

const TitleDotSet = styled.div`
  display: flex;
  align-items: center;
  margin-right: 12px;
  &:last-child {
    margin: 0;
  }
`;

const DataTitleText = styled.div<DataTitleTextTypes>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 16)}px;
  color: #a6afbd;
`;

const DataTitleDot = styled.div<DataTitleDotType>`
  width: ${({ width }) => (width ? width : 7)}px;
  height: ${({ width }) => (width ? width : 7)}px;
  background-color: ${({ color }) => (color ? color : "#000")};
  border-radius: 50%;
  margin-right: 8px;
`;

const ChartViewr = styled.div`
  width: 100%;
  height: calc(100% - 32px);
  border-top: 2px solid #e0e0e0;
  border-bottom: 2px solid #e0e0e0;
  display: flex;
  align-items: center;
`;

// 바, 눈금선의 부모
const ChartRelative = styled.div`
  width: 100%;
  height: 75%;
  position: relative;
  margin-left: auto;
`;

const BarWrapper = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  position: absolute;
  right: 0;
`;

const BarSet = styled.div`
  width: 1px;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const Bar = styled.div<BarType>`
  width: ${({ width }) => width}px;
  background-color: ${({ color }) => color};
  border-radius: 3px;
  animation: 2s ${({ height }) => height && barAnimation(height)};
  animation-fill-mode: forwards;
  flex-shrink: 0;
`;

const XLabelWrapper = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  right: 0;
  bottom: -10%;
`;

const XLabelText = styled.div`
  width: 1px;
  display: flex;
  justify-content: center;
  white-space: nowrap;
  font-size: 10px;
  color: #999999;
`;

const DotAndYLabelWrapper = styled.div<{ top: number }>`
  width: 95%;
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  bottom: ${({ top }) => top}%;
  border-bottom: 1px dashed #dddddd;
`;

const YLabelText = styled.div<{ fontSize: number | undefined }>`
  width: 5%;
  margin-left: -5%;
  margin-bottom: ${({ fontSize }) =>
    fontSize ? `-calc(${fontSize}px / 2)` : -4}px;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 8)}px;
  color: #999999;
`;

// 더미데이터
const styleProps = {
  width: 616,
  height: 334,
  barWidth: 7,
  barColor: ["#103B65", "#CCCCCC"],
  chartTitleFontSize: 16,
  dataTitleFontSize: 12,
  dotWidth: 7,
};

// 더미데이터
const dataProps = [
  {
    title: "가입",
    data: [17, 5, 19, 13, 25, 18, 9, 13, 23, 15, 25, 28],
  },
  {
    title: "탈퇴",
    data: [5, 2, 10, 7, 20, 13, 2, 4, 13, 9, 19, 16],
  },
];

const BarChart = ({
  style = styleProps,
  title = "가입자 수 통계",
  xLabel = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
  yUnit = 10,
  data = dataProps,
}: PropsTypes) => {
  // y축 가장 높은 값
  const [yUnitMax, setYUnitMax] = useState(
    (Math.floor(Math.max(...data[0].data) / yUnit) + 1) * yUnit
  );

  useEffect(() => {
    setYUnitMax((Math.floor(Math.max(...data[0].data) / yUnit) + 1) * yUnit);
  }, []);

  return (
    <>
      <Title title="My BarChart" />
      <Container width={style.width} height={style.height}>
        {/* title */}
        <RowBox jContents="space-between">
          <ChartTitle fontSize={style.chartTitleFontSize}>{title}</ChartTitle>
          <DataTitleRowBox>
            {data.map(({ title }, index) => (
              <TitleDotSet key={index}>
                <DataTitleDot
                  width={style.dotWidth}
                  color={style.barColor && style.barColor[index]}
                />
                <DataTitleText fontSize={style.dataTitleFontSize}>
                  {title}
                </DataTitleText>
              </TitleDotSet>
            ))}
          </DataTitleRowBox>
        </RowBox>

        <ChartViewr>
          <ChartRelative>
            {/* y축 */}
            {[100, 75, 50, 25, 0].map((number, index) => (
              <DotAndYLabelWrapper key={index} top={number}>
                <YLabelText fontSize={undefined}>
                  {yUnitMax * (number / 100)}
                </YLabelText>
              </DotAndYLabelWrapper>
            ))}

            {/* 바 */}
            <BarWrapper>
              {data[0].data.map((value, index) => (
                <BarSet key={index}>
                  {data.map((dataObj, idx) => (
                    <Bar
                      key={`${dataObj.title} - ${index}`}
                      width={style.barWidth}
                      height={(dataObj.data[index] / yUnitMax) * 100}
                      color={style.barColor && style.barColor[idx]}
                    />
                  ))}
                </BarSet>
              ))}
            </BarWrapper>

            {/* x축 */}
            <XLabelWrapper>
              {xLabel.map((text, index) => (
                <XLabelText key={index}>{text}</XLabelText>
              ))}
            </XLabelWrapper>
          </ChartRelative>
        </ChartViewr>
      </Container>
    </>
  );
};

export default BarChart;
