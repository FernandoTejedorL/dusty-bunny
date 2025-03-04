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

const StyledSubmit = styled.input`
	display: flex;
	align-items: center;
	justify-content: center;
	align-self: center;
	width: 70%;
	height: 2.5rem;
	background-color: ${COLORS.lightViolet};
	border-radius: 0.5rem;
	border: 1px solid ${COLORS.dark};
	color: ${COLORS.dark};
	padding-inline: 0.5rem;
	cursor: pointer;

	@media (hover: hover) {
		&:hover {
			background-color: ${COLORS.deepViolet};
			color: ${COLORS.white};
			border: 0.0625rem solid ${COLORS.white};
		}
	}
`;

export {
	StyledDetailTag,
	StyledEachDetail,
	StyledEditInfo,
	StyledSelect,
	StyledSubmit,
	StyledTextArea
};
