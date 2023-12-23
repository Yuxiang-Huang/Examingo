import React, { useState, useEffect } from 'react';

type TextBoxProps = {
    text: string;
};

const TextBox: React.FC<TextBoxProps> = ({  }) => {
    const [editable, setEditable] = useState<string>();
    useEffect(() => {
        // setEditable();
    }, []);

    return (
        <>
            
        </>
    );
};

export default TextBox;
