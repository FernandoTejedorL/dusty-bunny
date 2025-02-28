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
import { createQuery } from '../../utils/api';
import Spinner from '../spinner/Spinner';
import { useState } from 'react';

const ContactForm = ({ topic, topValue, setTopValue, setSubmitted }) => {
	const {
		reset,
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors }
	} = useForm({
		defaultValues: {
			querySubType: ''
		}
	});

	const [completed, setCompleted] = useState(false);

	const setTwoDigits = number => (number < 10 ? `0${number}` : number);
	const date = new Date();
	const day = setTwoDigits(date.getDate());
	const month = setTwoDigits(date.getMonth() + 1);
	const year = date.getFullYear();

	const dateToQuery = `${day}/${month}/${year}`;

	const qst = watch('querySubType');

	const errorMessage = '*This field is required';
	return (
		<StyledForm
			onSubmit={handleSubmit(data =>
				sendQuery(
					topValue,
					setCompleted,
					dateToQuery,
					setTopValue,
					data,
					reset,
					setSubmitted
				)
			)}
		>
			<Spinner completed={completed} />
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
				onChange={event => querieTypeSelect(event, setValue)}
				value={watch('querySubType')}
				{...register('querySubType')}
				id='querySubType'
				$shadow={qst}
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

			{qst && (
				<StyledBottomForm>
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

const querieTypeSelect = (event, setValue) => {
	const selectedValue = event.target.value;
	setValue('querySubType', selectedValue);
};

const sendQuery = async (
	topValue,
	setCompleted,
	dateToQuery,
	setTopValue,
	data,
	reset,
	setSubmitted
) => {
	setCompleted(true);
	try {
		const newQuery = {
			type: topValue,
			name: data.name,
			email: data.email,
			topic: data.querySubType,
			description: data.description,
			date: dateToQuery,
			read: false
		};
		await createQuery(newQuery);

		reset({
			name: '',
			email: '',
			querySubType: '',
			description: ''
		});
		setSubmitted(true);
		setTopValue('');
		setCompleted(false);
		window.scrollTo(0, 0);
	} catch (error) {
		console.log('Error registering query', error.code, error.message);
	}
};

export default ContactForm;
