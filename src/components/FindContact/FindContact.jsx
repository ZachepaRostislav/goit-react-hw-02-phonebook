import React from 'react';
import { nanoid } from 'nanoid';

export default function FindContact({ filter, findContact }) {
  const searchInput = nanoid();
  return (
    <>
      <label htmlFor={searchInput}>Find contacts by name</label>
      <input
        type="text"
        id={searchInput}
        value={filter}
        onChange={findContact}
      />
    </>
  );
}
