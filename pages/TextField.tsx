import Title from "../components/layout/Title";
import styled from "styled-components";
import { useState } from "react";

const InputWrapper = styled.div`
  width: 292px;
  height: 50px;
  position: relative;
  margin: 15px 0;
`;

const InputTitle = styled.span`
  position: absolute;
  top: 15px;
  left: 20px;
  font-size: 17px;
  transition: 0.3s;
  background-color: white;
  padding: 0 5px;
`;

const InputBox = styled.input`
  all: unset;
  width: 100%;
  height: 100%;
  font-size: 17px;
  padding-left: 20px;
  border-radius: 10px;
  box-sizing: border-box;
  border: 0.5px solid lightgray;
  &:focus {
    border: 2px solid lightblue;
  }
  &:focus ~ span,
  &:valid ~ span {
    top: -5px;
    font-size: 14px;
    color: lightblue;
  }
`;

const TextField = ({ title = "아이디" }) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <Title title="My TextField" />
      <InputWrapper>
        <InputBox
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <InputTitle>{title}</InputTitle>
      </InputWrapper>
    </div>
  );
};

export default TextField;
