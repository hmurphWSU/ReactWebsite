import "./Quotes.css";
import Card from "../UI/Card";
import QuotesList from "./QuotesList";

const Quotes = (props) => {
  const quotes = props.items.filter((quote) => {
    return quote;
  });

  return (
    <Card className="quotes">
      <QuotesList
        items={quotes}
        onDeleteQuote={props.onDeleteQuote}
        onDeleteAll={props.onDeleteAll}
      />
    </Card>
  );
};

export default Quotes;
