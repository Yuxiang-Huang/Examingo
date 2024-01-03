import React from "react";

interface PreviousNextSetProps {
    previousFunction: () => void;
    nextFunction: () => void;
    grayedPrevious: boolean;
    grayedNext: boolean;
}

const PreviousNextSet: React.FC<PreviousNextSetProps> = ({ previousFunction, nextFunction, grayedPrevious, grayedNext }) => {
    const grayed = "bg-background-purple cursor-default";

    return (
        <div className="flex justify-between w-full">
            <button onClick={previousFunction} className={"w-1/2 relative my-3 me-2 border border-primary-purple shadow-main rounded-xl " + (grayedPrevious ? grayed : "bg-primary-purple")}>
                <span className="em:text-lg bg-gradient-to-br from-secondary-purple to-secondary-red text-transparent bg-clip-text">
                    Previous
                </span>
            </button>
            <button onClick={nextFunction} className={"w-1/2 relative my-3 ms-2 border border-primary-red shadow-main rounded-xl " + (grayedNext ? grayed : "bg-primary-red")}>
                <span className={"em:text-lg bg-gradient-to-br from-secondary-red to-secondary-purple text-transparent bg-clip-text"}>
                    Next
                </span>
            </button>
        </div>
    );
};

export default PreviousNextSet;
