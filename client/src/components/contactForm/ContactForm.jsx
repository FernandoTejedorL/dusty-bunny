import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
	StyledBottomForm,
	StyledForm,
	StyledInput,
	StyledRequired,
	StyledSelect,
	StyledSubmit,
	StyledTextInput
} from './contactForm.styles';

const ContactForm = ({ topic, setTopValue, setSubmitted }) => {
	const {
		reset,
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();
	const [value, setValue] = useState('');
	const [concern, setConcern] = useState('');

	const errorMessage = '*This field is required';
	return (
		<StyledForm
			onSubmit={handleSubmit(() =>
				cleanAll(reset, setValue, setConcern, setSubmitted, setTopValue)
			)}
		>
			<label htmlFor='name'>Name & surname:</label>
			<StyledInput
				type='text'
				{...register('name', { required: errorMessage })}
				id='name'
			/>
			<StyledRequired>{errors?.name?.message}</StyledRequired>
			<label htmlFor='email'>Email:</label>
			<StyledInput
				{...register('email', { required: errorMessage })}
				type='email'
			/>
			<StyledRequired>{errors?.email?.message}</StyledRequired>
			<label htmlFor='type'>Type:</label>
			<StyledSelect
				onChange={event => querieTypeSelect(event, setValue, topic, setConcern)}
				value={value}
				name='querySubType'
				id='querySubType'
				$shadow={value}
			>
				<option value='' disabled>
					Select
				</option>
				{topic.map(item => (
					<option key={item.id} value={item.value}>
						{item.name}
					</option>
				))}
			</StyledSelect>
			{value && (
				<StyledBottomForm>
					<p>{concern}</p>
					<label htmlFor='description'>Description:</label>
					<StyledTextInput
						type='text'
						{...register('description', { required: errorMessage })}
						id='description'
					/>
					<StyledRequired>{errors?.description?.message}</StyledRequired>
					<StyledSubmit type='submit' value='Send' />
				</StyledBottomForm>
			)}
		</StyledForm>
	);
};

const querieTypeSelect = (event, setValue, topic, setConcern) => {
	setValue(event.target.value);
	const selected = topic.find(item => item.value === event.target.value);
	if (selected) {
		setConcern(selected.concern);
	}
};

const cleanAll = (reset, setValue, setConcern, setSubmitted, setTopValue) => {
	reset();
	setValue('');
	setConcern('');
	setSubmitted(true);
	setTopValue('');
};

export default ContactForm;
