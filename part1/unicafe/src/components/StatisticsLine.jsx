import React from 'react';

const StatisticsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>
        {props.value} {props.percent && '%'}
      </td>
    </tr>
  );
};

export default StatisticsLine;
