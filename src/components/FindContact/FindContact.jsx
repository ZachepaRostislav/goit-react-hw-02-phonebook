import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Wrapper, Label, Input } from './FindContact.styled';

export default function FindContact({ filter, findContact }) {
  const searchInput = nanoid();
  return (
    <Wrapper>
      <Label htmlFor={searchInput}>Find contacts by name</Label>
      <Input
        type="text"
        id={searchInput}
        value={filter}
        onChange={findContact}
      />
    </Wrapper>
  );
}

FindContact.propTypes = {
  filter: PropTypes.string,
  findContact: PropTypes.func.isRequired,
};
