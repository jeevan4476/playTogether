
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import All from './pages/AllTurf';
import BookVenue from './pages/bookingpage';
import VenueDetails from './pages/fullpage';
import Homepage from './pages/Homepage';
import Layout from './pages/Layout';
import LoginPage from './pages/login';
import PaymentPage from './pages/payment';
import Profile from './pages/profile';
import Signup from './pages/signup';
import SpecificCategory from './pages/Specific';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/book" element={<Layout/>} >
                        <Route index element={<All />} />
                        <Route path=":sport" element={<SpecificCategory />} />
                    </Route>
                    <Route path='/Login' element={<LoginPage/>} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path="/venue/:id" element={<VenueDetails />} /> {/* Venue Details */}
                    <Route path="/booking/:id" element={<BookVenue />} />  
                    <Route path="/profile" element={<Profile/>} />
                    <Route path="*" element={<h1>Page Not Found</h1>} />
                    <Route path="/payment" element={<PaymentPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

