import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledCreditCard = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-bottom: 1rem;
`;

const StyledEachInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

const StyledBottomInputs = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
	gap: 1rem;
`;

const StyledLittleInputContainers = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	width: 40%;
`;

const StyledInput = styled.input`
	padding: 0.2rem;
	border-radius: 0.5rem;
	border: 0.0625rem solid ${COLORS.dark};
`;

const StyledErrorMessage = styled.span`
	font-size: 0.625rem;
	color: ${COLORS.pink};
`;

const StyledButtonsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 100%;
	justify-content: space-between;
	margin-top: 1rem;

	@media screen and (width>=768px) {
		flex-direction: row;
	}
`;

export {
	StyledBottomInputs,
	StyledButtonsContainer,
	StyledCreditCard,
	StyledEachInputContainer,
	StyledErrorMessage,
	StyledInput,
	StyledLittleInputContainers
};
