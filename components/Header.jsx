import React, { useState } from 'react';

function Header({id, setId, input, setInput, todos, setTodos, completed, setcompleted}) {
    
    

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    

    const onInfoSend = () =>{
        setTodos([...todos, {id: id, title: input, completed: false}]);
        setInput("");
        setId(id+1)
        
        console.log(todos)
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