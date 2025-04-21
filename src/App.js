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

export default App; */


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
