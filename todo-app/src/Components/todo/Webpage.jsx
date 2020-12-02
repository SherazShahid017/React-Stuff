import React, {useState} from 'react';
import Checkbox1 from './Checkbox1';


const Webpage = () => {

    const [item, setItem] = useState();

    function striked(item) {
        setItem(item.target.strike());
    }

    return (
        <div>
            <Checkbox1
            strikeIt = {striked}/>

        </div>
    );
}

export default Webpage;