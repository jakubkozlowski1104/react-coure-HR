import styled from 'styled-components';

const Button = styled.button`
  margin: 15px 0;
  padding: ${({ $isBig }) => ($isBig ? '10px 38px' : '7px 20px')};
  font-size: ${({ theme, $isBig }) => ($isBig ? theme.fontSize.m : theme.fontSize.s)};
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border-radius: 20px;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
  cursor: pointer;

  &:hover {
    background-color: #e2d6d6;
  }
`;

export default Button;
