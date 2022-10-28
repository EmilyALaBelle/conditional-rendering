import './App.css';

function App() {
  const myName = 'Emily'
  return (
    <div className="App">
      <header className="App-header">
        {myName
        ? <p>Welome Back</p>
        :<button>Login</button>
        }
        <p>Hello {myName || 'guest '}</p>
      </header>
    </div>
  );
}

export default App;
