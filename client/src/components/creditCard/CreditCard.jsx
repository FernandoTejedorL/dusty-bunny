const CreditCard = () => {
	return (
		<div>
			<div>
				<label htmlFor='card-name'>Cardholder Name</label>
				<input type='text' name='name' id='card-name' />
			</div>
			<div>
				<label htmlFor='number'>Card Numbere</label>
				<input type='number' name='number' id='number' />
			</div>
			<div>
				<div>
					<label htmlFor='expDate'>Expiration date</label>
					<input type='number' name='expDate' id='expDate' />
				</div>
				<div>
					<label htmlFor='cvv'>Cardholder Name</label>
					<input type='number' name='cvv' id='cvv' />
				</div>
			</div>
		</div>
	);
};

export default CreditCard;
