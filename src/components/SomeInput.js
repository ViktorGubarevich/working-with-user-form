import { useState, useRef } from "react";

const SomeInput = () => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [isEnteredNameValid, setIsEnteredNameValid] = useState(true);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === "") {
      setIsEnteredNameValid(false);
      return;
    }

    setIsEnteredNameValid(true);

    console.log(enteredName);
    console.log(nameInputRef.current.value);
    setEnteredName("");
  };

  const nameInputClasses = isEnteredNameValid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Введите Имя</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
        />
        {!isEnteredNameValid && <p className="error-text">Введите имя</p>}
      </div>
      <div className="form-actions">
        <button>Отправить</button>
      </div>
    </form>
  );
};

export default SomeInput;
