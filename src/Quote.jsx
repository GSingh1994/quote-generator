import { useState, useEffect } from "react";

export function Quote() {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      let response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      setQuotes(data);
    };
    fetchApi();
  }, []);
  return (
    <div>
      {/* {quotes.map((quote) => (
        <h3>{quote.author}</h3>
      ))} */}
    </div>
  );
}
