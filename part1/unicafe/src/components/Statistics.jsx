import StatisticsLine from './StatisticsLine';

const Statistics = (props) => {
  const all = props.good + props.bad + props.neutral;
  return (
    <div>
      <h1>statistics</h1>
      {all > 0 ? (
        <table>
          <tbody>
            <StatisticsLine text="good" value={props.good} />
            <StatisticsLine text="bad" value={props.bad} />
            <StatisticsLine text="neutral" value={props.neutral} />
            <StatisticsLine text="all" value={all} />
            <StatisticsLine
              text="average"
              value={(props.good - props.bad) / all}
            />
            <StatisticsLine
              text="positive"
              value={(props.good / all) * 100}
              percent
            />
          </tbody>
        </table>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default Statistics;
