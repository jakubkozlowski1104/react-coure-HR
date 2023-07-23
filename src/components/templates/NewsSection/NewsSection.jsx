import { NewsWrapper, NewsSectionHeader, ArticleWrapper, TitleWrapper } from './NewsSection.styles';
import Button from '../../atoms/Button/Button';

const NewsSection = () => {
  return (
    <NewsWrapper>
      <NewsSectionHeader>University news feed</NewsSectionHeader>
      <ArticleWrapper>
        <TitleWrapper>
          <h3>Lorem, ipsum</h3>
          <p>Tech news</p>
        </TitleWrapper>
        <p>Dolor sit amet</p>
        <Button>Read more</Button>
      </ArticleWrapper>
    </NewsWrapper>
  );
};

export default NewsSection;
