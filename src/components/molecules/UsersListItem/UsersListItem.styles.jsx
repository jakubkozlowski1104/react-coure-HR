import styled from 'styled-components';

export const StyledLi = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  padding: 20px;
  gap: 20px;
  cursor: pointer;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgray;
  }

  .info {
    display: flex;
    flex-direction: column;
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: bold;
    margin: 0;
    padding: 0;
    justify-content: space-around;
    flex-wrap: wrap;

    .name {
      font-size: ${({ theme }) => theme.fontSize.l};
      color: ${({ theme }) => theme.colors.darkGrey};
    }

    .attend {
      font-size: ${({ theme }) => theme.fontSize.s};
      color: ${({ theme }) => theme.colors.darkGrey};
    }
  }
`;

export const StyledAverage = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${({ average, theme }) => {
    if (average > 4) return theme.colors.success;
    if (average > 3) return theme.colors.warning;
    if (average > 2) return theme.colors.error;
    return theme.colors.grey;
  }};
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};
  }
`;
