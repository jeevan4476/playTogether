import './App.css';
import Appbar from './components/appbar';
import Feature from './components/featured';
import SubscribeSection from './components/footbar';
import Carousel from './components/middle';
function App() {
  return (
    <div className="App overflow-visible">
      <Appbar /><br/>
      <Carousel />
      <Feature />
      <SubscribeSection/>
    </div>
  );
}

export default App;
