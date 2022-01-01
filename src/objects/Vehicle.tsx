import { Vehicle as ModelVehicle } from "duel-arena-engine";

type Props = {
  vehicle: ModelVehicle
};

function Vehicle (props: Props) {
  const width = ModelVehicle.SIZE.WIDTH;
  const height = ModelVehicle.SIZE.HEIGHT;

  const colors = {
    wheel: 'black',
    gun: 'green',
    tank: 'brown',
  };

  const position = props.vehicle.getPosition();

  return (
    <>
      {/* <Boundaries boundaries={props.vehicle.getBoundaries()}/> */}
      <g
        transform={`rotate(${props.vehicle.getAngle()-90}, ${position.x + (width/2)}, ${position.y + (height/2)})`}
      >
        <rect
          x={position.x ?? 10}
          y={position.y ?? 10}
          width={width}
          height={height}
          fill={colors.tank}
        />
        <rect
          x={position.x - 5}
          y={position.y + 5}
          width={10}
          height={height - 10}
          fill={colors.wheel}
        />
        <rect
          x={position.x + width - 5}
          y={position.y + 5}
          width={10}
          height={height - 10}
          fill={colors.wheel}
        />
        <circle
          cx={position.x + (width/2)}
          cy={position.y + (height/2)}
          r={10}
          fill={colors.gun}
        />
        <rect
          transform={`rotate(${props.vehicle.getGunAngle()}, ${position.x +  + (width/2)}, ${position.y + (height/2)})`}
          x={position.x + (width/2) - 2.5}
          y={position.y + (height/2)}
          width={5}
          height={height - 15}
          fill={colors.gun}
        />
      </g>
      <text
        x={position.x}
        y={position.y + height + 20}
        fill="red"
        style={{ fontSize: '8pt' }}
      >
        Life: {props.vehicle.getLife()}
      </text>
    </>
  );
}

export default Vehicle;