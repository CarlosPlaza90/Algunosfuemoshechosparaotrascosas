import React, { useState } from 'react';

function Header({ id, setId, input, setInput, todos, setTodos, completed, setcompleted }) {



    const handleChange = (event) => {
        setInput(event.target.value);
    };



    const onInfoSend = () => {

        input === "" ? alert("input cannot be blank fool!") : 
        setTodos([...todos, { id: id, title: input, completed: false }]);
        setInput("");
        setId(id + 1)





    };


    return (
        <div>

            <input

                type="text"
                value={input}
                onChange={handleChange}
                placeholder="Type something..."
            />
            <button onClick={onInfoSend}>Send Data</button>
        </div>
    );
};
export default Header;