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
	border: 1px solid ${COLORS.dark};
`;

const StyledErrorMessage = styled.span`
	font-size: 10px;
	color: ${COLORS.pink};
`;

const StyledButtonsContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	margin-top: 1rem;
`;

const StyledButtonInput = styled.input`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40%;
	background-color: ${COLORS.lightViolet};
	border: 1px solid ${COLORS.dark};
	border-radius: 0.5rem;
	padding: 0.5rem;
	cursor: pointer;

	@media (hover: hover) {
		&:hover {
			background-color: ${COLORS.deepViolet};
			border: 0.0625rem solid ${COLORS.white};
			color: ${COLORS.white};
		}
	}
`;

const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40%;
	background-color: ${COLORS.lightViolet};
	border: 1px solid ${COLORS.dark};
	border-radius: 0.5rem;
	padding: 0.5rem;
	cursor: pointer;

	@media (hover: hover) {
		&:hover {
			background-color: ${COLORS.deepViolet};
			border: 0.0625rem solid ${COLORS.white};
			color: ${COLORS.white};
		}
	}
`;

export {
	StyledCreditCard,
	StyledEachInputContainer,
	StyledBottomInputs,
	StyledLittleInputContainers,
	StyledInput,
	StyledErrorMessage,
	StyledButtonsContainer,
	StyledButtonInput,
	StyledButton
};
