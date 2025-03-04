import { StyledButton } from './buttonSecondary.styles';

const ButtonSecondary = ({ text, action }) => {
	return <StyledButton onClick={action}>{text}</StyledButton>;
};

export default ButtonSecondary;
