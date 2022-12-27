import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  /* width: 100%; */
  width: 350px;
  height: 100vh;
  position: sticky;
  top: 0;
  bottom: 0;
  padding: 50px;
  background-color: lightgray;
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  color: #333;
  font-size: 18px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  cursor: pointer;
  &:hover {
    color: #000;
  }
`;

const Sidebar = () => {
  return (
    <Container>
      <Link href="/">
        <Button>Home</Button>
      </Link>
      <Link href="/Calendar">
        <Button>Calendar</Button>
      </Link>
      <Link href="/Carousel">
        <Button>Carousel</Button>
      </Link>
      <Link href="/BarChart">
        <Button>BarChart</Button>
      </Link>
      <Link href="/TextField">
        <Button>TextField</Button>
      </Link>
      <Link href="/Modal">
        <Button>Modal</Button>
      </Link>
      <Link href="/FloatingButton">
        <Button>FloatingButton</Button>
      </Link>
    </Container>
  );
};

export default Sidebar;
