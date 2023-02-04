import {
  CustomSection,
  AddButton,
  AddButtonForm,
  DeleteButton,
  CustomButtonContainer,
  CustomButton,
  AllCustomButtonsContainer,
} from "./StylesForSpeech";
import { nanoid } from "nanoid";

export default function CustomButtons({
  onToggleButtonForm,
  onSpeak,
  onAddNewButton,
  customButtons,
  buttonForm,
  onDeleteButton,
}) {
  function handleSubmitNewButton(event) {
    event.preventDefault();

    const newButton = {
      id: nanoid(),
      name: event.target.elements.name.value,
      message: event.target.elements.message.value,
    };

    onAddNewButton(newButton);
    onToggleButtonForm();
  }
  return (
    <CustomSection>
      {!buttonForm && <AddButton onClick={onToggleButtonForm}>+</AddButton>}
      <AllCustomButtonsContainer>
        {customButtons?.map((button) => {
          return (
            <CustomButtonContainer>
              <CustomButton
                key={button.name}
                onClick={() => onSpeak(button.message)}
              >
                {button.name}
              </CustomButton>
              <DeleteButton onClick={() => onDeleteButton(button.id)}>
                x
              </DeleteButton>
            </CustomButtonContainer>
          );
        })}
      </AllCustomButtonsContainer>
      {buttonForm && (
        <AddButtonForm onSubmit={handleSubmitNewButton}>
          <label htmlFor="name"></label>
          <input id="name" name="name" placeholder="name your phrase" />
          <label htmlFor="message"></label>
          <textarea
            id="message"
            name="message"
            placeholder="what's your phrase?"
          />
          <div>
            <button type="submit">add</button>
            <button type="button" onClick={onToggleButtonForm}>
              cancel
            </button>
          </div>
        </AddButtonForm>
      )}
    </CustomSection>
  );
}
