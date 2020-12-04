import React, {useState} from 'react';

const UserForm = ({submit}) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [number, setNumber] = useState('');

    function changeName(e) {
        setFirstName(e.target.value)
    }

    function changeLastName(e) {
        setLastName(e.target.value)
    }

    function changeNumber(e) {
        setNumber(e.target.value)
    }

    function submitted(e) {
        e.preventDefault();
        submit({firstName, lastName, number});
    }
    return(
        <form onSubmit={submitted}>
            <label for="firstName">Enter First Name: </label>
            <input type="text" name="firstName" onChange={changeName}/>

            <label for="lastName">Enter Last Name: </label>
            <input type="text" name="lastName" onChange={changeLastName}/>

            <label for="number">Enter Your Number: </label>
            <input type="text" name="number" onChange={changeNumber}/>

            <input type="submit" value="submit"/>
        </form>
    );
}

export default UserForm