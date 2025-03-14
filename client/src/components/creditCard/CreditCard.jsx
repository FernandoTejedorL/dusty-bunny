import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { emptyCart } from '../../actions/cart-actions';
import { useAuth } from '../../hooks/useAuth';
import { useCart } from '../../hooks/useCart';
import { addQuantityToProduct, createOrder } from '../../utils/api';
import DynamicCard from '../dynamicCard/DynamicCard';
import Spinner from '../spinner/Spinner';

import ButtonInput from '../buttonInputPrimary/ButtonInput';
import ButtonPrimary from '../buttonPrimary/ButtonPrimary';
import {
	StyledBottomInputs,
	StyledButtonsContainer,
	StyledCreditCard,
	StyledEachInputContainer,
	StyledErrorMessage,
	StyledInput,
	StyledLittleInputContainers
} from './creditCard.styles';

const CreditCard = ({ setShowModal, setSent }) => {
	const { cartState, dispatch, totalPrice } = useCart();
	const { user } = useAuth();
	const navigate = useNavigate();

	const [completed, setCompleted] = useState(false);

	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors }
	} = useForm();

	const errorMessage = '*This field is required';
	const formValues = watch();

	return (
		<div>
			<Spinner completed={completed} />
			<DynamicCard
				nameValues={formValues.name}
				numberValues={formValues.number}
				dateValues={formValues.expDate}
			/>
			<StyledCreditCard
				onSubmit={handleSubmit(() =>
					sendOrder(
						user,
						cartState,
						dispatch,
						totalPrice,
						setCompleted,
						setShowModal,
						navigate,
						setSent
					)
				)}
			>
				<StyledEachInputContainer>
					<label htmlFor='card-name'>Cardholder Name</label>
					<StyledInput
						type='text'
						{...register('name', { required: errorMessage })}
						id='card-name'
						placeholder='Fluffy Duster'
					/>
					<StyledErrorMessage>{errors.name?.message}</StyledErrorMessage>
				</StyledEachInputContainer>
				<StyledEachInputContainer>
					<label htmlFor='number'>Card Number</label>
					<StyledInput
						{...register('number', {
							required: errorMessage,
							maxLength: 19,
							pattern: {
								value: /^\d{4} \d{4} \d{4} \d{4}$/,
								message: 'Card number must have 16 digits'
							},
							onChange: event => changeCardNumber(event, setValue)
						})}
						type='text'
						id='number'
						inputMode='numeric'
						placeholder='0000 0000 0000 0000'
						maxLength='19'
					/>
					<StyledErrorMessage>{errors.number?.message}</StyledErrorMessage>
				</StyledEachInputContainer>
				<StyledBottomInputs>
					<StyledLittleInputContainers>
						<label htmlFor='expDate'>Exp date</label>
						<StyledInput
							{...register('expDate', {
								required: errorMessage,
								pattern: {
									value: /^(0[1-9]|1[0-2])\/\d{2}$/,
									message: 'Exp Date must be MM & YY'
								}
							})}
							type='text'
							id='expDate'
							inputMode='numeric'
							placeholder='MM/YY'
							maxLength='5'
							onChange={event => changeExpDate(event, setValue)}
						/>
						<StyledErrorMessage>{errors.expDate?.message}</StyledErrorMessage>
					</StyledLittleInputContainers>
					<StyledLittleInputContainers>
						<label htmlFor='cvv'>CVV</label>
						<StyledInput
							{...register('cvv', {
								required: '*This field is required',
								pattern: {
									value: /^\d{3}$/,
									message: 'CVV must be 3 digits'
								}
							})}
							type='text'
							id='cvv'
							inputMode='numeric'
							placeholder='123'
							maxLength='3'
							onChange={event => changeCVV(event, setValue)}
						/>
						<StyledErrorMessage>{errors.cvv?.message}</StyledErrorMessage>
					</StyledLittleInputContainers>
				</StyledBottomInputs>
				<StyledButtonsContainer>
					<ButtonInput value={'Confirm'} />
					<ButtonPrimary
						text={'Back to cart'}
						action={() => setShowModal(false)}
					/>
				</StyledButtonsContainer>
			</StyledCreditCard>
		</div>
	);
};

const changeCardNumber = (event, setValue) => {
	let formattedValue = event.target.value.replace(/\D/g, '');
	formattedValue = formattedValue.substring(0, 16);
	formattedValue = formattedValue.replace(/(\d{4})/g, '$1 ').trim(); //

	setValue('number', formattedValue, { shouldValidate: true });
};

const changeExpDate = (event, setValue) => {
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
	setValue('expDate', formattedValue, { shouldValidate: true });
};

const changeCVV = (event, setValue) => {
	let formattedValue = event.target.value.replace(/\D/g, '');
	formattedValue = formattedValue.substring(0, 3);
	setValue('cvv', formattedValue, { shouldValidate: true });
};

const sendOrder = async (
	user,
	cartState,
	dispatch,
	totalPrice,
	setCompleted,
	setShowModal,
	navigate,
	setSent
) => {
	setCompleted(true);
	try {
		const newOrder = {
			userId: user._id,
			totalPrice: totalPrice,
			orderContent: cartState
		};
		await createOrder(newOrder);
		await addQuantityToProduct(cartState);
		dispatch(emptyCart());
		setShowModal(false);
		navigate('/cart');
		setSent(true);
		setCompleted(false);
		window.scrollTo(0, 0);
	} catch (error) {
		console.log('Error registering order', error.code, error.message);
	}
};

export default CreditCard;
