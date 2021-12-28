import ModelVehicle from "duel-arena-engine/models/Vehicle";

type Props = {
  vehicle: ModelVehicle
};

function Vehicle (props: Props) {
  const width = 40;
  const height = 40;

  const colors = {
    wheel: 'black',
    gun: 'green',
    tank: 'brown',
  };

  return (
    <g
      transform={`rotate(${props.vehicle.getAngle()-90}, ${props.vehicle.getX() + (width/2)}, ${props.vehicle.getY() + (height/2)})`}
    >
      <rect
        x={props.vehicle.getX() ?? 10}
        y={props.vehicle.getY() ?? 10}
        width={width}
        height={height}
        fill={colors.tank}
      ></rect>
      <rect
        x={props.vehicle.getX() - 5}
        y={props.vehicle.getY() + 5}
        width={10}
        height={height - 10}
        fill={colors.wheel}
      ></rect>
      <rect
        x={props.vehicle.getX() + width - 5}
        y={props.vehicle.getY() + 5}
        width={10}
        height={height - 10}
        fill={colors.wheel}
      ></rect>
      <circle
        cx={props.vehicle.getX() + (width/2)}
        cy={props.vehicle.getY() + (height/2)}
        r={10}
        fill={colors.gun}
      ></circle>
      <rect
        transform={`rotate(${props.vehicle.getGunAngle()}, ${props.vehicle.getX() +  + (width/2)}, ${props.vehicle.getY() + (height/2)})`}
        x={props.vehicle.getX() + (width/2) - 2.5}
        y={props.vehicle.getY() + (height/2)}
        width={5}
        height={height - 15}
        fill={colors.gun}
      ></rect>
    </g>
  );
}

export default Vehicle;