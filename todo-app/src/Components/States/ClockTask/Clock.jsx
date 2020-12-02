import React, {useState} from 'react';
import UpdateClock from './UpdateClockChild';

const Clocked = () => {

    const [time, setTime] = useState(new Date());


    function updateTime() {
        setTime(time);

    }

    return(
        <>
            <p> The time is: {time.toLocaleTimeString()} </p>
            <UpdateClock updated = {updateTime}/>
        </>
    );
}

export default Clocked;