import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledOrderContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	width: 100%;
	height: 100%;
	border-radius: 1rem;
	box-shadow: 0 0 10px 4px ${COLORS.deepViolet};
`;

const StyledContentImage = styled.img`
	height: 100px;
	width: 100px;
	border-radius: 1rem;
`;

const StyledOrderCOntentInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 2rem;
	height: 100%;
	width: 100%;
`;

export { StyledOrderContent, StyledContentImage, StyledOrderCOntentInfo };
