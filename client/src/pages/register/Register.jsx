import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import { createData } from '../../utils/api';
import { useNavigate } from 'react-router-dom';
import {
	StyledButton,
	StyledCheckbox,
	StyledContainer,
	StyledImg,
	StyledInput,
	StyledInputAndTag,
	StyledMain,
	StyledRadioPack,
	StyledRadiosContainer,
	StyledRegisterForm,
	StyledRequired
} from './register.styles';
import { useAuth } from '../../hooks/useAuth';
import AvatarGrid from '../../components/avatarGrid/AvatarGrid';
import { useForm } from 'react-hook-form';
import PageHeader from '../../components/pageHeader/PageHeader';
import { useState } from 'react';

const Register = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm();
	const navigate = useNavigate();
	const { loading } = useAuth();
	const errorMessage = '*This field is required';
	const isEmployee = watch('employee') === 'pelusas';
	const [mailOk, setMailOk] = useState(true);
	console.log(mailOk);
	if (loading) return <h2>Loading...</h2>;
	return (
		<StyledMain>
			<PageHeader text={'Register'} />
			<StyledContainer>
				<StyledImg src='/assets/images/common/register.jpg' alt='' />
				<StyledRegisterForm
					onSubmit={handleSubmit(data =>
						registerUser(data, navigate, setMailOk)
					)}
				>
					<AvatarGrid register={register} error={errors.avatar} />
					<StyledInputAndTag>
						<label htmlFor='name'>Name:</label>
						<StyledInput
							type='text'
							{...register('name', { required: errorMessage })}
							placeholder='Name'
						/>
						<StyledRequired>{errors.name?.message}</StyledRequired>
					</StyledInputAndTag>
					<StyledInputAndTag>
						<label htmlFor='surname'>Surname:</label>
						<StyledInput
							type='text'
							{...register('surname', { required: errorMessage })}
							placeholder='Surname'
						/>
						<StyledRequired>{errors.surname?.message}</StyledRequired>
					</StyledInputAndTag>
					<StyledInputAndTag>
						<label htmlFor='address'>Address:</label>
						<StyledInput
							type='text'
							{...register('address', { required: errorMessage })}
							placeholder='Address'
						/>
						<StyledRequired>{errors.address?.message}</StyledRequired>
					</StyledInputAndTag>
					<StyledInputAndTag>
						<label htmlFor='email'>Email:</label>
						<StyledInput
							type='email'
							{...register('email', { required: errorMessage })}
							placeholder='Email'
						/>
						<StyledRequired>{errors.email?.message}</StyledRequired>
					</StyledInputAndTag>
					<StyledInputAndTag>
						<label htmlFor='pass'>Password:</label>
						<StyledInput
							type='text'
							{...register('password', { required: errorMessage })}
							placeholder='Password'
						/>
						<StyledRequired>{errors.password?.message}</StyledRequired>
					</StyledInputAndTag>
					<StyledInputAndTag>
						<label htmlFor='employee'>
							If you are an employee, write here the password!
						</label>
						<StyledInput
							type='text'
							{...register('employee')}
							placeholder='Employee Password'
						/>
						<StyledRequired>{errors.employee?.message}</StyledRequired>
					</StyledInputAndTag>
					<StyledRadiosContainer>
						{!isEmployee && (
							<StyledRadioPack>
								<label htmlFor='userProfile'>
									I confirm all data provided is correct!
								</label>
								<StyledCheckbox
									type='radio'
									{...register('profile', { required: errorMessage })}
									value={false}
									id='userProfile'
								/>
							</StyledRadioPack>
						)}
						{isEmployee && (
							<StyledRadioPack>
								<label htmlFor='vendorProfile'>Vendor</label>
								<StyledCheckbox
									type='radio'
									{...register('profile', { required: errorMessage })}
									value={true}
									id='vendorProfile'
								/>
							</StyledRadioPack>
						)}
						<StyledRequired>{errors.profile?.message}</StyledRequired>
					</StyledRadiosContainer>
					<StyledRadioPack>
						<label htmlFor='terms'>
							I accept the <span>Terms & Conditions</span>
						</label>
						<StyledCheckbox
							type='radio'
							{...register('terms', { required: errorMessage })}
							id='terms'
						/>
					</StyledRadioPack>
					<StyledButton type='submit' value='Register' />
				</StyledRegisterForm>
			</StyledContainer>
		</StyledMain>
	);
};

const registerUser = async (data, navigate, setMailOk) => {
	const { email, password, name, surname, address, profile } = data;
	try {
		const firebaseUser = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		const newUser = {
			_id: firebaseUser.user.uid,
			avatar: data.avatar,
			name,
			surname,
			address,
			email,
			vendor: profile === 'true'
		};

		const result = await createData(newUser);
		if (result) {
			setMailOk(true);
		} else {
			setMailOk(false);
		}

		console.log('User Registered');
		console.log(result);
		navigate('/');
	} catch (error) {
		console.log('Error registering user', error.code, error.message);
	}
};

export default Register;
