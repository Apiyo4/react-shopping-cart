import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import ProductContext from './contexts/ProductContext';
import CartContext from './contexts/CartContext';
import {useLocalStorage} from './hooks/useLocalStorage';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useLocalStorage("cart", []);

	const addItem = item => {
		// console.log('item:', item )
		// add the given item to the cart
		const clickedItem = products.filter(product=>{
			return product.id===item.id;
		})
		console.log("clickedItem:", clickedItem)
		setCart(clickedItem);
		
	};

	const removeItem = (id) => {
		
	 return	setCart(cart.filter(item=>{
		 return item.id != item.id
	 }));
	}
	
	

	return (
		<div className="App">
			<ProductContext.Provider value = {{products, addItem}}> 
				<CartContext.Provider value = {{cart, removeItem}}>
					
					<Navigation cart={cart} />
					
					
					{/* Routes */}
						<Route exact path="/" component = {Products} />

						<Route
							path="/cart" component={ShoppingCart}
						/>

				</CartContext.Provider>		
			</ProductContext.Provider>
			
		</div>
	);
}

export default App;
