import { FaQuoteLeft, FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";

export function Quote({ color, newQuotes, handleClick }) {
  return (
    <>
      <div id="quote-box" style={{ color: color }}>
        <h2 id="text">
          <FaQuoteLeft style={{ marginRight: "1rem" }} />
          {newQuotes ? newQuotes.text : ""}
        </h2>

        <div id="author">
          {newQuotes ? "- " + newQuotes.author : "- Anonymous"}
        </div>

        <div className="user-section">
          <div className="icons">
            <a className="icon-quote" title="Tweet this Quote" href="">
              <FaTwitterSquare size={"3em"} color={color} />
            </a>
            <a className="icon-quote" title="share on FB" href="">
              <FaFacebookSquare size={"3em"} color={color} />
            </a>
          </div>
          <button
            id="new-quote"
            onClick={handleClick}
            style={{ backgroundColor: color }}
          >
            New Quote
          </button>
        </div>
      </div>
    </>
  );
}
