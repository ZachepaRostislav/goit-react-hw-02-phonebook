import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 26px;
  margin-bottom: 5px;
`;
export const Input = styled.input`
  width: 300px;
  font-size: 22px;
  padding: 10px;
  border-radius: 20px;
  border: none;
  outline: 1px solid rgba(6, 24, 44, 0.4);
  transition: all 300ms ease 0ms;
  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  }
`;
