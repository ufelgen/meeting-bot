import styled from "styled-components";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { useSpeechSynthesisApi } from "@/hooks/WebSpeech";
import PresetButtons from "./PresetButtons";
import CustomButtons from "./CustomButtons";
import {
  SelectButtonSection,
  Textarea,
  StyledCommands,
  SecondSection,
} from "./StylesForSpeech";

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

  const [input, setInput] = useState("preset");
  const [customButtons, setCustomButtons] = useLocalStorageState(
    "customButtons",
    {
      defaultValue: [],
    }
  );
  const [buttonForm, setButtonForm] = useState(false);

  /*   if (typeof window !== "undefined") {
    const synth = window.speechSynthesis;
    const amISpeaking = synth.speaking;
    return amISpeaking;
  }
 */
  function handleToggleButtonForm() {
    setButtonForm(!buttonForm);
  }

  function handleSpeak(message) {
    let msg = new SpeechSynthesisUtterance();

    msg.text = message;
    msg.lang = "en";
    /*     msg.voice = voices?.filter(function (voice) {
      return voice.name == "Google UK English Male";
    })[0]; */
    function speak() {
      window.speechSynthesis.speak(msg);
    }
    speak();
  }

  function handleNewButton(newButton) {
    setCustomButtons([...customButtons, newButton]);
  }

  function handleDeleteButton(buttonId) {
    const confirmation = confirm("do you want to delete this phrase?");
    if (confirmation) {
      setCustomButtons(
        customButtons.filter((button) => button.id !== buttonId)
      );
    }
  }
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
        {input === "preset" && <PresetButtons onSpeak={handleSpeak} />}

        {input === "custom" && (
          <CustomButtons
            onToggleButtonForm={handleToggleButtonForm}
            onSpeak={handleSpeak}
            onAddNewButton={handleNewButton}
            customButtons={customButtons}
            buttonForm={buttonForm}
            onDeleteButton={handleDeleteButton}
          />
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
            {input === "freestyle" && <button onClick={speak}>speak</button>}
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
