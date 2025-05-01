/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


//Пример использования Day.js:
import React from 'react';
import dayjs from 'dayjs';
function App() {
    const currentDate = dayjs().format('YYYY MM DD HH:mm:ss');
    return (
        <div>
            <h1>Текущая дата и время:</h1>
            <p>{currentDate}</p>
        </div>
    );
}
export default App;
 */
/* import React from "react";
const App = (props) => {
return(
  <div>
    <h1>Заголовок - {props.header}</h1>
    <div>Описание - {props.description}</div>
  </div>
)
};

export default App; */

import React, { useRef } from 'react';
import Button from './components/Button'; // подключаем компонент Button
import Input from './components/Input'; // подключаем компонент Input
import './App.css'; // Подключаем стили

function App() {
    const inputRef = useRef(null);
    const handleClear = () => {
        if (inputRef.current) {
            inputRef.current.value = '';
        }
    };
    return (
        <div className="app-container">
            <Input ref={inputRef} placeholder="Введите текст..." />
            <Button onClick={handleClear} />
        </div>
    );
}

export default App;