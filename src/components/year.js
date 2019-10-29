import React from 'react';

function getYear() {
    return new Date().getFullYear();
}

function Year() {
    
    return (
        <span>
            { getYear()}
        </span>
    );
};

export default Year;