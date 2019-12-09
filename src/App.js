import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import ProductContext from './contexts/ProductContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// console.log('item:', item )
		// add the given item to the cart
		const clickedItem = products.filter(product=>{
			return product.id===item.id;
		})
		console.log("clickedItem:", clickedItem)
		setCart(clickedItem);
		
	};

	return (
		<div className="App">
			
			<Navigation cart={cart} />
			<ProductContext.Provider value = {{products, addItem}}
				
			>
			
				{/* Routes */}
				<Route exact path="/" component = {Products} />

				<Route
					path="/cart"
					render={() => <ShoppingCart cart={cart} />}
				/>

					
			</ProductContext.Provider>
			
		</div>
	);
}

export default App;
