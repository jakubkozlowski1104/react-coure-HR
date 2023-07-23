import { NewsWrapper } from './NewsSection.styles';
import { ViewWrapper } from '../../molecules/ViewWrapper/ViewWrapper';
import Button from '../../atoms/Button/Button';

const NewsSection = () => {
  return (
    <NewsWrapper>
      <h2>News feed section</h2>
      <ViewWrapper>
        <h3>Lorem, ipsum.</h3>
        <p>dolor sit amet</p>
        <Button>click me</Button>
      </ViewWrapper>
      <ViewWrapper>
        <h3>Lorem, ipsum.</h3>
        <p>dolor sit amet</p>
        <Button>click me</Button>
      </ViewWrapper>
      <ViewWrapper>
        <h3>Lorem, ipsum.</h3>
        <p>dolor sit amet</p>
        <Button>click me</Button>
      </ViewWrapper>
    </NewsWrapper>
  );
};

export default NewsSection;
