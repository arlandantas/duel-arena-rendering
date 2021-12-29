import { useMemo, useReducer, useEffect } from 'react';
import './App.css';
import useUserInterfaceHook from './hooks/useUserInterfaceHook';
import { World, Vehicle as ModelVehicle, VehicleController } from 'duel-arena-engine';
import Vehicle from './objects/Vehicle';

function App() {
  const [world, vehicle_id, vehicle_controller] = useMemo(() => {
    const world = new World();

    const vehicle = new ModelVehicle(250, 250, 0);
    vehicle.setSpeed(10);
    vehicle.setAngleSpeed(30);
    vehicle.setGunAngleSpeed(30);

    const vehicle_id = world.addVehicle(vehicle);

    const vehicle_controller = new VehicleController(vehicle_id);
    world.addVehicleController(vehicle_controller);

    world.startUpdates();

    return [ world, vehicle_id, vehicle_controller ];
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
        { world.getVehicles().map((v, k) => (<Vehicle key={`vehicle_${k}`} vehicle={v}></Vehicle>)) }
      </svg>
      <div style={{ width: '400px', overflow: 'auto' }}>
        Data: { JSON.stringify(world.getVehicle(vehicle_id), null, 2) }
      </div>
    </div>
  );
}

export default App;
