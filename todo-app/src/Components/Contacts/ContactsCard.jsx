import React from 'react';


const ContactsCard = (props) => {

    return (

        <div className="contact-card">
                <img src={props.pic} alt="pic"/>
                <h3> {props.name}</h3>
                <p>Phone: {props.phone}</p>
                <p>Email: {props.email}</p>
            </div>

    );
}

export default ContactsCard;