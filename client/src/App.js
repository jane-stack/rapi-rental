import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CarHome from './pages/CarHome';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<CarHome />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
