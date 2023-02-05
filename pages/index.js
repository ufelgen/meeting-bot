import Header from "@/components/Header";
import FreeSpeech from "@/components/FreeSpeech";
import RobotFace from "@/components/RobotFace";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { useSpeechSynthesisApi } from "@/hooks/WebSpeech";

export default function Home() {
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
  const [currentlySpeaking, setCurrentlySpeaking] = useState(false);

  function onSetInput(input) {
    setInput(input);
  }

  function pauseSpeaking() {
    pause();
    setCurrentlySpeaking(false);
  }

  function resumeSpeaking() {
    resume();
    setCurrentlySpeaking(true);
  }

  function cancelSpeaking() {
    cancel();
    setCurrentlySpeaking(false);
  }

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
    msg.onstart = (event) => {
      setCurrentlySpeaking(true);
    };

    msg.onend = (event) => {
      setCurrentlySpeaking(false);
    };
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
      <Header />
      <RobotFace currentlySpeaking={currentlySpeaking} />
      <FreeSpeech
        text={text}
        onSetText={setText}
        pause={pauseSpeaking}
        resume={resumeSpeaking}
        cancel={cancelSpeaking}
        onSetInput={onSetInput}
        onToggleButtonForm={handleToggleButtonForm}
        onSpeak={handleSpeak}
        onNewButton={handleNewButton}
        onDeleteButton={handleDeleteButton}
        customButtons={customButtons}
        buttonForm={buttonForm}
        input={input}
      />
    </>
  );
}
