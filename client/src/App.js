import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CarHome from './cars/CarHome';
import Navbar from './pages/Navbar';
import LoginPage from './auth/LoginPage';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div className="App">
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<CarHome />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
