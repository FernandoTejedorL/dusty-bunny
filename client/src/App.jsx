import { BrowserRouter } from 'react-router-dom';
import CartProvider from './providers/CartProvider';
import { GlobalStyles } from './styles/GlobalStyles';
import Router from './router/Router';
import AuthProvider from './providers/AuthProvider';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<AuthProvider>
				<CartProvider>
					<BrowserRouter>
						<Router />
					</BrowserRouter>
				</CartProvider>
			</AuthProvider>
		</>
	);
};

export default App;
