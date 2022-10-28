import Hero from './components/Hero';
import './App.css';

function App() {
  const myName = 'Emily'
  return (
    <div className="App">
      <header className="App-header">
        <Hero />
        {myName
          ? <p>Welome Back</p>
          : <p>Please Login Above</p>
        }
        <p>Hello {myName || 'guest '}</p>
      </header>
    </div>
  );
}

export default App;

