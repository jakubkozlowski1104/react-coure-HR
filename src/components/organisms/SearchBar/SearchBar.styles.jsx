import styled from 'styled-components';
import { Input } from '../../atoms/Input/Input.jsx';

export const SearchBarWrapper = styled.div`
  grid-row: 1/2;
  grid-column: 2/3;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  align-items: center;
  padding: 0 40px;

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

export const StatusInfo = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  p {
    width: 90px;
  }
`;
