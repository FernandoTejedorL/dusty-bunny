import { useState } from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = ({ topic, setTopValue }) => {
	const {
		reset,
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();
	const [value, setValue] = useState('');
	const [concern, setConcern] = useState('');
	const [submitted, setSubmitted] = useState(false);
	console.log(submitted);
	const errorMessage = '*This field is required';
	return (
		<form
			onSubmit={handleSubmit(() =>
				cleanAll(reset, setValue, setConcern, setSubmitted, setTopValue)
			)}
		>
			<label htmlFor='name'>Name & surname:</label>
			<input
				type='text'
				{...register('name', { required: errorMessage })}
				id='name'
			/>
			<span>{errors?.name?.message}</span>
			<label htmlFor='email'>Email:</label>
			<input {...register('email', { required: errorMessage })} type='email' />
			<span>{errors?.email?.message}</span>
			<label htmlFor='type'>Type:</label>
			<select
				onChange={event => querieTypeSelect(event, setValue, topic, setConcern)}
				value={value}
				name='querySubType'
				id='querySubType'
			>
				<option value='' disabled>
					Select
				</option>
				{topic.map(item => (
					<option key={item.id} value={item.value}>
						{item.name}
					</option>
				))}
			</select>
			{concern && <p>{concern}</p>}
			<label htmlFor='description'>Description:</label>
			<input
				type='text'
				{...register('description', { required: errorMessage })}
				id='description'
			/>
			<span>{errors?.email?.message}</span>
			<input type='submit' value='Send' />
		</form>
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
