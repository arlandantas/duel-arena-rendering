import { World as ModelWorld } from "duel-arena-engine";
import {
  Boundaries,
  Vehicle,
  Bullet
} from './';

type Props = {
  world: ModelWorld
  width?: number
  height?: number
};

function World (props: Props) {
  const DEFAULT_WIDTH = 500;
  const DEFAULT_HEIGHT = 500;

  return (
    <svg
      path="http://www.w3.org/2000/svg"
      width={props.width || DEFAULT_WIDTH}
      height={props.height || DEFAULT_HEIGHT}
      viewBox={`0 0 ${props.world.getWidth()} ${props.world.getHeight()}`}
      id="world"
    >
      <Boundaries boundaries={props.world.getBoundaries()} fill='transparent' strokeWidth={2} />
      { props.world.getVehicles().map((v, k) => (<Vehicle key={`vehicle_${k}`} vehicle={v} />)) }
      { props.world.getBullets().map((b, k) => (<Bullet key={`vehicle_${k}`} bullet={b} />)) }
      { props.world.getHearts().map((h, k) => (<Boundaries
        key={`heart_${k}`}
        boundaries={h.getBoundaries()}
        fill='red'
      />)) }
    </svg>
  );
}

export default World;