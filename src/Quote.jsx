import { FaQuoteLeft, FaTwitterSquare, FaFacebookSquare } from 'react-icons/fa';

export function Quote({ color, newQuote, handleClick }) {
  return (
    <>
      <div id="quote-box" style={{ color: color }}>
        <h2 id="text">
          <FaQuoteLeft style={{ marginRight: '1rem' }} />
          {newQuote ? newQuote.text : ''}
        </h2>

        <div id="author">{newQuote.author ? '- ' + newQuote.author : '- Anonymous'}</div>

        <div className="user-section">
          <div className="icons">
            <a className="icon-quote" title="Tweet this Quote" href="https://www.twitter.com/">
              <FaTwitterSquare size={'2.5em'} color={color} />
            </a>
            <a className="icon-quote" title="share on FB" href="https://www.facebook.com/">
              <FaFacebookSquare size={'2.5em'} color={color} />
            </a>
          </div>
          <button id="new-quote" onClick={handleClick} style={{ backgroundColor: color }}>
            New Quote
          </button>
        </div>
      </div>
    </>
  );
}

Quote.defaultProps = {
  newQuote: 'Honesty is the best policy',
};
