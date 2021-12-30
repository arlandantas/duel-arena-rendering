import ModelBullet from "duel-arena-engine/models/Bullet";

type Props = {
  bullet: ModelBullet
};

function Vehicle (props: Props) {
  const radius = 4;

  const colors = {
    gun: 'green',
  };

  return (
    <g>
      <circle
        cx={props.bullet.getPosition().x + (radius/2)}
        cy={props.bullet.getPosition().y + (radius/2)}
        r={radius}
        fill={colors.gun}
      ></circle>
    </g>
  );
}

export default Vehicle;