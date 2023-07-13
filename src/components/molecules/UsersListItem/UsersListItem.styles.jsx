import styled from 'styled-components';

export const StyledLi = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100px;
    height: 1px;
    background-color: lightgray;
  }
`;
