import React, { Component } from 'react';
import Form from './Form';
import Contacts from './Contacts';
import FindContact from './FindContact';
import { nanoid } from 'nanoid';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onHandlerSubmitForm = data => {
    const { contacts } = this.state;

    const existingContact = contacts.find(
      user => user.name.toLowerCase() === data.name.toLowerCase()
    );

    if (existingContact) {
      alert(`${existingContact.name} is already in contacts`);
      return;
    }

    const existingInitialContact = this.state.contacts.find(
      user => user.name.toLowerCase() === data.name.toLowerCase()
    );

    if (existingInitialContact) {
      alert(`${existingInitialContact.name}is already in contacts`);
      return;
    }

    const contact = {
      id: nanoid(),
      ...data,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  findContact = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFindContact = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {
    const { filter } = this.state;
    const visibleContact = this.getFindContact();
    return (
      <>
        <Form onSubmit={this.onHandlerSubmitForm} />
        <FindContact value={filter} findContact={this.findContact} />
        {visibleContact.length > 0 && (
          <Contacts
            contacts={visibleContact}
            onDeleteContact={this.deleteContact}
          />
        )}
      </>
    );
  }
}
