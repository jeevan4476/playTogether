
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Appbar from './components/Appbar';
import Book from './pages/Book';
import Homepage from './pages/Homepage';

function App() {
    return (
        <Router>
            <div className="App">
                {/* Navigation Bar */}
                <Appbar />

                {/* Routes */}
                <Routes>
                    {/* <Route path='/Football' element={<div>football</div>}/> */}
                    <Route path="/" element={<Homepage />} />
                    <Route path="/Book" element={<Book />} />
                    <Route path="*" element={<h1>Page Not Found</h1>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

