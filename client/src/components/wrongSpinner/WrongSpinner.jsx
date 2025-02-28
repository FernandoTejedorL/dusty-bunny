import ButtonPrimary from '../buttonPrimary/ButtonPrimary';
import {
	StyledSpinner,
	StyledSpinnerImage,
	StyledSpinnerText
} from './wrongSpinner.styles';

const WrongSpinner = ({ mailOK, setMailOk }) => {
	if (!mailOK) return;
	return (
		<StyledSpinner>
			<StyledSpinnerImage
				src='/assets/images/common/spinner.png'
				alt='loading'
			/>
			<StyledSpinnerText>Not a valid email</StyledSpinnerText>
			<ButtonPrimary text={'Try again'} action={() => setMailOk(true)} />
		</StyledSpinner>
	);
};

export default WrongSpinner;
