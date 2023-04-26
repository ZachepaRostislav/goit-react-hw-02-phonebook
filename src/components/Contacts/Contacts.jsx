import React from 'react';

export default function Contacts({ contacts }) {
  return (
    <>
      <ul>
        Contacts
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              {name} : <span>{number}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
}
