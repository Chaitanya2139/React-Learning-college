import { useEffect, useState } from "react";

export default function StateChange() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("count updated", count);
    }, [count]);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}