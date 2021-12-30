import { Bullet as ModelBullet } from "duel-arena-engine";

type Props = {
  bullet: ModelBullet
};

function Vehicle (props: Props) {
  const radius = 4;

  const colors = {
    gun: 'green',
  };

  const position = props.bullet.getPosition();

  return (
    <>
      <g>
        <circle
          cx={position.x + (radius/2)}
          cy={position.y + (radius/2)}
          r={ModelBullet.RADIUS}
          fill={colors.gun}
        ></circle>
      </g>
      {/* <Boundaries boundaries={props.bullet.getBoundaries()} /> */}
    </>
  );
}

export default Vehicle;