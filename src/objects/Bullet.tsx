import { Bullet as ModelBullet } from "duel-arena-engine";
// import Boundaries from './Boundaries';

type Props = {
  bullet: ModelBullet
};

function Vehicle (props: Props) {
  const colors = {
    gun: 'green',
  };

  const position = props.bullet.getPosition();

  return (
    <>
      <g>
        <circle
          cx={position.x}
          cy={position.y}
          r={ModelBullet.RADIUS}
          fill={colors.gun}
        ></circle>
      </g>
      {/* <Boundaries boundaries={props.bullet.getBoundaries()} /> */}
    </>
  );
}

export default Vehicle;