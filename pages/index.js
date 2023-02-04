import styled from "styled-components";
import FreeSpeech from "@/components/FreeSpeech";
import RobotFace from "@/components/RobotFace";

export default function Home() {
  return (
    <>
      <StyledHeader>Meeting Bot</StyledHeader>
      <RobotFace />
      <FreeSpeech />
    </>
  );
}

const StyledHeader = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  background-color: lightgrey;
  padding: 1rem;
`;
