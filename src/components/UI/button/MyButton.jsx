import React from 'react';

const MyButton = ({children, className, onClick, ...props}) => {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
};

export default MyButton;