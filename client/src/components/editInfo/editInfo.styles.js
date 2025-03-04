import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONT_FAMILY, FONT_SIZE } from '../../styles/fonts';

const StyledEditInfo = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 2rem;
	padding: 1rem;
	border: 0.0625rem solid ${COLORS.dark};
	border-radius: 1rem;
`;

const StyledEachDetail = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

const StyledDetailTag = styled.label`
	font-family: ${FONT_FAMILY.chewy};
	font-size: ${FONT_SIZE.m};
`;

const StyledTextArea = styled.textarea`
	width: 100%;
	height: 100px;
	padding: 0.8rem;
	color: ${COLORS.deepViolet};
	border-radius: 1rem;
	border: 0.0625rem solid ${COLORS.dark};
`;

const StyledSelect = styled.select`
	padding: 0.5rem;
	color: ${COLORS.deepViolet};
	border-radius: 1rem;
	border: 0.0625rem solid ${COLORS.dark};
`;

export {
	StyledDetailTag,
	StyledEachDetail,
	StyledEditInfo,
	StyledSelect,
	StyledTextArea
};
