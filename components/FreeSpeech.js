import styled from "styled-components";

import PresetButtons from "./PresetButtons";
import CustomButtons from "./CustomButtons";
import {
  SelectButtonSection,
  Textarea,
  StyledCommands,
  SecondSection,
} from "./StylesForSpeech";

export default function FreeSpeech({
  text,
  onSetText,
  isSpeaking,
  isPaused,
  isResumed,
  isEnded,
  speak,
  pause,
  resume,
  cancel,
  onSetInput,
  onSetButtonForm,
  onSetCurrentlySpeaking,
  onSetCustomButtons,
  onToggleButtonForm,
  onSpeak,
  onNewButton,
  onDeleteButton,
  customButtons,
  buttonForm,
  input,
}) {
  return (
    <>
      <Container>
        <SelectButtonSection>
          <button
            onClick={() => onSetInput("preset")}
            className={input === "preset" ? "current" : ""}
          >
            preset
          </button>
          <button
            onClick={() => onSetInput("custom")}
            className={input === "custom" ? "current" : ""}
          >
            custom
          </button>
          <button
            onClick={() => onSetInput("freestyle")}
            className={input === "freestyle" ? "current" : ""}
          >
            freestyle
          </button>
        </SelectButtonSection>
        {input === "preset" && <PresetButtons onSpeak={onSpeak} />}

        {input === "custom" && (
          <CustomButtons
            onToggleButtonForm={onToggleButtonForm}
            onSpeak={onSpeak}
            onNewButton={onNewButton}
            customButtons={customButtons}
            buttonForm={buttonForm}
            onDeleteButton={onDeleteButton}
            onSetInput={onSetInput}
          />
        )}

        {input === "freestyle" && (
          <Textarea
            value={text}
            cols={35}
            rows={10}
            onChange={(event) => onSetText(event.target.value)}
          />
        )}

        <StyledCommands>
          <SecondSection>
            {input === "freestyle" && (
              <button onClick={() => onSpeak(text)}>speak</button>
            )}
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
