import { useMemo } from 'react';
import './App.css';
import useUserInterfaceHook from './hooks/useUserInterfaceHook';
import { World, Vehicle as ModelVehicle } from 'duel-arena-engine';
import React from 'react';
import Vehicle from './objects/Vehicle';

function App() {
  const world = useMemo( () => {
    const world = new World();
    world.addVehicle(new ModelVehicle(250, 250, 0));
    world.addVehicle(new ModelVehicle(50, 50, 0));
    world.addVehicle(new ModelVehicle(10, 10, 0));
    world.addVehicle(new ModelVehicle(50, 350, 0));
    world.addVehicle(new ModelVehicle(250, 50, 0));
    return world;
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
        { world.getVehicles().map(v => (<Vehicle vehicle={v}></Vehicle>)) }
      </svg>
      <div>
        Bot
        <button>⬅</button>
        <button>➡</button>
        <button>⬇</button>
        <button>⬆</button>
        <button>↶</button>
        <button>↷</button>
        <button>✅</button>
        <button>⛔</button>
      </div>
      <div>
        Gun
        <button>↶</button>
        <button>↷</button>
      </div>
    </div>
  );
}

export default App;
