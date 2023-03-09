import { useState } from "react";

const SomeInput = () => {
  const [enteredName, setEnteredName] = useState("");
  const [wasNameInputTouched, setWasNameInputTouched] = useState(false);

  const isEnteredNameValid = enteredName.trim() !== "";
  const isNameInputInvalid = !isEnteredNameValid && wasNameInputTouched;

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputLostFocusHandler = (event) => {
    setWasNameInputTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setWasNameInputTouched(true);

    if (!isEnteredNameValid) {
      return;
    }

    setEnteredName("");
    setWasNameInputTouched(false);
  };

  const nameInputClasses = isNameInputInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Введите Имя</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputLostFocusHandler}
        />
        {isNameInputInvalid && (
          <p className="error-text">Нужно обязательно ввести имя</p>
        )}
      </div>
      <div className="form-actions">
        <button>Отправить</button>
      </div>
    </form>
  );
};

export default SomeInput;
