import React, { useState, useEffect } from 'react';

function Quote() {
  const url = 'https://api.quotable.io/random';
  const [quoteData, setQuoteData] = useState(null);

  const handleClick = () => {
    getQuote();
  };

  const getQuote = () => {
    fetch(url)
      .then(data => data.json())
      .then(item => {
        setQuoteData(item);
      })
      .catch(error => {
        console.error('Error fetching quote:', error);
      });
  };

  useEffect(() => {
    // This code will run when the component mounts (window loads)
    getQuote();
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      {quoteData && (
        <>
          <p>{quoteData.content}</p>
          <h2>{quoteData.author}</h2>
        </>
      )}
      <button onClick={handleClick}>Get a Quote</button>
    </div>
  );
}

export default Quote;
