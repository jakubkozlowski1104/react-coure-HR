import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledGroupsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  gap: 10px;
  p {
    margin-right: 20px;
    font-weight: bold;
    color: gray;
    font-size: 1.2rem;
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 26px;
  height: 26px;
  color: gray;
  font-weight: bold;
  border-radius: 50px;
  text-decoration: none;

  &.active {
    background-color: #edebeb;
  }
`;
