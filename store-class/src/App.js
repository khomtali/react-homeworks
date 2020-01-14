import React from 'react';
import './App.css';
import Item from './models/Item';
import ShopItemClass from './components/ShopItemClass.js';

function App() {
  const item = new Item({
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£',
  });
  return (
    <div className="App">
      <div className="container">
        <div className="background-element" />
        <div className="highlight-window">
          <div className='highlight-overlay'></div>
        </div>
        <div className="window">
          <ShopItemClass item={item} />
        </div>
      </div>
    </div>
  );
}

export default App;
