const code = `
let loop_count = 0;
let loop_delayer = 0;
let target_vehicle_id = null;

function setup() {
  console.log("setting up the artificial inteligence: ");
}

function loop() {
  const me = getVehicle()
  const all_vehicles = getVehicles()
  let target_vehicle = null
  
  if (target_vehicle_id) {
    target_vehicle = all_vehicles.find(v => v.getVehicleId() == target_vehicle_id)
    if (!target_vehicle) {
      target_vehicle_id = null
    }
  }
  if (target_vehicle_id === null) {
    target_vehicle = all_vehicles.find(v => v.getVehicleId() != me.getVehicleId())
    if (target_vehicle) {
      target_vehicle_id = target_vehicle.getVehicleId()
    }
  }

  if (target_vehicle) {
    const target_angle = calcAngleBetweenPositions(
      me.getPosition(),
      target_vehicle.getPosition()
    )
    rotateClockwise(target_angle - me.getAngle())
  }

  ++loop_count;
  if (loop_count >= 30) {
    if (target_vehicle) fire()
    loop_count = 0;
  }
}

function calcAngleBetweenPositions(a, b) {
  return calcAngleDegrees(b.x - a.x, b.y - a.y)
}

function calcAngleDegrees(x, y) {
  return Math.atan2(y, x) * 180 / Math.PI;
}
`

export default code