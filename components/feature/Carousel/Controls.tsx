import React, { useState } from "react";
import styled, { css } from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Wrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0 auto;
  overflow: hidden;
`;

const Slide = styled.div<{ count: number }>`
  display: flex;
  transition: transform 0.5s ease-in;
  transform: ${({ count }) => "translateX(-" + count * 100 + "%)"};
  > div {
    width: 100%;
    height: 300px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    border-radius: 40px;
    :nth-child(1) {
      background-color: #f4f6f6;
    }
    :nth-child(2) {
      background-color: #eaeded;
    }
    :nth-child(3) {
      background-color: #d5dbdb;
    }
    :nth-child(4) {
      background-color: #f4f6f6;
    }
  }
`;

const ControlBtn = styled.div<{ right: boolean; valid: boolean }>`
  width: 30px;
  height: 30px;
  display: ${({ valid }) => (valid ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 10px;
  top: calc(50% - 15px);
  border-radius: 50%;
  color: white;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 1;
  cursor: pointer;
  ${({ right }) =>
    right &&
    css`
      left: calc(100% - 40px);
    `}
`;

const Controls = () => {
  const length = 4;
  const [count, setCount] = useState(0);

  const handleButton = (arrow: string) => {
    switch (arrow) {
      case "left":
        if (count !== 0) setCount(count - 1);
        break;
      case "right":
        if (count !== length - 1) setCount(count + 1);
        break;
    }
  };

  return (
    <Wrapper>
      <ControlBtn
        right={false}
        valid={count !== 0}
        onClick={() => handleButton("left")}
      >
        <FaChevronLeft />
      </ControlBtn>
      <ControlBtn
        right={true}
        valid={count !== length - 1}
        onClick={() => handleButton("right")}
      >
        <FaChevronRight />
      </ControlBtn>
      <Slide count={count}>
        <div>first</div>
        <div>second</div>
        <div>third</div>
        <div>fourth</div>
      </Slide>
    </Wrapper>
  );
};

export default Controls;
