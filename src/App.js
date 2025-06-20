import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Bootstrap Files
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Home from './Pages/Home';
import NavBar from './components/common/navbar/Navbar';
import Footer from './components/common/footer/Footer';
import ScrollToTopButton from './components/common/scrolltotop/ScrollToTopButton';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
