import "./QuoteItem.css";
import Card from "../UI/Card";

const QuoteItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <div>
      <div onClick={deleteHandler}>
        <Card className="quote-item">
          <div className="quote-item__details"></div>
          <div>
            <p className="quote-item__quote">"{props.quote}"</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default QuoteItem;
