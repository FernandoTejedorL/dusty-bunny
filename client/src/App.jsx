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
			<BrowserRouter>
				<AuthProvider>
					<ProductsProvider>
						<CartProvider>
							<Router />
						</CartProvider>
					</ProductsProvider>
				</AuthProvider>
			</BrowserRouter>
		</>
	);
};

export default App;
