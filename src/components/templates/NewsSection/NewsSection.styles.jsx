import styled from 'styled-components';
import { ViewWrapper } from '../../molecules/ViewWrapper/ViewWrapper';

export const NewsWrapper = styled.div`
  grid-row: 1 /3;
  grid-column: 3/3;
  border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 40px;
  overflow-y: scroll;
`;

export const NewsSectionHeader = styled.h2`
  margin-right: auto;
  color: ${({ theme }) => theme.colors.darkPurple};
`;

export const ArticleWrapper = styled(ViewWrapper)`
  margin: 30px 0px;
  padding: 30px;
  width: 100%;
  max-width: unset;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.darkGrey};
  .p-news {
    line-height: 1.4;
  }
`;

export const TitleWrapper = styled.div`
  h3 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin: 0;
  }

  p {
    padding-bottom: 10px;
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;

  img {
    max-width: 200px;
    object-fit: cover;
    margin-left: 25px;
  }
`;
