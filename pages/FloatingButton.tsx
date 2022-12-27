import { useEffect, useState } from "react";
import styled from "styled-components";
import Title from "../components/layout/Title";
import { FaChevronUp } from "react-icons/fa";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Page = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ color }) => color};
`;

const FloatingBtn = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 50px;
  right: 400px;
  border-radius: 50%;
  color: white;
  background-color: black;
  cursor: pointer;
`;

const FloatingButton = () => {
  const [floating, setFloating] = useState(false);

  useEffect(() => {
    const scroll = () => {
      if (document.documentElement.scrollTop > 0) setFloating(true);
      else setFloating(false);
    };

    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, []);

  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Title title="My FloatingButton" />
      <Container>
        <Page color="#f9f9f9" />
        <Page color="#e8e8e8" />
      </Container>
      {floating && (
        <FloatingBtn onClick={ScrollToTop}>
          <FaChevronUp />
        </FloatingBtn>
      )}
    </>
  );
};

export default FloatingButton;
