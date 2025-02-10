import React, { useState } from 'react';

const ColorBox = ({ initialColor }) => {
    const [bgColor, setBgColor] = useState(initialColor);

    const changeColor = () => {
        const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        setBgColor(randomColor);
    };

    return (
        <div>
            <div style={{ width: '200px', height: '200px', backgroundColor: bgColor,display: 'flex', alignItems: 'center', justifyContent: 'center'}}></div>
            <button onClick={changeColor}>Changer de couleur</button>
        </div>
    );
};

export default ColorBox;
