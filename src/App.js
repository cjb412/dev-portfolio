import './styles/App.css';
import IndexBar from './components/index/IndexBar';
import SectionContainer from './components/SectionContainer';

const App = () => {
  return (
    <div className="App">
      <SectionContainer />
      <IndexBar />
    </div>
  );
}

export default App;
