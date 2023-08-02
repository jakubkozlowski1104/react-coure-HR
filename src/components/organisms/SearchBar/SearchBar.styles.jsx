import styled from 'styled-components';
import { Input } from '../../atoms/Input/Input.jsx';

export const SearchBarWrapper = styled.div`
  grid-row: 1/2;
  grid-column: 2/3;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  align-items: center;
  padding: 0 40px;
`;
export const StyledListWrapper = styled.div`
  position: resize;

  ${Input} {
    padding: 16px 20px;
    font-size: ${({ theme }) => theme.fontSize.l};
    width: 100%;
    max-width: 450px;
    border: ${({ theme }) => theme.colors.lightPurple};
    margin-left: 30px;

    &::placeholder {
      font-size: ${({ theme }) => theme.fontSize.m};
      border: ${({ theme }) => theme.colors.lightPurple};
      opacity: 60%;
    }
  }
`;

export const StyledList = styled.ul`
  display: ${({ $isListVisible }) => ($isListVisible ? 'block' : 'none')};
  padding: 10px;
  position: absolute;
  top: 7%;
  width: 30%;
  left: 32%;
  list-style-type: none;
  border-radius: 40px;
  z-index: 1;

  li {
    width: 100%;
    font-size: 1.3rem;
    padding: 4px;
    font-weight: bold;
    color: gray;
    background-color: white;
    border-bottom: 2px solid gray;
    cursor: pointer;
    transition: 0.2s;
  }

  li:hover {
    background-color: #c9c9c9;
  }
`;

export const StatusInfo = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  p {
    width: 90px;
  }
`;
