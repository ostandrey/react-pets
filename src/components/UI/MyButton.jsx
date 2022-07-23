import React from 'react';

const MyButton = ({children, className, ...props}) => {
    return (
        <button className={className}>
            {children}
        </button>
    );
};

export default MyButton;