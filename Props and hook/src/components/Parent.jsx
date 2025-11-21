import React, {useCallback, useState} from 'react'

const Child = React.memo(({ handleClick }) => {
    console.log("Child component rendered");
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
});

const Parent = () => {
    const [count, setCount] = useState(0);
    const handleClick = useCallback(() => {
        console.log("Button clicked");
    }, []);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child handleClick={handleClick} />
    </div>
  )
}

export default Parent
