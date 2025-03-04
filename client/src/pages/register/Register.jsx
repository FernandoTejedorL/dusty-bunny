import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import AvatarGrid from '../../components/avatarGrid/AvatarGrid';
import Modal from '../../components/modal/Modal';
import PageHeader from '../../components/pageHeader/PageHeader';
import Spinner from '../../components/spinner/Spinner';
import TAndC from '../../components/tAndC/TAndC';
import WrongSpinner from '../../components/wrongSpinner/WrongSpinner';
import { auth } from '../../config/firebase.config';
import { useAuth } from '../../hooks/useAuth';
import { createData } from '../../utils/api';

import {
	StyledButton,
	StyledCheckbox,
	StyledContainer,
	StyledImg,
	StyledInput,
	StyledInputAndTag,
	StyledLabel,
	StyledMain,
	StyledRadioPack,
	StyledRadiosContainer,
	StyledRegisterForm,
	StyledRequired,
	StyledTandC
} from './register.styles';

const Register = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm();
	const { loading, setUser } = useAuth();
	const [mailOk, setMailOk] = useState(true);
	const [showModal, setShowModal] = useState(false);
	const [currentAvatar, setCurrentAvatar] = useState(
		'/assets/images/common/register.jpg'
	);
	const [completed, setCompleted] = useState(false);
	const navigate = useNavigate();

	const errorMessage = '*This field is required';
	const isEmployee = watch('employee') === 'pelusas';

	if (loading) return <h2>Loading...</h2>;

	return (
		<StyledMain>
			<Spinner completed={completed} />
			<WrongSpinner mailOk={mailOk} setMailOk={setMailOk} />
			<PageHeader text={'Register'} />
			<StyledContainer>
				<StyledImg src={currentAvatar} alt='' />
				<StyledRegisterForm
					onSubmit={handleSubmit(data =>
						registerUser(data, setCompleted, navigate, setMailOk, setUser)
					)}
				>
					<AvatarGrid
						register={register}
						error={errors.avatar}
						required={`required: *Please select an avatar*`}
						action={image => setCurrentAvatar(image)}
					/>
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
						{!mailOk && <StyledRequired>Email used</StyledRequired>}
					</StyledInputAndTag>
					<StyledInputAndTag>
						<label htmlFor='pass'>Password:</label>
						<StyledInput
							type='password'
							{...register('password', {
								required: errorMessage,
								minLength: {
									value: 7,
									message: 'Pass must have a minimum of 7 characters'
								}
							})}
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
								<StyledLabel htmlFor='userProfile'>
									I confirm all data provided is correct!
								</StyledLabel>
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
								<StyledLabel htmlFor='vendorProfile'>
									Yes! I am staff!
								</StyledLabel>
								<StyledCheckbox
									type='radio'
									{...register('profile', { required: errorMessage })}
									value={true}
									id='vendorProfile'
								/>
							</StyledRadioPack>
						)}
					</StyledRadiosContainer>
					<StyledRequired>{errors.profile?.message}</StyledRequired>
					<StyledRadioPack>
						<StyledLabel htmlFor=''>
							I accept the{' '}
							<StyledTandC onClick={() => setShowModal(true)}>
								Terms & Conditions
							</StyledTandC>
						</StyledLabel>

						<StyledCheckbox
							type='checkbox'
							{...register('terms', { required: errorMessage })}
							id='terms'
						/>
					</StyledRadioPack>
					<StyledRequired>{errors.terms?.message}</StyledRequired>
					<StyledButton type='submit' value='Register' />
				</StyledRegisterForm>
			</StyledContainer>
			{showModal && (
				<Modal>
					<TAndC setShowModal={setShowModal} />
				</Modal>
			)}
		</StyledMain>
	);
};

const registerUser = async (
	data,
	setCompleted,
	navigate,
	setMailOk,
	setUser
) => {
	const { email, password, name, surname, address, profile } = data;
	setCompleted(true);
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

		if (typeof setUser === 'function') {
			setUser(newUser);
		}

		console.log('User Registered');
		setCompleted(false);
		navigate('/');
	} catch (error) {
		console.log('Error registering user', error.code, error.message);
	}
};

export default Register;
