import React from 'react';

const Button = ({ bg, children }) => {
    return (
        <button styles={{background: bg}}>
            {children}
        </button >
    );
}

export default Button;