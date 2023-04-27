import React from 'react';

export default function Contacts({ contacts, onDeleteContact }) {
  return (
    <>
      <ul>
        Contacts
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              {name} : <span>{number}</span>
              <button onClick={() => onDeleteContact(id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
