import { useState, useEffect } from "react";
import { FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";

export function Quote() {
  const [quotes, setQuotes] = useState([]);
  const [newQuotes, setNewQuotes] = useState();
  const quotesRandomiser = quotes[Math.floor(Math.random() * quotes.length)]; //To select random quote from quotes array

  useEffect(() => {
    const fetchApi = async () => {
      let response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      setQuotes(data);
    };
    fetchApi();
  }, []);

  useEffect(() => {
    setNewQuotes(quotesRandomiser);
  }, [quotes]);

  return (
    <>
      <div id="quote-box">
        <h2 id="text">{newQuotes ? newQuotes.text : ""}</h2>
        <div id="author">
          {newQuotes ? "- " + newQuotes.author : "- Anonymous"}
        </div>

        <div className="user-section">
          <div className="icons">
            <a class="icon-quote" title="tweet this quote" href="">
              <FaTwitterSquare size={30} />
            </a>
            <a class="icon-quote" title="share on fb" href="">
              <FaFacebookSquare size={30} />
            </a>
          </div>
          <button id="new-quote" onClick={() => setNewQuotes(quotesRandomiser)}>
            New quote
          </button>
        </div>
      </div>
    </>
  );
}
