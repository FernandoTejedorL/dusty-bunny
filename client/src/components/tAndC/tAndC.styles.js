import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledTandC = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	width: 90vw;
	height: 90vh;
	padding: 1rem;
	background-color: ${COLORS.white};
	border-radius: 1rem;
	border: 0.0625rem solid ${COLORS.dark};
	overflow-y: auto;

	@media screen and (width>=1024px) {
		padding: 2rem;
	}
`;

export { StyledTandC };
