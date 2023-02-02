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
    <>
      <section>
        <div>
          <textarea
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </div>
        <div>
          <button onClick={speak}>speak</button>
          <button onClick={pause}>pause</button>
          <button onClick={resume}>resume</button>
          <button onClick={cancel}>cancel</button>
        </div>
        {isSpeaking && "speaking"}
        {isPaused && "paused"}
        {isResumed && "resumed"}
        {isEnded && "cancelled"}
      </section>
      <section>
        <button onClick={greeting}>greeting</button>
        <button onClick={agree}>agree</button>
        <button onClick={disagree}>disagree</button>
      </section>
    </>
  );
}
