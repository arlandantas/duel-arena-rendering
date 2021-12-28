import { useMemo, useReducer, useEffect } from 'react';
import './App.css';
import useUserInterfaceHook from './hooks/useUserInterfaceHook';
import { World, Vehicle as ModelVehicle } from 'duel-arena-engine';
import Vehicle from './objects/Vehicle';

function App() {
  const [world, vehicle_id] = useMemo(() => {
    const world = new World();

    const vehicle = new ModelVehicle(250, 250, 0);
    vehicle.setSpeed(10);
    vehicle.setAngleSpeed(30);
    vehicle.setGunAngleSpeed(30);

    const vehicle_id = world.addVehicle(vehicle);

    return [ world, vehicle_id ];
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

  useUserInterfaceHook();

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
      <div>
        Data: { JSON.stringify(world.getVehicle(vehicle_id)) }
      </div>
      <div>
        Bot
        <button onClick={() => {
          world.getVehicle(vehicle_id).move()
        }}>✅</button>
        <button onClick={() => {
          world.getVehicle(vehicle_id).move(ModelVehicle.DIRECTIONS.BACKWARD)
        }}>⛔</button>
        <button onClick={() => {
          world.getVehicle(vehicle_id).rotate(ModelVehicle.DIRECTIONS.ANTICLOCKWISE)}
        }>↶</button>
        <button onClick={() => {
          world.getVehicle(vehicle_id).rotate()
        }}>↷</button>
      </div>
      <div>
        Gun
        <button onClick={() => {
          world.getVehicle(vehicle_id).rotateGun(ModelVehicle.DIRECTIONS.ANTICLOCKWISE)
        }}>↶</button>
        <button onClick={() => {
          world.getVehicle(vehicle_id).rotateGun()
        }}>↷</button>
      </div>
    </div>
  );
}

export default App;
