import React, {useState} from 'react';
import BoilingVerdict from './BoilingVerdict';


const Calculator = () => {
    
    const [temp, setTemp] = useState('');

    const handleChange = (e) => {
        setTemp(e.target.value);
    }
    
    return(

        <fieldset>
            <legend>Enter temperature in Celsius: </legend>
            <input value={temp} onChange={handleChange}/>
            <BoilingVerdict celsius={parseFloat(temp)}/>
        </fieldset>

    )
}

export default Calculator;
