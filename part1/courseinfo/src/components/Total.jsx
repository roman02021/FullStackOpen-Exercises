function Total(props) {
  const total = props.parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    0
  );
  return <p>Number of exercises {total}</p>;
}

export default Total;
