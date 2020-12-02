import React, {useState, useEffect} from 'react';
import axios from 'axios';

const EmployeeInfo = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get("http://dummy.restapiexample.com/api/v1/employees")
        //.then((res) => res)
        .then( (result) => {
            setIsLoaded(true);
            setItems([result.data.data]);
            console.log(result);
        })
        .catch((error) => {
            setIsLoaded(true);
            setError(error);
        })
    }, []);

    if (error) {
        return <div>Error is: {error.message}</div>
    }
    else if (!isLoaded) {
        return <div>Information is currently loading...</div>
    }
    else {
        return (
            <ul>
                {items.map((item) => (
                    <li key={item.id}> {item.employee_name} </li>
                ))}
            </ul>
        );
    }
}

export default EmployeeInfo;