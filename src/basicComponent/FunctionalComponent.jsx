import { useState } from 'react';

const FunctionalComponent = ({ nama }) => {
  const [value, setValue] = useState(0);

  const handlePlus = () => {
    setValue(value + 1);
  };
  const handleMin = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  return (
    <div>
      <h1>halo {nama}</h1>
      <h3>ini functional component</h3>
      <button onClick={handleMin}> - </button>
      <span> {value} </span>
      <button onClick={handlePlus}> + </button>
    </div>
  );
};

export default FunctionalComponent;
