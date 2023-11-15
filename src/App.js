import logo from './logo.svg';
import './App.css';
import Slide from './components/Slide';
import RangeSlider from './components/RangeSlide.tsx';
import { StyledEngineProvider } from '@mui/material/styles';
function App() {
  return (
    <div className="App">
      <Slide/>
      <RangeSlider/>
    </div>
  );
}

export default App;
