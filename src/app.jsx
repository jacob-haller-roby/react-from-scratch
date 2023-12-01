import React, {useState} from 'react';
const TestComponent = () => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(prev => prev + 1)
    }
    return (
        <div>
            <p>Hello World!</p>
            <p>Count is: {count}</p>
            <button onClick={incrementCount}>Increment</button>
        </div>
    )
}

export default TestComponent;