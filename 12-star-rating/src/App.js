import './App.css';
import {StartRating} from './StartRating.js';

function App() {
  return (
    <div className="App" >
      <StartRating maxRating={5} messages={['Terrible' ,'Bad' ,'Okey' ,'Good' ,'Amazing']} defaultRating={3}/>

      <StartRating maxRating={10}  defaultRating={5} color="red"/>

      <StartRating maxRating={3}  defaultRating={0} color="blue" messages={['Terrible' ,'Bad' ,'Okey' ,'Good' ,'Amazing']}/>

      {/* <StartRating maxRating={10} size={24} color="red"/> */}
      {/* <StartRating  maxRating={10} size={24} messages={['Terrible' ,'Bad' ,'Okey' ,'Good' ,'Amazing']} /> */}


    </div>
  );
}

export default App;
