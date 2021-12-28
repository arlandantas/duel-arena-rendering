import { useMemo } from 'react';
import './App.css';
import useUserInterfaceHook from './hooks/useUserInterfaceHook';
import { World, Vehicle } from 'duel-arena-engine';
import React from 'react';

function App() {
  const world = useMemo( () => {
    const world = new World();
    const vehicle = new Vehicle(250, 250, 0);
    world.addVehicle(vehicle);
    return world;
  }, []);

  console.log(world);

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
