import "./App.scss";
import { Quote } from "./Quote";
import { useState, useEffect } from "react";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [newQuotes, setNewQuotes] = useState();
  const [color, setColor] = useState();
  const quotesRandomiser = quotes[Math.floor(Math.random() * quotes.length)]; //To select random quote from quotes array

  useEffect(() => {
    const fetchApi = async () => {
      let response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      setQuotes(data);
      setColor(getRandColor(1));
    };
    fetchApi();
  }, []);

  const getRandColor = (brightness) => {
    // Six levels of brightness from 0 to 5, 0 being the darkest
    var rgb = [Math.random() * 256, Math.random() * 256, Math.random() * 256];
    var mix = [brightness * 51, brightness * 51, brightness * 51]; //51 => 255/5
    var mixedrgb = [rgb[0] + mix[0], rgb[1] + mix[1], rgb[2] + mix[2]].map(
      function (x) {
        return Math.round(x / 2.0);
      }
    );
    return "rgb(" + mixedrgb.join(",") + ")";
  };

  useEffect(() => {
    setNewQuotes(quotesRandomiser);
  }, [quotes]);

  const handleClick = () => {
    setNewQuotes(quotesRandomiser);
    setColor(getRandColor(1));
  };

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <Quote color={color} newQuotes={newQuotes} handleClick={handleClick} />
    </div>
  );
}

export default App;
