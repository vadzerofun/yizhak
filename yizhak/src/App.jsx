import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Cart from './pages/cart';
import Categories from './pages/categories';
import Contact from './pages/contact';
import ProductCard from './pages/productCard';
import DeliveryPayment from './pages/deliveryPayment';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart/:category/:id" element={<Cart/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/categories/:category" element={<Categories/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/productCard" element={<ProductCard/>}/>
        <Route path="/deliveryPayment" element={<DeliveryPayment/>}/>
      </Routes>        
    </BrowserRouter>
  );
}

export default App;
