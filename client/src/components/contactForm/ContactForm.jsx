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

	const qst = watch('querySubType');

	console.log(qst);

	const errorMessage = '*This field is required';
	return (
		<StyledForm
			onSubmit={handleSubmit(data =>
				sendQuery(topValue, setTopValue, data, reset, setSubmitted)
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

const sendQuery = async (topValue, setTopValue, data, reset, setSubmitted) => {
	try {
		const newQuery = {
			type: topValue,
			name: data.name,
			email: data.email,
			topic: data.querySubType,
			description: data.description
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
	} catch (error) {
		console.log('Error registering query', error.code, error.message);
	}
};

export default ContactForm;
