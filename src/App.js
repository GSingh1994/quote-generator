import './App.scss';
import { Quote } from './Quote';
import { useState, useEffect } from 'react';
import { getRandColor, randomiser } from './helpers/randomColor';

function App() {
  const [quotes, setQuotes] = useState([]);
  const [newQuote, setNewQuote] = useState();
  const [color, setColor] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      let response = await fetch('https://type.fit/api/quotes');
      const data = await response.json();
      setQuotes(data);
      setColor(getRandColor(1));
    };
    fetchApi();
  }, []);

  useEffect(() => {
    setNewQuote(randomiser(quotes));
  }, [quotes]);

  const handleClick = () => {
    setNewQuote(randomiser(quotes));
    setColor(getRandColor(1));
  };

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <Quote color={color} newQuote={newQuote} handleClick={handleClick} />
    </div>
  );
}

export default App;
