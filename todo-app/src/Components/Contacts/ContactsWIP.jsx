import React from 'react';
import ContactsCard from './ContactsCard'

const ContactsWIP = () => {

    return (
        <div>
            <ContactsCard
                pic = "https://placedog.net/300/200?id=43"
                name = " Harry Pawter"
                phone = "(212) 555-1234"
                email = "harry@pawter.pup"
            />

            <ContactsCard
                pic = "https://placedog.net/300/200?id=12"
                name = " James Poodle"
                phone = "(212) 999-9876"
                email = "Poodle@James.pup"
            />
            
        </div>
    );
}

export default ContactsWIP;