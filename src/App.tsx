import {
  useMemo,
  useReducer,
  useEffect,
  useState
} from 'react';
import './App.css';
import useUserInterfaceHook from './hooks/useUserInterfaceHook';
import {
  World as ModelWorld,
  Vehicle as ModelVehicle,
  VehicleController,
  AIVehicleController,
} from 'duel-arena-engine';
import { World, CodeEditor } from './objects';

const initial_ia_code = `function setup() {}\n\nfunction loop() {\n  move();\n}`;

function App() {
  const [ world, vehicle_controller, ai_vehicle_controller ] = useMemo(() => {
    const world = new ModelWorld();

    world.addHeartOnRandomPosition()
    world.addHeartOnRandomPosition()
    world.addHeartOnRandomPosition()

    const vehicle = new ModelVehicle(250, 250, 30);
    const vehicle_id = world.addVehicle(vehicle);
    const vehicle_controller = new VehicleController(vehicle_id);
    world.addVehicleController(vehicle_controller);

    const ai_vehicle = new ModelVehicle(50, 50, 0);
    const ai_vehicle_id = world.addVehicle(ai_vehicle);
    const ai_vehicle_controller = new AIVehicleController(ai_vehicle_id, initial_ia_code);
    world.addVehicleController(ai_vehicle_controller);

    return [ world, vehicle_controller, ai_vehicle_controller ];
  }, []);

  const [ia_code, setIACode] = useState(initial_ia_code);

  const [, forceUpdate] = useReducer(x => x+1, 0);

  useEffect(function () {
    const fpsInterval = setInterval(() => {
      forceUpdate();
    }, 1000/60);

    return () => {
      clearInterval(fpsInterval);
    };
  }, []);

  function startClick() {
    ai_vehicle_controller.setIAFunction(ia_code);
    world.startUpdates();
  }

  useUserInterfaceHook(vehicle_controller);
  
  return (
    <div id="App">
      <World
        world={world}
      />

      <div id="game-details">
        <h3 id="fps-counter">
          {world.getFPSLastSecond()} fps 
        </h3>
        <div id="controllers">
          IA Code:
          <CodeEditor
            code={ia_code}
            setCode={setIACode}
          />
          <div>
            <button onClick={startClick}>▶</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
