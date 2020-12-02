import React, {useState} from 'react';
import AnotherMile from './ChildComp';

const MilesAhead = () => {

    const [steps, setSteps] = useState(0);

    function increment(){
        setSteps(prev => prev + 1);
    }

    return(
        <>
            <p>Today you've taken {steps} steps!</p>

            <AnotherMile incremented = {increment}/>
        </>
    );
}

export default MilesAhead;