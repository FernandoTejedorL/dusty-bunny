import { useState } from 'react';

import ContactForm from '../../components/contactForm/ContactForm';
import PageHeader from '../../components/pageHeader/PageHeader';
import { QUERIES } from '../../constants/queries-info';

import {
	StyledBotForm,
	StyledCatchphrase,
	StyledContactImage,
	StyledMain,
	StyledSelect,
	StyledSuccessful,
	StyledSuccessfullClose,
	StyledTopForm,
	StylefFormContainer
} from './contact.styles';

const Contact = () => {
	const [topValue, setTopValue] = useState('');
	const [submitted, setSubmitted] = useState(false);

	return (
		<StyledMain>
			{submitted && (
				<StyledSuccessful>
					<StyledSuccessfullClose
						src='/assets/images/common/close.svg'
						alt='close'
						onClick={() => setSubmitted(false)}
					/>
					Your message has been sent! You´ll hear from us soon!
				</StyledSuccessful>
			)}
			<PageHeader text={'Contact us!'} />
			<StylefFormContainer>
				<StyledTopForm>
					<StyledContactImage src='/assets/images/common/contact.jpg' alt='' />
					<StyledCatchphrase>
						At Dusty Bunny, we want to hear from you! What do you have to say?
					</StyledCatchphrase>
				</StyledTopForm>
				<StyledBotForm>
					<span>Select your type of request:</span>

					<StyledSelect
						onChange={event => querieTypeSelect(event, setTopValue)}
						name='queryType'
						id='queryType'
						value={topValue}
						$shadow={topValue}
					>
						<option value='' disabled>
							Select
						</option>
						{Object.keys(QUERIES).map(key => (
							<option key={key} value={key}>
								{key.charAt(0).toUpperCase() + key.substring(1)}
							</option>
						))}
					</StyledSelect>
					{topValue && (
						<ContactForm
							setTopValue={setTopValue}
							setSubmitted={setSubmitted}
							topic={QUERIES[topValue]}
							type={topValue}
							topValue={topValue}
						/>
					)}
				</StyledBotForm>
			</StylefFormContainer>
		</StyledMain>
	);
};

const querieTypeSelect = (event, setTopValue) => {
	setTopValue(event.target.value);
};

export default Contact;
