import { Position } from 'duel-arena-engine';

interface Props {
  boundaries: Array<Position>
}

function Boundaries (props: Props) {
  return (
    <path
      d={`M ${props.boundaries.map(p => `${p.x} ${p.y}`).join(" L ")} z`}
      stroke="red"
      strokeWidth={1}
      fill="transparent"
    />
  );
}

export default Boundaries