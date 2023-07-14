import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 25px;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 50px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-left: 1px;
    width: 15px;
    height: 15px;
  }

  svg:hover {
    stroke: red;
    stroke-width: 0.82px;
  }
`;
