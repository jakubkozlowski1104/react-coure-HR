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
        <p className="p-news">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi quos ducimus debitis fugit a temporibus nostrum nesciunt officia autem
          inventore nihil cupiditate deserunt voluptate minima quod dolorem optio, modi ipsam!
        </p>
        <Button isBig>Read more</Button>
      </ArticleWrapper>
    </NewsWrapper>
  );
};

export default NewsSection;
