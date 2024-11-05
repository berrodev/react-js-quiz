import { useState, useEffect } from 'react';

const QuestionTimer = ({ timeout, onTimeOut }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log('Timeout');
    setTimeout(onTimeOut, timeout);
  }, [timeout, onTimeOut]);

  useEffect(() => {
    console.log('Interval');
    setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
};

export default QuestionTimer;
