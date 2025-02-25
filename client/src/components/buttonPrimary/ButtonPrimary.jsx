import { StyledButton } from './buttonPrimary.styles';

const ButtonPrimary = ({ text, action }) => {
	return <StyledButton onClick={action}>{text}</StyledButton>;
};

export default ButtonPrimary;
