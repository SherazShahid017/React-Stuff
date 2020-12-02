import React from 'react';
import '../../Resources/App.css';

const Checkbox1 = (props) => {


    return (
        <div>
            <input type="checkbox" onClick={props.strikeIt}/>
            <p id="task"> Go grocery shopping</p>

            <input type="checkbox"/>
            <p id="task"> Cook dinner at 6</p>

            <input type="checkbox"/>
            <p id="task"> Go for a walk</p>

        </div>
    );
}

export default Checkbox1;