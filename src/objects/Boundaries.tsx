import { Position } from 'duel-arena-engine';

interface Props {
  boundaries: Array<Position>,
  fill?: string,
  stroke?: string,
  strokeWidth?: number,
}

function Boundaries (props: Props) {
  return (
    <path
      d={`M ${props.boundaries.map(p => `${p.x} ${p.y}`).join(" L ")} z`}
      stroke={ props.stroke ?? 'red' }
      strokeWidth={ props.strokeWidth ?? 1 }
      fill={ props.fill ?? 'tranparent' }
    />
  );
}

export default Boundaries