import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
  justify-content: flex-start;
  padding: 30px 0;
  grid-row: 1/3;
  grid-column: 1/1;
`;

export const Logo = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;

  h1 {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.white};
    text-align: right;
    margin-right: 30px;
  }
`;

export const StyledLink = styled(NavLink)`
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-align: right;
  margin: 15px 30px 15px auto;
  position: relative;

  * {
    position: relative;
    font-size: ${({ theme }) => theme.fontSize.l};
    color: #737c8e;
    text-decoration: none;
    font-weight: bold;
  }

  &:hover::before {
    content: '';
    position: absolute;
    top: 48%;
    right: -30px;
    width: 25px;
    height: 5px;
    background-color: #cbcbd1;
  }

  &.active::before {
    content: '';
    position: absolute;
    top: 48%;
    right: -30px;
    width: 25px;
    height: 5px;
    background-color: #b9bbbe;
  }
`;
