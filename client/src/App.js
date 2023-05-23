// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      useEffect(() => {
        fetch("/movies")
        .then((r) => r.json())
        .then((movies) => console.log(movies))
      }, []);

      return <h1>Hello from React!</h1>
    </div>
  );
}

export default App;
