import React from "react";
import { useState } from "react";


function List(props) {
    const [items, setItems] = useState([]);




    return (
        <div>
            <ul>
                <li>{props.data}</li>
            </ul>
            
        <div/>

        </div>
        
        
    );

};

export default List;