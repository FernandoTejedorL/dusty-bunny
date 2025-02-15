import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	padding: 1rem;
	border: 1px solid ${COLORS.dark};
	border-radius: 1rem;
`;

export { StyledInfoContainer };
