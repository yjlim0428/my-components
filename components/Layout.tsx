import { ReactNode } from "react";
import Head from "next/head";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 350px;
`;

interface Props {
  children: ReactNode;
}

const ComponentViewer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GitHubLink = styled.div`
  width: 0;
  height: 0;
  border-bottom: 50px solid transparent;
  border-top: 50px solid black;
  border-left: 50px solid black;
  border-right: 50px solid transparent;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
`;

const GitHubIcon = styled.img`
  width: 35px;
  height: auto;
  position: fixed;
  top: 13px;
  left: 13px;
  filter: brightness(100%);
`;

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Container>
        <ComponentViewer>
          <Link
            target="_blank"
            href="https://github.com/yjlim0428/my-components"
          >
            <GitHubLink>
              <GitHubIcon src="/GitHub-Mark-Light-64px.png" />
            </GitHubLink>
          </Link>
          {children}
        </ComponentViewer>
        <Sidebar />
      </Container>
    </>
  );
}
