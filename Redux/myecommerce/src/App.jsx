// App.js
import React from 'react';
import ProductList from '../../myecommerce/src/Components/ProductList';
import ShoppingCart from '../../myecommerce/src/Components/ShoppingCart';
import './App.css'
const App = () => {
  return (
 
      <div>
        <h1 className='app-heading'>E-Commerce Application</h1>
        <ProductList />
        <ShoppingCart />
        <SuperCoin />
      </div>

  );
};

export default App;
