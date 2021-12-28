function Bot (props) {
  const width = 40;
  const height = 40;

  return (
    <g
      transform={`rotate(${props.bot_angle}, ${props.x +  + (width/2)}, ${props.y + (height/2)})`}
    >
      <rect
        x={props.x ?? 10}
        y={props.y ?? 10}
        width={width}
        height={height}
        fill="red"
      ></rect>
      <rect
        x={props.x - 5}
        y={props.y + 5}
        width={10}
        height={height - 10}
        fill="black"
      ></rect>
      <rect
        x={props.x + width - 5}
        y={props.y + 5}
        width={10}
        height={height - 10}
        fill="black"
      ></rect>
      <circle
        cx={props.x + (width/2)}
        cy={props.y + (height/2)}
        r={10}
        fill="blue"
      ></circle>
      <rect
        transform={`rotate(${props.gun_angle}, ${props.x +  + (width/2)}, ${props.y + (height/2)})`}
        x={props.x + (width/2) - 2.5}
        y={props.y + (height/2)}
        width={5}
        height={height - 15}
        fill="blue"
      ></rect>
    </g>
  );
}

export default Bot;