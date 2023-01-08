import styled from "styled-components";
import Title from "../components/layout/Title";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ivory;
`;

export default function Home() {
  return (
    <Container>
      <Title title="My Components" />
      hey
    </Container>
  );
}
