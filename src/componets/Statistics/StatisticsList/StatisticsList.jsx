import React from 'react';
import PropTypes from 'prop-types';
import { StatList, Item, Label, Percentage } from './StatisticsList.styled';

const StatisticsList = ({ statsData }) => (
  <StatList>
    {statsData.map(({ id, label, percentage }) => {
      return (
        <Item key={id}>
          <Label>{label}</Label>
          <Percentage>{percentage} %</Percentage>
        </Item>
      );
    })}
  </StatList>
);

StatisticsList.propTypes = {
  statsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default StatisticsList;
