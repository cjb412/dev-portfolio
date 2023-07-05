//import { useEffect } from 'react'
import './App.css';
import Intro from './components/Intro';

const App = () => {
  return (
    <div className="App">
      <Intro />
      <div style={{height: 500, backgroundColor: 'white'}} >Another Area</div>
    </div>
  );
}

export default App;
