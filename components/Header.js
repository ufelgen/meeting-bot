import styled from "styled-components";

export default function Header() {
  return <StyledHeader>Meeting Bot</StyledHeader>;
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  background-color: lightgrey;
  padding: 1rem;
`;
