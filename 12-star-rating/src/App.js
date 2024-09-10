import './App.css';
import {StartRating} from './StartRating.js';

function App() {
  return (
    <div className="App">
      <StartRating maxRating={5}/>
      <StartRating maxRating={10}/>
      <StartRating/>


    </div>
  );
}

export default App;
