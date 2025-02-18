import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONT_FAMILY, FONT_SIZE } from '../../styles/fonts';

const StyledOrderContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	width: 100%;
	height: 100%;
	border-radius: 1rem;
	box-shadow: 0 0 10px 4px ${COLORS.deepViolet};
	cursor: pointer;
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

const StyledOrderContentTag = styled.span`
	font-family: ${FONT_FAMILY.chewy};
	font-size: ${FONT_SIZE.m};
`;

export {
	StyledOrderContent,
	StyledContentImage,
	StyledOrderCOntentInfo,
	StyledOrderContentTag
};
