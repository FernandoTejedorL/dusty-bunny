import styled from 'styled-components';
import { FONT_FAMILY, FONT_SIZE } from '../../styles/fonts';
import { COLORS } from '../../styles/colors';

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2.4375rem;
	gap: 2.4375rem;
`;

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2.4375rem;
	gap: 2.4375rem;

	@media screen and (width>=768px) {
		width: 80%;
		flex-direction: row;
		align-items: flex-start;
	}
`;

const StyledHeader = styled.h2`
	font-family: ${FONT_FAMILY.chewy};
	font-size: ${FONT_SIZE.header};
	line-height: 120%;
	text-align: center;
`;

const StyledImg = styled.img`
	height: 13.75rem;
	width: 13.75rem;
	border-radius: 1rem;
	box-shadow: 0 4px 10px 4px;
`;

const StyledRegisterForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	width: 90%;
`;

const StyledInputAndTag = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

const StyledInput = styled.input`
	display: flex;
	align-items: center;
	height: 2.5rem;
	border-radius: 0.5rem;
	border: 1px solid ${COLORS.dark};
	padding-inline: 0.5rem;
`;

const StyledRadiosContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
`;

const StyledRadioPack = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	gap: 1rem;
`;

const StyledCheckbox = styled.input`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	accent-color: ${COLORS.lightViolet};
	width: 1.5rem;
	height: 1.5rem;
	border: 0.0625rem solid ${COLORS.dark};
	border-radius: 0;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;

	&:checked {
		background-color: ${COLORS.white};
		border: 1px solid ${COLORS.dark};
	}
	&:checked::after {
		content: '🐰';
		position: absolute;
		top: 0.2rem;
		color: ${COLORS.white};
	}
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

const StyledRequired = styled.span`
	color: red;
	font-size: 0.8rem;
`;

export {
	StyledMain,
	StyledContainer,
	StyledHeader,
	StyledImg,
	StyledRegisterForm,
	StyledInputAndTag,
	StyledInput,
	StyledRadiosContainer,
	StyledRadioPack,
	StyledCheckbox,
	StyledButton,
	StyledRequired
};
