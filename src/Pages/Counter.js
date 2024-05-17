import React, { useEffect, useState } from 'react'

export default function Counter() {

    const [count,setCount] = useState(0);
    const handleIncrease = () => {
        setCount(count+1);
    }

    useEffect(() => {
        if (count < 200) {
            const timeoutId = setTimeout(() => {
                handleIncrease();
            }, 100);

            // Clean up function to clear the timeout when component unmounts or count reaches 100
            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [count]);

    return (
        <div>
            <h1>{count}</h1>
            {/* <button onClick={handleIncrease}>Increase</button> */}
        </div>
    )
}
