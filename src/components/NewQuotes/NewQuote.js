import QuoteForm from "./QuoteForm";
import "./NewQuote.css";
import { useState } from "react";

const NewQuote = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveQuoteDataHandler = (enteredQuote) => {
    const quoteData = {
      ...enteredQuote,
      id: Math.random().toString(),
    };
    props.onAddQuote(quoteData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-quote">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Quote</button>
      )}
      {isEditing && (
        <QuoteForm
          onSaveQuoteData={saveQuoteDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewQuote;
