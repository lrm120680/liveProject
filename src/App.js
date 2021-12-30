import logo from './logo.svg';
import './App.css';

function handleRunTraining () {
  console.log('Run Training');
}

function RunTraining () {
  return (
    <button className='btn btn-primary btn-lg' onClick={handleRunTraining}>
      Run Training
    </button>
  )
}

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
        <br/>
        <RunTraining/>
      </header>
    </div>
  );
}

export default App;
