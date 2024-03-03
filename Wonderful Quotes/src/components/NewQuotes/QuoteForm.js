import styles from "./QuoteForm.module.css";
import { useState } from "react";

const QuoteForm = (props) => {
  const [enteredQuote, setEnteredQuote] = useState("");
  const [isValid, setIsValid] = useState(true);

  const quoteChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(false);
    }

    setIsValid(true);
    setEnteredQuote(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredQuote.trim().length === 0) {
      setIsValid(false);
      window.alert("Please fill out all fields.");
      return;
    }

    const quote = {
      quote: enteredQuote,
      charCount: 0,
    };

    props.onSaveQuoteData(quote);

    setEnteredQuote("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>Quote</label>
        <textarea
          value={enteredQuote}
          onChange={quoteChangeHandler}
          rows="5"
          cols="95"
          placeholder="Enter a quote here"
        />
      </div>
      <div className="new-quote__actions">
        <button type="submit">Add Quote</button>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default QuoteForm;
