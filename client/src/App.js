import './App.css';
import Appbar from './components/appbar';
import SubscribeSection from './components/footbar';
import Carousel from './components/middle';
function App() {
  return (
    <div className="App">
      <Appbar /><br/>
      <Carousel />
      <SubscribeSection/>
    </div>
  );
}

export default App;
