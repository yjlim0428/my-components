import Date_Picker from "../components/feature/Calendar/Date_Picker";
import Title from "../components/layout/Title";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Calendar() {
  return (
    <Wrapper>
      <Title title="My Calendar" />
      <Date_Picker />
    </Wrapper>
  );
}

export default Calendar;
