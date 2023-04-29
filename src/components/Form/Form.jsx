import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { FillForm, FormLabel, FormInput, FormBtn } from './Form.styled';
export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  onHandleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onHadleSubmitForm = e => {
    e.preventDefault();

    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <FillForm action="#" onSubmit={this.onHadleSubmitForm}>
          <FormLabel htmlFor={this.nameInputId}>
            Name
            <FormInput
              id={this.nameInputId}
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.onHandleInputChange}
            />
          </FormLabel>
          <FormLabel htmlFor={this.numberInputId}>
            Number
            <FormInput
              id={this.numberInputId}
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.onHandleInputChange}
            />
          </FormLabel>
          <FormBtn type="submit">Add contact</FormBtn>
        </FillForm>
      </>
    );
  }
}
