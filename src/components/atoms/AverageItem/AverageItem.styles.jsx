import styled from 'styled-components';

export const StyledAverage = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.error};
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
