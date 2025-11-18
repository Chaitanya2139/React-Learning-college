import { useEffect, useState } from "react";

export default function Interval() {
    const [interval, setInterval] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setInterval((prevInterval) => prevInterval + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h2>Interval: {interval} seconds</h2>
        </div>
    );
}