import styled from 'styled-components';
import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from '../../styles/fonts';
import { COLORS } from '../../styles/colors';

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem;
	gap: 2rem;
`;

const StyledHeader = styled.h2`
	font-family: ${FONT_FAMILY.chewy};
	font-size: ${FONT_SIZE.header};
	line-height: 120%;
	text-align: center;
`;

const StyledUserContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding: 2.4375rem;
	gap: 2.4375rem;

	@media screen and (width>=768px) {
		width: 80%;
		flex-direction: row;
		align-items: flex-start;
	}
`;

const StyledAvatar = styled.img`
	width: 220px;
	height: 220px;
	border-radius: 1rem;
	box-shadow: 0 0 10px 4px ${COLORS.deepViolet};
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	align-items: center;
	width: 100%;
`;

const StyledInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	width: 100%;
	height: 40px;
`;

const StyledLabel = styled.label`
	font-weight: ${FONT_WEIGHT.bold};
`;

const StyledInput = styled.input`
	border: 1px solid ${COLORS.lightViolet};
	color: ${COLORS.pink};
	border-radius: 0.5rem;
	width: 100%;
`;

const StyledConfirmCancel = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

const StyledButton = styled.input`
	display: flex;
	align-items: center;
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
			border: 1px solid ${COLORS.white};
		}
	}
`;

const StyledEditButton = styled.button`
	display: flex;
	align-items: center;
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
			border: 1px solid ${COLORS.white};
		}
	}
`;

export {
	StyledMain,
	StyledHeader,
	StyledUserContainer,
	StyledAvatar,
	StyledForm,
	StyledInputContainer,
	StyledLabel,
	StyledInput,
	StyledConfirmCancel,
	StyledButton,
	StyledEditButton
};
