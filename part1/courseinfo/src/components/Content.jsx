import Part from './Part';
function Content(props) {
  return (
    <div>
      {props.parts.map((part) => (
        <Part key={part.name} part={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
}

export default Content;
