import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import PropTypes from 'prop-types';

const icons = {
  'Happy Customers': <FaRegThumbsUp />,
  'Registered Members': <MdPeople />,
  'Available Products': <MdOutlineProductionQuantityLimits />,
  'Saved Trees': <GiTreeDoor />,
};

export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <StatisticTitle>{title}</StatisticTitle>}
      <StatisticsList>
        {stats.map(({ id, title, total }) => (
          <StatisticItem
            key={id}
            title={title}
            total={total}
            icon={icons[title]}
          />
        ))}
      </StatisticsList>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      total: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
