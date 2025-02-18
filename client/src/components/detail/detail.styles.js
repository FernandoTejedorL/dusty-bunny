import styled from 'styled-components';
import { FONT_FAMILY, FONT_SIZE } from '../../styles/fonts';

const StyledEachDetail = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

const StyledDetailTag = styled.span`
	font-family: ${FONT_FAMILY.chewy};
	font-size: ${FONT_SIZE.m};
`;

export { StyledEachDetail, StyledDetailTag };
