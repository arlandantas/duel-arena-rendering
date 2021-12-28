import { useState } from 'react';
import './App.css';
import Bot from './Bot';

function App() {
  const speed = 10;
  const angle_speed = 30;
  let [bot_position, setBot] = useState({ x: 0, y: 0, bot_angle: 0, gun_angle: 0 });

  function toRad(angle) {
    return Math.PI * angle / 180;
  }

  function forward() {
    let angle = toRad(bot_position.bot_angle + 90);
    setBot((state) => ({
      ...state,
      y: state.y + (Math.sin(angle) * speed),
      x: state.x + (Math.cos(angle) * speed),
    }));
  }

  function backward() {
    let angle = toRad(bot_position.bot_angle + 90);
    setBot((state) => ({
      ...state,
      y: state.y + (Math.sin(angle) * (-1 * speed)),
      x: state.x + (Math.cos(angle) * (-1 * speed)),
    }));
  }

  return (
    <div className="App">
      <svg
        path="http://www.w3.org/2000/svg"
        width={500}
        height={500}
        viewBox='0 0 500 500'
        style={{ border: '1px solid red' }}
      >
        <Bot {...bot_position}></Bot>
      </svg>
      <div>
        Bot
        <button onClick={() => setBot((state) => ({ ...state, x: state.x - speed }))}>⬅</button>
        <button onClick={() => setBot((state) => ({ ...state, x: state.x + speed }))}>➡</button>
        <button onClick={() => setBot((state) => ({ ...state, y: state.y + speed }))}>⬇</button>
        <button onClick={() => setBot((state) => ({ ...state, y: state.y - speed }))}>⬆</button>
        <button onClick={() => setBot((state) => ({ ...state, bot_angle: state.bot_angle - angle_speed }))}>↶</button>
        <button onClick={() => setBot((state) => ({ ...state, bot_angle: state.bot_angle + angle_speed }))}>↷</button>
        <button onClick={forward}>✅</button>
        <button onClick={backward}>⛔</button>
      </div>
      <div>
        Gun
        <button onClick={() => setBot((state) => ({ ...state, gun_angle: state.gun_angle - angle_speed }))}>↶</button>
        <button onClick={() => setBot((state) => ({ ...state, gun_angle: state.gun_angle + angle_speed }))}>↷</button>
      </div>
      <div>
        Data: { JSON.stringify(bot_position) }
      </div>
    </div>
  );
}

export default App;
