import React from 'react';
import PropTypes from 'prop-types';
import {
  ContactSection,
  ContactTitle,
  ContactList,
  ContactListItem,
  ContactBtn,
} from './Contacts.styled';
export default function Contacts({ contacts, onDeleteContact }) {
  return (
    <>
      <ContactSection>
        <ContactTitle>Contacts</ContactTitle>
        <ContactList>
          {contacts.map(({ id, name, number }) => {
            return (
              <ContactListItem key={id}>
                {name} : <span>{number}</span>
                <ContactBtn onClick={() => onDeleteContact(id)}>
                  Delete
                </ContactBtn>
              </ContactListItem>
            );
          })}
        </ContactList>
      </ContactSection>
    </>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
