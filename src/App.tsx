import './App.css';

function App() {
  const onButtonClick = () => {
    console.log('clicked');
  };

  return (
    <div className="App">
      <button onClick={onButtonClick}>click to play</button>
    </div>
  );
}

export default App;
