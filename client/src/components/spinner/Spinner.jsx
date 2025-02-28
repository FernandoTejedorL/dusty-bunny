import {
	StyledSpinner,
	StyledSpinnerImage,
	StyledSpinnerText
} from './spinner.styles';

const Spinner = ({ completed }) => {
	if (!completed) return;
	return (
		<StyledSpinner>
			<StyledSpinnerImage
				src='/assets/images/common/spinner.png'
				alt='loading'
			/>
			<StyledSpinnerText>Loading...</StyledSpinnerText>
		</StyledSpinner>
	);
};

export default Spinner;
