import React, {useState} from 'react';
import BoilingVerdict from './BoilingVerdict';


const Calculator = () => {
    
    const [temp, setTemp] = useState('');

    const handleChange = (e) => {
        setTemp(e.target.value);
    }

    const scaleNames = {
        c: 'Celsius',
        f: 'Fahrenheit'
    };

    const scale = props.scale
    
    return(
       
        <fieldset>
            <legend>Enter temperature in {scaleNames[scale]} </legend>
            <input value={temp} onChange={handleChange}/>
            <BoilingVerdict celsius={parseFloat(temp)}/>
        </fieldset>

    )
}

export default Calculator;
