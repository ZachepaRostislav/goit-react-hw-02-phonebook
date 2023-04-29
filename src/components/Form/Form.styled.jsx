import styled from '@emotion/styled';

export const FillForm = styled.form`
  width: 500px;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 26px;
  margin-bottom: 5px;
`;
export const FormInput = styled.input`
  width: 300px;
  font-size: 22px;
  padding: 10px;
  border: none;
  outline: 1px solid rgba(6, 24, 44, 0.4);
  border-radius: 20px;
  transition: all 300ms ease 0ms;
  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  }
`;
export const FormBtn = styled.button`
  margin-top: 10px;
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
