import styled from 'styled-components';

export const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: flex-end;
  gap: 10px;
  top: 0;
  left: 0;
  padding: 20px 50px 0 20px;
  background-color: #f7f8fa;
  height: 100vh;
  position: absolute;
  transition: 1s;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 2px;
    height: 100vh;
    background-color: #dfe2e8;
  }

  * {
    position: relative;
    font-size: ${({ theme }) => theme.fontSize.l};
    color: #737c8e;
    text-decoration: none;
    font-weight: bold;
  }

  *:hover::before {
    content: '';
    position: absolute;
    top: 48%;
    right: -47px;
    width: 40px;
    height: 3px;
    background-color: #e0e2e6;
  }

  *.active::before {
    content: '';
    position: absolute;
    top: 48%;
    right: -47px;
    width: 40px;
    height: 3px;
    background-color: #b9bbbe;
  }
`;
