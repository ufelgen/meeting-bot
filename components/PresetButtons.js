import { ButtonSection } from "./StylesForSpeech";

export default function PresetButtons({ onSpeak }) {
  return (
    <ButtonSection>
      <button
        onClick={() =>
          onSpeak(
            "Hello and welcome to another useless meeting that could have been an email"
          )
        }
      >
        greeting
      </button>
      <button onClick={() => onSpeak("What a great idea. Can we go home now?")}>
        agree
      </button>
      <button
        onClick={() =>
          onSpeak("That is a terrible idea. Please exercise better judgement.")
        }
      >
        disagree
      </button>
    </ButtonSection>
  );
}
