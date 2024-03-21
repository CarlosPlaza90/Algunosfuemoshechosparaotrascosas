import React, { useState } from 'react';

function Header({id, setId, input, setInput, todos, setTodos}) {
    
    

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    

    const onInfoSend = () =>{
        setTodos([...todos, {id: id, title: input}]);
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
                readOnly={false}
                placeholder="Type something..."
            />
            <button onClick={onInfoSend}>Send Data</button>
        </div>
    );
};
export default Header;