import { BrowserRouter } from 'react-router-dom';
import CartProvider from './providers/CartProvider';
import { GlobalStyles } from './styles/GlobalStyles';
import Router from './router/Router';
import AuthProvider from './providers/AuthProvider';
import ProductsProvider from './providers/ProductsProvider';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<AuthProvider>
				<ProductsProvider>
					<CartProvider>
						<BrowserRouter>
							<Router />
						</BrowserRouter>
					</CartProvider>
				</ProductsProvider>
			</AuthProvider>
		</>
	);
};

export default App;
