import { Footer } from 'antd/es/layout/layout';
import './App.css';
import { Header } from './components/Header';
import Home from './components/Home';


// import { Home } from "./components/Home";
// import { Contact } from "./components/Contact";

// import { Product } from "./components/Product";
//import { Routes, Route } from "react-router-dom";
// import { About } from "./components/About";

function App() {
  return (
    
    <>
    <Header/>
    {/* <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} /> 

      </Routes> */}
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
