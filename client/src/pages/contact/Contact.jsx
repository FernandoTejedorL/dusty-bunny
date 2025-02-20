import { useState } from 'react';
import { QUERIES } from '../../constants/queries-info';
import ContactForm from '../../components/contactForm/ContactForm';
import PageHeader from '../../components/pageHeader/PageHeader';

const Contact = () => {
	const [topValue, setTopValue] = useState('');
	return (
		<main>
			<PageHeader text={'Contact us!'} />
			<div>
				<span>Select your type of request</span>

				<select
					onChange={event => querieTypeSelect(event, setTopValue)}
					name='queryType'
					id='queryType'
					value={topValue}
				>
					<option value='' disabled>
						Select
					</option>
					{Object.keys(QUERIES).map(key => (
						<option key={key} value={key}>
							{key.charAt(0).toUpperCase() + key.substring(1)}
						</option>
					))}
				</select>
				{topValue && (
					<ContactForm setTopValue={setTopValue} topic={QUERIES[topValue]} />
				)}
			</div>
		</main>
	);
};

const querieTypeSelect = (event, setTopValue) => {
	setTopValue(event.target.value);
};

export default Contact;
