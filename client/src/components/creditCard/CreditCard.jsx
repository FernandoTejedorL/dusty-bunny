import { useState } from 'react';
import {
	StyledCreditCard,
	StyledEachInputContainer,
	StyledBottomInputs,
	StyledLittleInputContainers,
	StyledInput
} from './creditCard.styles';

const CreditCard = () => {
	const [cardNumber, setCardNumber] = useState('');
	const [expDate, setExpDate] = useState('');
	const [cvv, setCvv] = useState('');
	console.log(expDate);
	return (
		<StyledCreditCard>
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

export default CreditCard;
