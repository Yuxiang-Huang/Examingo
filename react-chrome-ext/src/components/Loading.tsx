import React, { useState, useEffect } from 'react';

const Loading = () => {
    const [dots, setDots] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prevDots) => (prevDots.length >= 3 ? '' : prevDots + '.'));
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="mx-auto my-8 rounded-full animate-spin w-16 h-16 bg-gradient-to-r from-primary-red to-primary-purple"></div>
    );
};

export default Loading;
