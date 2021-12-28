import { useState } from 'react';
import './App.css';
import Bot from './Bot';

function App() {
  let [bot_position, setBot] = useState({ x: 0, y: 0, bot_angle: 90, gun_angle: 0 });

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
        <button onClick={() => setBot((state) => ({ ...state, x: state.x - 5 }))}>⬅</button>
        <button onClick={() => setBot((state) => ({ ...state, x: state.x + 5 }))}>➡</button>
        <button onClick={() => setBot((state) => ({ ...state, y: state.y + 5 }))}>⬇</button>
        <button onClick={() => setBot((state) => ({ ...state, y: state.y - 5 }))}>⬆</button>
        <button onClick={() => setBot((state) => ({ ...state, bot_angle: state.bot_angle - 20 }))}>↶</button>
        <button onClick={() => setBot((state) => ({ ...state, bot_angle: state.bot_angle + 20 }))}>↷</button>
      </div>
      <div>
        Gun
        <button onClick={() => setBot((state) => ({ ...state, gun_angle: state.gun_angle - 20 }))}>↶</button>
        <button onClick={() => setBot((state) => ({ ...state, gun_angle: state.gun_angle + 20 }))}>↷</button>
      </div>
    </div>
  );
}

export default App;
