import styled from "styled-components";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { useSpeechSynthesisApi } from "@/hooks/WebSpeech";

export default function FreeSpeech() {
  const {
    text,
    setText,
    isSpeaking,
    isPaused,
    isResumed,
    isEnded,
    speak,
    pause,
    resume,
    cancel,
  } = useSpeechSynthesisApi();

  const testArray = [{ name: "test", message: "huhu testi" }];
  const [input, setInput] = useState("preset");
  const [custom, setCustom] = useLocalStorageState("custom", {
    defaultValue: testArray,
  });
  const [buttonForm, setButtonForm] = useState(false);

  /*   if (typeof window !== "undefined") {
    const synth = window.speechSynthesis;
    const amISpeaking = synth.speaking;
    return amISpeaking;
  }
 */

  function handleSpeak(message) {
    let msg = new SpeechSynthesisUtterance();

    msg.text = message;
    msg.lang = "en";
    function speak() {
      window.speechSynthesis.speak(msg);
    }
    speak();
  }

  function handleNewButton() {}
  return (
    <>
      <Container>
        <SelectButtonSection>
          <button
            onClick={() => setInput("preset")}
            className={input === "preset" ? "current" : ""}
          >
            preset
          </button>
          <button
            onClick={() => setInput("custom")}
            className={input === "custom" ? "current" : ""}
          >
            custom
          </button>
          <button
            onClick={() => setInput("freestyle")}
            className={input === "freestyle" ? "current" : ""}
          >
            freestyle
          </button>
        </SelectButtonSection>
        {input === "preset" && (
          <ButtonSection>
            <button
              onClick={() =>
                handleSpeak(
                  "Hello and welcome to another useless meeting that could have been an email"
                )
              }
            >
              greeting
            </button>
            <button
              onClick={() =>
                handleSpeak("What a great idea. Can we go home now?")
              }
            >
              agree
            </button>
            <button
              onClick={() =>
                handleSpeak(
                  "That is a terrible idea. Please exercise better judgement."
                )
              }
            >
              disagree
            </button>
          </ButtonSection>
        )}

        {input === "custom" && (
          <CustomSection>
            <AddButton onClick={() => setButtonForm(true)}>+</AddButton>
            <ButtonSection>
              {custom.map((button) => {
                return (
                  <button
                    key={button.name}
                    onClick={() => handleSpeak(button.message)}
                  >
                    {button.name}
                  </button>
                );
              })}
            </ButtonSection>
            {buttonForm && (
              <form onSubmit={handleNewButton}>
                <label htmlFor="name"></label>
                <input id="name" name="name" placeholder="name your phrase" />
                <label htmlFor="message"></label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="what's your phrase?"
                />
                <button type="submit">add</button>
                <button type="button" onClick={() => setButtonForm(false)}>
                  cancel
                </button>
              </form>
            )}
          </CustomSection>
        )}

        {input === "freestyle" && (
          <Textarea
            value={text}
            cols={35}
            rows={10}
            onChange={(event) => setText(event.target.value)}
          />
        )}

        <StyledCommands>
          <SecondSection>
            <button onClick={speak}>speak</button>
            <button onClick={pause}>pause</button>
            <button onClick={resume}>resume</button>
            <button onClick={cancel}>cancel</button>
          </SecondSection>
        </StyledCommands>
      </Container>
    </>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem;
`;

const ButtonSection = styled.section`
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
const SelectButtonSection = styled(ButtonSection)`
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
const Textarea = styled.textarea`
  border: 1px solid black;
`;

const SecondSection = styled(ButtonSection)`
  margin: 0;
`;

const StyledCommands = styled.footer`
  position: fixed;
  bottom: 0;
  height: 10vh;
`;

const CustomSection = styled.section`
  position: relative;
  height: 22vh;
  width: 90vw;
  overflow-y: scroll;
`;

const AddButton = styled.button`
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
