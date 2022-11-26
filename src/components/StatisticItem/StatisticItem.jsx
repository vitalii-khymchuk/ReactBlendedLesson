import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';
import PropTypes from 'prop-types';

export const StatisticItem = ({ title, total, icon }) => {
  return (
    <StatisticBox>
      {icon}
      <StatisticCounter>{total}</StatisticCounter>
      <StatisticText>{title}</StatisticText>
    </StatisticBox>
  );
};

StatisticItem.propTypes = {
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  icon: PropTypes.element.isRequired,
};
