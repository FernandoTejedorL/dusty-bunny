import {
	StyledCreditCard,
	StyledEachInputContainer,
	StyledBottomInputs,
	StyledLittleInputContainers,
	StyledInput
} from './creditCard.styles';

const CreditCard = () => {
	return (
		<StyledCreditCard>
			<StyledEachInputContainer>
				<label htmlFor='card-name'>Cardholder Name</label>
				<StyledInput type='text' name='name' id='card-name' />
			</StyledEachInputContainer>
			<StyledEachInputContainer>
				<label htmlFor='number'>Card Number</label>
				<StyledInput type='number' name='number' id='number' />
			</StyledEachInputContainer>
			<StyledBottomInputs>
				<StyledLittleInputContainers>
					<label htmlFor='expDate'>Exp date</label>
					<StyledInput type='number' name='expDate' id='expDate' />
				</StyledLittleInputContainers>
				<StyledLittleInputContainers>
					<label htmlFor='cvv'>CVV</label>
					<StyledInput type='number' name='cvv' id='cvv' />
				</StyledLittleInputContainers>
			</StyledBottomInputs>
		</StyledCreditCard>
	);
};

export default CreditCard;
