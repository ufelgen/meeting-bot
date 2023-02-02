import styled from "styled-components";
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

  function greeting() {
    let msg = new SpeechSynthesisUtterance();

    msg.text =
      "Hello and welcome to another useless meeting that could have been an email";
    msg.lang = "en";
    function speak() {
      window.speechSynthesis.speak(msg);
    }
    speak();
  }

  function agree() {
    let msg = new SpeechSynthesisUtterance();

    msg.text = "What a great idea. Can we go home now?";
    msg.lang = "en";
    function speak() {
      window.speechSynthesis.speak(msg);
    }
    speak();
  }

  function disagree() {
    let msg = new SpeechSynthesisUtterance();

    msg.text = "That is a terrible idea. Please exercise better judgement.";
    msg.lang = "en";
    function speak() {
      window.speechSynthesis.speak(msg);
    }
    speak();
  }

  return (
    <Container>
      <ButtonSection>
        <button onClick={greeting}>greeting</button>
        <button onClick={agree}>agree</button>
        <button onClick={disagree}>disagree</button>
      </ButtonSection>
      <Textarea
        value={text}
        cols={35}
        rows={10}
        onChange={(event) => setText(event.target.value)}
      />

      <SecondSection>
        <button onClick={speak}>speak</button>
        <button onClick={pause}>pause</button>
        <button onClick={resume}>resume</button>
        <button onClick={cancel}>cancel</button>
      </SecondSection>
      {isSpeaking && "speaking"}
      {isPaused && "paused"}
      {isResumed && "resumed"}
      {isEnded && "cancelled"}
    </Container>
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

const Textarea = styled.textarea`
  border: 1px solid black;
`;

const SecondSection = styled(ButtonSection)`
  margin: 0;
`;
