import { BrowserRouter } from 'react-router-dom';
import CartProvider from './providers/CartProvider';
import { GlobalStyles } from './styles/GlobalStyles';
import Router from './router/Router';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<CartProvider>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</CartProvider>
		</>
	);
};

export default App;
