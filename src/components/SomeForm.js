import useInput from "../hooks/useInput";

const isInputEmpty = (val) => val.trim() !== "";
const isEmailValid = (val) => val.includes("@");

const SomeForm = (props) => {
  const {
    value: enteredFirstNameValue,
    hasError: hasFirstNameInputError,
    isValid: isEnteredFirstNameValid,
    inputChangeHandler: firstNameInputChangeHandler,
    inputLostFocusHandler: firstNameInputLostFocusHandler,
    resetValues: resetFirstNameInputValues,
  } = useInput(isInputEmpty);

  const {
    value: enteredLastNameValue,
    hasError: hasLastNameInputError,
    isValid: isEnteredLastNameValid,
    inputChangeHandler: lastNameInputChangeHandler,
    inputLostFocusHandler: lastNameInputLostFocusHandler,
    resetValues: resetLastNameInputValues,
  } = useInput(isInputEmpty);

  const {
    value: enteredEmailValue,
    hasError: hasEmailInputError,
    isValid: isEnteredEmailValid,
    inputChangeHandler: emailInputChangeHandler,
    inputLostFocusHandler: emailInputLostFocusHandler,
    resetValues: resetEmailInputValues,
  } = useInput(isEmailValid);

  let isFormValid = false;

  if (
    isEnteredFirstNameValid &&
    isEnteredLastNameValid &&
    isEnteredEmailValid
  ) {
    isFormValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!isEnteredFirstNameValid || !isEnteredEmailValid) {
      return;
    }

    resetFirstNameInputValues();
    resetLastNameInputValues();
    resetEmailInputValues();
  };

  const firstNameInputClasses = hasFirstNameInputError
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClasses = hasLastNameInputError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = hasEmailInputError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="first-name">Введите Имя</label>
          <input
            type="text"
            id="first-name"
            value={enteredFirstNameValue}
            onChange={firstNameInputChangeHandler}
            onBlur={firstNameInputLostFocusHandler}
          />
          {hasFirstNameInputError && (
            <p className="error-text">Нужно обязательно ввести имя</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="last-name">Введите Фамилию</label>
          <input
            type="text"
            id="last-name"
            value={enteredLastNameValue}
            onChange={lastNameInputChangeHandler}
            onBlur={lastNameInputLostFocusHandler}
          />
          {hasLastNameInputError && (
            <p className="error-text">Нужно обязательно ввести фамилию</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Введите E-Mail</label>
        <input
          type="text"
          id="email"
          value={enteredEmailValue}
          onChange={emailInputChangeHandler}
          onBlur={emailInputLostFocusHandler}
        />
        {hasEmailInputError && (
          <p className="error-text">Нужно обязательно ввести email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Отправить</button>
      </div>
    </form>
  );
};

export default SomeForm;
