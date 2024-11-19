import '../App.css';
import Feature from '../components/featured';
import SubscribeSection from '../components/footbar';
import Carousel from '../components/middle';
import Appbar from '../components/appbar';

export default function Homepage() {
    return (
        <div className="App overflow-visible bg-indigo-50">
            <Appbar />
            <Carousel />
            <Feature />
            <SubscribeSection/>
        </div>
    )
}
