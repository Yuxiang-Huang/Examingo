import React from "react";

interface CounterProps {
    count: number;
    setCount: (newCount: number) => void;
}

const Counter: React.FC<CounterProps> = ({ count, setCount }) => {
    const grayed = "shadow-main cursor-default";
    const MAX_COUNT = 5;
    const MIN_COUNT = 1;

    const incrementCount = () => {
        setCount(Math.min(MAX_COUNT, count + 1));
    }

    const decrementCount = () => {
        setCount(Math.max(MIN_COUNT, count - 1));
    }

    return (
        <div className="flex justify-between w-full my-3">
            <button onClick={decrementCount} className={"w-3/12 relative border border-primary-purple rounded-s-xl bg-primary-purple " + (count === MIN_COUNT ? grayed : "")}>
                <span className="em:text-lg text-text-color">
                    -
                </span>
            </button>
            <div className="em:text-lg w-6/12 bg-gradient-to-r from-primary-purple to-primary-red text-text-color p-1">
                <div className="rounded-xl bg-gradient-to-r from-secondary-purple to-secondary-red">
                    {count}
                </div>
            </div>
            <button onClick={incrementCount} className={"w-3/12 relative border border-primary-red rounded-e-xl bg-primary-red " + (count === MAX_COUNT ? grayed : "")}>
                <span className={"em:text-lg text-text-color"}>
                    +
                </span>
            </button>
        </div>
    );
};

export default Counter;
