import styled from "styled-components";

export const ButtonSection = styled.section`
  position: relative;
  align-items: space-around;
  margin-bottom: 1rem;

  button {
    background-color: black;
    color: white;
    margin: 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
  }
`;
export const SelectButtonSection = styled(ButtonSection)`
  width: 90vw;

  button {
    width: 33.3%;
    margin: 0;

    &.current {
      background-color: darkgrey;
      color: black;
    }
  }
`;
export const Textarea = styled.textarea`
  border: 1px solid black;
`;

export const SecondSection = styled(ButtonSection)`
  margin: 0;
`;

export const StyledCommands = styled.footer`
  position: fixed;
  bottom: 0;
  height: 10vh;
`;

export const CustomSection = styled.section`
  position: relative;
  height: 22vh;
  width: 90vw;
  overflow-y: scroll;
`;

export const AddButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 20px;
  width: 20px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 10px;
`;

export const AddButtonForm = styled.form`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  right: 10px;
  background-color: lightgrey;
  margin: 1rem;
  padding: 0.5rem;
  input,
  textarea {
    padding: 0.5rem;
    border-radius: 5px;
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 5px;
  }
  button {
    background-color: black;
    color: white;
    padding: 0.2rem;
    margin-left: 0.5rem;
    border-radius: 5px;
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 20px;
  width: 20px;
  background-color: lightgrey;
  color: black;
  font-weight: bold;
  border: none;
  border-radius: 10px;
`;

export const CustomButtonContainer = styled.div`
  position: relative;
`;

export const CustomButton = styled.button`
  background-color: black;
  color: white;
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
`;

export const AllCustomButtonsContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: space-around;
`;
