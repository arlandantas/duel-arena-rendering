import { useMemo, useReducer, useEffect } from 'react';
import './App.css';
import useUserInterfaceHook from './hooks/useUserInterfaceHook';
import { World, Vehicle as ModelVehicle, VehicleController, AIVehicleController } from 'duel-arena-engine';
import Vehicle from './objects/Vehicle';
import Bullet from './objects/Bullet';

function App() {
  const [world, vehicle_controller] = useMemo(() => {
    const world = new World();

    const vehicle = new ModelVehicle(250, 250, 0);
    const vehicle_id = world.addVehicle(vehicle);
    const vehicle_controller = new VehicleController(vehicle_id);
    world.addVehicleController(vehicle_controller);

    const ai_vehicle = new ModelVehicle(50, 50, 0);
    const ai_vehicle_id = world.addVehicle(ai_vehicle);
    const ai_vehicle_controller = new AIVehicleController(ai_vehicle_id, `
    let loop_count = 0;
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
      }
      ++loop_count;
      if (loop_count >= 10) loop_count = 0;
    }
    `);
    world.addVehicleController(ai_vehicle_controller);

    world.startUpdates();

    return [ world, vehicle_controller ];
  }, []);

  const [, forceUpdate] = useReducer(x => x+1, 0);

  useEffect(function () {
    const fpsInterval = setInterval(() => {
      forceUpdate();
    }, 1000/60);

    return () => {
      clearInterval(fpsInterval);
    };
  }, []);

  useUserInterfaceHook(vehicle_controller);

  return (
    <div className="App">
      <svg
        path="http://www.w3.org/2000/svg"
        width={500}
        height={500}
        viewBox='0 0 500 500'
        style={{ border: '1px solid red' }}               
      >
        { world.getVehicles().map((v, k) => (<Vehicle key={`vehicle_${k}`} vehicle={v} />)) }
        { world.getBullets().map((b, k) => (<Bullet key={`vehicle_${k}`} bullet={b} />)) }
      </svg>
      <div style={{ width: '400px', overflow: 'auto' }}>
        Data: { JSON.stringify(world, null, 2) }
      </div>
    </div>
  );
}

export default App;
