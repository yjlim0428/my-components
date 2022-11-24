import { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  overflow: hidden;
`;

const Slide = styled.div<{ last: boolean; count: number }>`
  display: flex;
  transition: ${({ last }) => (last ? "" : "transform 0.5s ease-in")};
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

const Circles = styled.div`
  display: flex;
  margin: 10px auto;
`;

const Circle = styled.div<{ focus: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid lightgray;
  background-color: ${({ focus }) => (focus ? "lightgray" : "")};
  margin: 2px;
  cursor: pointer;
`;

const Carousel = () => {
  const length = 4;
  const [count, setCount] = useState(0);
  const [last, setLast] = useState(false);
  useEffect(() => {
    const timer = setInterval(
      () => {
        if (count < length - 1) {
          setLast(false);
          setCount((pre) => pre + 1);
        } else {
          setLast(true);
          setCount(0);
        }
      },
      last ? 0 : 2500
    );
    return () => {
      clearInterval(timer);
    };
  }, [count]);
  return (
    <Wrapper>
      <Slide count={count} last={last}>
        <div>first</div>
        <div>second</div>
        <div>third</div>
        <div>first</div>
      </Slide>
      <Circles>
        <Circle
          focus={count === 0 || count === 3}
          onClick={() => setCount(0)}
        />
        <Circle focus={count === 1} onClick={() => setCount(1)} />
        <Circle focus={count === 2} onClick={() => setCount(2)} />
      </Circles>
    </Wrapper>
  );
};

export default Carousel;
