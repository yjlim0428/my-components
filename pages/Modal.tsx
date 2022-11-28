import { useState } from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import Title from "../components/Title";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
`;

const BgContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.621);
`;

const ModalContainer = styled.div`
  width: 300px;
  height: 400px;
  position: relative;
  border-radius: 10px;
  background-color: #fff;
`;

const CloseBtn = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 20px;
  cursor: pointer;
`;

const ModalOpenBtn = styled.button`
  cursor: pointer;
`;

const Modal = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Title title="My Modal" />
      <ModalOpenBtn onClick={() => setModal(true)}>모달 오픈</ModalOpenBtn>
      {modal && (
        <Container>
          <BgContainer onClick={() => setModal(false)} />
          <ModalContainer>
            <CloseBtn onClick={() => setModal(false)}>
              <FaTimes />
            </CloseBtn>
          </ModalContainer>
        </Container>
      )}
    </>
  );
};

export default Modal;
