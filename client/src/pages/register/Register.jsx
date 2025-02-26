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
	StyledLabel,
	StyledMain,
	StyledRadioPack,
	StyledRadiosContainer,
	StyledRegisterForm,
	StyledRequired,
	StyledTandC
} from './register.styles';
import { useAuth } from '../../hooks/useAuth';
import AvatarGrid from '../../components/avatarGrid/AvatarGrid';
import { useForm } from 'react-hook-form';
import PageHeader from '../../components/pageHeader/PageHeader';
import { useState } from 'react';
import Modal from '../../components/modal/Modal';
import TAndC from '../../components/tAndC/TAndC';

const Register = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm();
	const navigate = useNavigate();
	const { loading, setUser } = useAuth();
	const errorMessage = '*This field is required';
	const isEmployee = watch('employee') === 'pelusas';
	const [mailOk, setMailOk] = useState(true);
	const [showModal, setShowModal] = useState(false);
	if (loading) return <h2>Loading...</h2>;
	return (
		<StyledMain>
			<PageHeader text={'Register'} />
			<StyledContainer>
				<StyledImg src='/assets/images/common/register.jpg' alt='' />
				<StyledRegisterForm
					onSubmit={handleSubmit(data =>
						registerUser(data, navigate, setMailOk, setUser)
					)}
				>
					<AvatarGrid
						register={register}
						error={errors.avatar}
						required={`required: *Please select an avatar*`}
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

const registerUser = async (data, navigate, setMailOk, setUser) => {
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

		if (typeof setUser === 'function') {
			setUser(newUser);
		}

		console.log('User Registered');
		navigate('/');
	} catch (error) {
		console.log('Error registering user', error.code, error.message);
	}
};

export default Register;
