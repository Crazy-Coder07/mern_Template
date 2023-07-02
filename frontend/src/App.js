import './App.css';
import Header from './Header/header';
import Footer from './Footer/Footer';
import { Routes,Route } from 'react-router-dom';
import Home from './Header/home';
import Contact from './Header/contact';
import Aboutme from './Header/aboutme';
import Login from './Header/login';
import Register from './Header/register';


function App() {
  return (
    <>
      <Header/>

      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/aboutme" element={<Aboutme/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Register/>}/>
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
