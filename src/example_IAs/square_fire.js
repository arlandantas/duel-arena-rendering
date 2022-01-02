const code = `let loop_count = 0;
let loop_delayer = 0;

function setup() {
  console.log("setting up the artificial inteligence: ");
}

function loop() {
  if (loop_delayer < 5) {
    ++loop_delayer;
    return;
  } else {
    loop_delayer = 0;
  }
  if (loop_count <= 6) {
    move();
  } else {
    rotateClockwise();
    fire()
  }
  ++loop_count;
  if (loop_count >= 10) { loop_count = 0; }
}
`

export default code