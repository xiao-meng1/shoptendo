import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Header from './components/Header';
// import Sidebar from './components/Sidebar';
// import Overlay from './components/Overlay';
import styles from './styles/app.module.css';

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Header />
        {/* <Sidebar /> */}
        <main>
          {/* <Overlay /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
