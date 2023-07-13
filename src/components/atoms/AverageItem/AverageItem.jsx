import { StyledAverage } from './AverageItem.styles';

const AverageItem = ({ average }) => {
  return (
    <StyledAverage>
      <p>{average}</p>
    </StyledAverage>
  );
};

export default AverageItem;
