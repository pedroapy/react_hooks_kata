import * as React from 'react';
import {useState} from 'react';
import {Contact, Name, Phone} from '../../models/Contact';
import Table from 'react-bootstrap/Table';
function addToList(contacts: Contact[], inputPhone: string, inputName: string) {
    const allContacts = contacts.concat(new Contact(new Phone(inputPhone), new Name(inputName)));
    localStorage.setItem('contacts', JSON.stringify(allContacts));
    return allContacts;
}

export const ContactList = () => {
    const [contacts, setContacts] = useState([]);
    const [inputName, setInputName] = useState('');
    const [inputPhone, setInputPhone] = useState('');

    return (
        <>
            <Table bordered hover>
                <thead>
                <tr>
                    <td>Nombre</td>
                    <td>Número</td>
                </tr>
                </thead>
                <tbody>
                {contacts.map(contact => {
                    return (
                        <tr className="contact" key={contact.name.value.toString()}>
                            <td data-id="name">{contact.name.value}</td>
                            <td data-id="phone">{contact.phone.value}</td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
            <input type="text" data-id="input-name" onChange={(event: any) => setInputName(event.target.value) } />
            <input type="text" data-id="input-phone" onChange={(event: any) => setInputPhone(event.target.value) } />
            <button
                onClick={() => setContacts(addToList(contacts, inputPhone, inputName))}>Añade nuevo contacto</button>
        </>
    );
}
