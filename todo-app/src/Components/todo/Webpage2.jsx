import React from 'react';
import '../Resources/page2.css';

const Webpage2 = (props) => {

    const array = props.arrayList.map (i => <p>{i}</p>)

    const emptyList = []
    for (let [key, value] of Object.entries(props.objectMap)) {
        emptyList.push(value)
    }

    return (
        <div>
            <p>Hello, {props.name}</p>

            <h5>{array}</h5>

            <p>Hello {emptyList[0]}, are you {emptyList[1]}? How is {emptyList[2]}?</p>
        </div>
    );
}

export default Webpage2;