import { useState } from 'react';
import {
	StyledCreditCard,
	StyledEachInputContainer,
	StyledBottomInputs,
	StyledLittleInputContainers,
	StyledInput,
	StyledButtonsContainer,
	StyledButton,
	StyledButtonInput
} from './creditCard.styles';
import { addQuantityToProduct, createOrder } from '../../utils/api';
import { useCart } from '../../hooks/useCart';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const CreditCard = ({ setShowModal }) => {
	const { cart, setCart, totalPrice } = useCart();
	const { user } = useAuth();
	const navigate = useNavigate();

	const [cardNumber, setCardNumber] = useState('');
	const [expDate, setExpDate] = useState('');
	const [cvv, setCvv] = useState('');
	return (
		<StyledCreditCard
			onSubmit={event =>
				sendOrder(
					event,
					user,
					cart,
					setCart,
					totalPrice,
					setShowModal,
					navigate
				)
			}
		>
			<StyledEachInputContainer>
				<label htmlFor='card-name'>Cardholder Name</label>
				<StyledInput type='text' name='name' id='card-name' />
			</StyledEachInputContainer>
			<StyledEachInputContainer>
				<label htmlFor='number'>Card Number</label>
				<StyledInput
					onChange={event => changeCardNumber(event, setCardNumber)}
					type='text'
					name='number'
					id='number'
					inputMode='numeric'
					value={cardNumber}
				/>
			</StyledEachInputContainer>
			<StyledBottomInputs>
				<StyledLittleInputContainers>
					<label htmlFor='expDate'>Exp date</label>
					<StyledInput
						onChange={event => changeExpDate(event, setExpDate)}
						type='text'
						name='expDate'
						id='expDate'
						inputMode='numeric'
						value={expDate}
					/>
				</StyledLittleInputContainers>
				<StyledLittleInputContainers>
					<label htmlFor='cvv'>CVV</label>
					<StyledInput
						onChange={event => changeCVV(event, setCvv)}
						type='number'
						name='cvv'
						id='cvv'
						value={cvv}
					/>
				</StyledLittleInputContainers>
			</StyledBottomInputs>
			<StyledButtonsContainer>
				<StyledButtonInput type='submit' value='Confirm Order' />
				<StyledButton onClick={() => setShowModal(false)}>
					Back to cart
				</StyledButton>
			</StyledButtonsContainer>
		</StyledCreditCard>
	);
};

const changeCardNumber = (event, setCardNumber) => {
	let formattedValue = event.target.value.replace(/\D/g, '');
	formattedValue = formattedValue.substring(0, 16);
	formattedValue = formattedValue.replace(/(\d{4})/g, '$1 ').trim();
	setCardNumber(formattedValue);
};

const changeExpDate = (event, setExpDate) => {
	let formattedValue = event.target.value.replace(/\D/g, '').substring(0, 4);
	let month = formattedValue.substring(0, 2);
	let year = formattedValue.substring(2, 4);

	if (month.length === 2 && parseInt(month) > 12) {
		month = '12';
	}
	if (year.length === 2 && parseInt(year) > 99) {
		year = '99';
	}

	formattedValue = month + (year ? '/' + year : '');
	setExpDate(formattedValue);
};

const changeCVV = (event, setCvv) => {
	let formattedValue = event.target.value.replace(/\D/g, '');
	formattedValue = formattedValue.substring(0, 3);
	setCvv(formattedValue);
};

const sendOrder = async (
	event,
	user,
	cart,
	setCart,
	totalPrice,
	setShowModal,
	navigate
) => {
	event.preventDefault();
	try {
		const newOrder = {
			userId: user._id,
			totalPrice: totalPrice,
			orderContent: cart
		};
		await createOrder(newOrder);
		await addQuantityToProduct(cart);
		setCart([]);
		setShowModal(false);
		navigate('/cart');
	} catch (error) {
		console.log('Error registering order', error.code, error.message);
	}
};

export default CreditCard;
