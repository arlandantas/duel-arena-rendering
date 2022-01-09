import { useMemo, useReducer, useEffect } from 'react';
import './App.css';
import useUserInterfaceHook from './hooks/useUserInterfaceHook';
import { World, Vehicle as ModelVehicle, VehicleController, AIVehicleController } from 'duel-arena-engine';
import Vehicle from './objects/Vehicle';
import Bullet from './objects/Bullet';
import Boundaries from './objects/Boundaries';
import ia_code from './example_IAs/vehicle_direct_fire';

function App() {
  const [world, vehicle_controller] = useMemo(() => {
    const world = new World();

    world.addHeartOnRandomPosition()
    world.addHeartOnRandomPosition()
    world.addHeartOnRandomPosition()

    const vehicle = new ModelVehicle(250, 250, 30);
    const vehicle_id = world.addVehicle(vehicle);
    const vehicle_controller = new VehicleController(vehicle_id);
    world.addVehicleController(vehicle_controller);

    const ai_vehicle = new ModelVehicle(50, 50, 0);
    const ai_vehicle_id = world.addVehicle(ai_vehicle);
    const ai_vehicle_controller = new AIVehicleController(ai_vehicle_id, ia_code);
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
    <div id="App">
      <svg
        path="http://www.w3.org/2000/svg"
        width={500}
        height={500}
        viewBox={`0 0 ${world.getWidth()} ${world.getHeight()}`}
        id="world"
      >
        { world.getVehicles().map((v, k) => (<Vehicle key={`vehicle_${k}`} vehicle={v} />)) }
        { world.getBullets().map((b, k) => (<Bullet key={`vehicle_${k}`} bullet={b} />)) }
        { world.getHearts().map((h, k) => (<Boundaries
          key={`heart_${k}`}
          boundaries={h.getBoundaries()}
          fill='red'
        />)) }
      </svg>
    </div>
  );
}

export default App;
