import React, { useState } from 'react';

function Header(props) {
    let id = 0;
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleClick = () => {
        props.updateData(text);
        
    };

    

    return (
        <div>

            <input
                type="text"
                value={text}
                onChange={handleChange}
                readOnly={false}
                placeholder="Type something..."
            />
            <button onClick={handleClick}>Send Data</button>
        </div>
    );
};
export default Header;