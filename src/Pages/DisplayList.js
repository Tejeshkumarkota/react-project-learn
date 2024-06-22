import React, { useState, useEffect } from 'react';

function DisplayList() {
  const [fruits, setFruits] = useState(['Apple', 'Banana', 'Cherry']);

  useEffect(() => {
   const timer = setTimeout(() => {
      setFruits([...fruits, 'Dragonfruit']);
    }, 5000);

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  },[]);

  return (
    <div>
      <h1>Fruit List</h1>

      <ol>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ol>

    </div>
  );
}

export default DisplayList;
