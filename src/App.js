import Quotes from "./components/Quotes/Quotes";
import NewQuote from "./components/NewQuotes/NewQuote";
import { useState } from "react";

const dummyQuotes = [
  {
    id: "1",
    quote:
      "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.",
  },
  {
    id: "2",
    quote: "The only thing we have to fear is fear itself.",
  },
];

const App = () => {
  const [quotes, setQuotes] = useState(dummyQuotes);

  const addQuoteHandler = (quote) => {
    setQuotes((prevQuotes) => {
      return [...prevQuotes, quote];
    });
  };

  const deleteQuoteHandler = (quoteId) => {
    setQuotes((prevQuotes) => {
      const updatedQuotes = prevQuotes.filter((quote) => quote.id !== quoteId);
      return updatedQuotes;
    });
  };

  const deleteAllHander = () => {
    setQuotes((prevQuotes) => {
      const updatedQuotes = prevQuotes.filter((quote) => quote.id === 3);
      return updatedQuotes;
    });
  };

  return (
    <div>
      <NewQuote onAddQuote={addQuoteHandler} />
      <Quotes
        items={quotes}
        onDeleteQuote={deleteQuoteHandler}
        onDeleteAll={deleteAllHander}
      />
    </div>
  );
};

export default App;
