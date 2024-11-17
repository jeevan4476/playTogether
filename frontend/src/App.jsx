
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Appbar from './components/appbar';
import Book from './pages/Book';
import BookVenue from './pages/bookingpage';
import VenueDetails from './pages/fullpage';
import Homepage from './pages/Homepage';
import LoginPage from './pages/login';
import Signup from './pages/signup';

function App() {
    return (
        <Router>
            <div className="App">
                {/* Navigation Bar */}
                <Appbar />
                {/* <Profile/> */}
                {/* Routes */}
                <Routes>
                    {/* <Route path='/Football' element={<div>football</div>}/> */}
                    <Route path="/" element={<Homepage />} />
                    <Route path="/Book" element={<Book />} />
                    <Route path="*" element={<h1>Page Not Found</h1>} />
                    <Route path='/Login' element={<LoginPage/>} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path="/venue/:id" element={<VenueDetails />} />
                    <Route path="/book/:id" element={<BookVenue />} />                </Routes>
            </div>
        </Router>
    );
}

export default App;

