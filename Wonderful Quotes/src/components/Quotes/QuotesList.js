import QuoteItem from "./QuoteItem";
import "./QuotesList.css";

const QuotesList = (props) => {
  const quotes = props.items.filter((quote) => {
    return quote;
  });

  let content = (
    <p style={{ textAlign: "center", color: "white", fontSize: 20 }}>
      There are no quotes. Add one to see it!
    </p>
  );

  if (quotes.length > 0) {
    content = quotes.map((quote) => (
      <QuoteItem
        key={quote.id}
        id={quote.id}
        quote={quote.quote}
        onDelete={props.onDeleteQuote}
      />
    ));
  }

  return (
    <div>
      <button className="deleteAll" onClick={props.onDeleteAll}>
        Delete All
      </button>
      <ul className="quotes-list">{content}</ul>
    </div>
  );
};

export default QuotesList;
