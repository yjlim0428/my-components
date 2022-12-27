import React from "react";
import AutoCarousel from "../components/feature/Carousel/AutoCarousel";
import Controls from "../components/feature/Carousel/Controls";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Carousel = () => {
  return (
    <>
      <Wrapper>
        <AutoCarousel />
      </Wrapper>
      <Wrapper>
        <Controls />
      </Wrapper>
    </>
  );
};

export default Carousel;
