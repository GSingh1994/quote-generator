import { useState, useEffect } from "react";

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
      <h3 className="quotes-text">{newQuotes ? newQuotes.text : ""}</h3>
      <div className="quotes-author">
        {newQuotes ? newQuotes.author || "Anonymous" : null}
      </div>
      <button onClick={() => setNewQuotes(quotesRandomiser)}>New quote</button>
    </>
  );
}
