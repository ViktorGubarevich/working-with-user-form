import { useState } from "react";

const SomeInput = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [wasNameInputTouched, setWasNameInputTouched] = useState(false);
  const [wasEmailInputTouched, setWasEmailInputTouched] = useState(false);

  const isEnteredNameValid = enteredName.trim() !== "";
  const isNameInputInvalid = !isEnteredNameValid && wasNameInputTouched;

  const isEnteredEmailValid = enteredEmail.includes("@");
  const isEmailInputInvalid = !isEnteredEmailValid && wasEmailInputTouched;

  let isFormValid = false;

  if (isEnteredNameValid && isEnteredEmailValid) {
    isFormValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputLostFocusHandler = (event) => {
    setWasNameInputTouched(true);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputLostFocusHandler = (event) => {
    setWasEmailInputTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setWasNameInputTouched(true);

    if (!isEnteredNameValid) {
      return;
    }

    setEnteredName("");
    setWasNameInputTouched(false);
    setEnteredEmail("");
    setWasEmailInputTouched(false);
  };

  const nameInputClasses = isNameInputInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = isEmailInputInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Введите Имя</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputLostFocusHandler}
          value={enteredName}
        />
        {isNameInputInvalid && (
          <p className="error-text">Нужно обязательно ввести имя</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Введите email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputLostFocusHandler}
          value={enteredEmail}
        />
        {isEmailInputInvalid && (
          <p className="error-text">Нужно обязательно ввести email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Отправить</button>
      </div>
    </form>
  );
};

export default SomeInput;
