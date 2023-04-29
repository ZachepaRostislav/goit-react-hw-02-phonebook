import styled from '@emotion/styled';

export const ContactSection = styled.section`
  width: 500px;
  text-align: center;
  font-family: Georgia, 'Times New Roman', Times, serif;
`;

export const ContactTitle = styled.h2`
  font-size: 28px;
`;
export const ContactList = styled.ul`
  font-size: 20px;
  text-align: center;
  list-style: none;
`;

export const ContactListItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ContactBtn = styled.button`
  margin-left: 10px;
  padding: 10px 25px;
  border: none;
  border-radius: 30px;
  font-size: 20px;
  transition: all 300ms ease 0ms;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #b7e319;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  }
`;
