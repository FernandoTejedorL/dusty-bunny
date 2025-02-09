import {
	StyledActionText,
	StyledCheer,
	StyledImageAndText,
	StyledImgRedirect,
	StyledMain,
	StyledQuestion,
	StyledRedirectContainer
} from './redirect.styles';

const Redirect = () => {
	return (
		<StyledMain>
			<StyledQuestion>
				Do you already have an account as a Fluffy Lover?
			</StyledQuestion>
			<StyledRedirectContainer>
				<StyledImageAndText to={'/login'}>
					<StyledActionText>Sign in</StyledActionText>
					<StyledImgRedirect
						src='/assets/images/common/login.png'
						alt='login'
					/>
					<StyledCheer>
						Don´t let your favorite fluff float away! Log in now and keep your
						dust treasures safe!
					</StyledCheer>
				</StyledImageAndText>
				<StyledImageAndText to={'/register'}>
					<StyledActionText>Register</StyledActionText>
					<StyledImgRedirect src='/assets/images/common/register.jpg' alt='' />
					<StyledCheer>
						Join Dusty Bunny today – because even the finest fluff deserves a
						good home!
					</StyledCheer>
				</StyledImageAndText>
			</StyledRedirectContainer>
		</StyledMain>
	);
};

export default Redirect;
