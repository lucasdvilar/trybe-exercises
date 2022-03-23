import React, { useEffect, useState } from 'react';

const RandomNumber = () => {
  const [timer, setTimer] = useState(1);
  const [randomNumber, setRandomNumber] = useState();
  const [message, setMessage] = useState('');

  useEffect(() => {
    setInterval(() => {
      setTimer((timer) => {
        if (timer === 10) {
          return setTimer(1);
        }
        setTimer(timer + 1);
      });
    }, 1000);
  }, []);

  useEffect(() => {
    if(timer === 10) {
      const number = Math.floor(Math.random() * 100);
      setRandomNumber(number);
      if (number % 3 === 0 || number % 5 === 0) {
        setMessage('Acerto!')
        const int = setInterval(() => {
          setMessage('');
        }, 4000);
        setTimeout(() => {
          clearInterval(int);
        }, 4000);
      }
    }
  }, [timer]);

  return (
    <div>
      <div>{timer}</div>
      {randomNumber && <div>{randomNumber}</div>}
      {message && <div>{message}</div>}
    </div>
  );
}

export default RandomNumber;
