import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledCreditCard = styled.div`
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

export {
	StyledCreditCard,
	StyledEachInputContainer,
	StyledBottomInputs,
	StyledLittleInputContainers,
	StyledInput
};
