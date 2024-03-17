import React, { useState } from 'react';

function Header() {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    function Button(props){
        return (
            <button onClick={props.onClick}>
              Click on me!
            </button>
          );
    }

    return (
        <div>

            <input
                type="text"
                value={text}
                onChange={handleChange}
                placeholder="Type something..."
            />
            <Button/>
            

            <p>entraste: {text}</p>

        </div>

    );




};

export default Header;
