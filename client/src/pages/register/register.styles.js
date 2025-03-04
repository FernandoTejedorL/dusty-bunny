import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONT_WEIGHT } from '../../styles/fonts';

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding: 1rem;
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
		justify-content: space-between;
		align-items: flex-start;
	}
`;

const StyledImg = styled.img`
	height: 13.75rem;
	width: 13.75rem;
	border-radius: 1rem;
	box-shadow: 0 0.25rem 0.625rem 0.25rem;
`;

const StyledRegisterForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	width: 100%;
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
	border: 0.0625rem solid ${COLORS.dark};
	padding-inline: 0.5rem;
`;

const StyledRadiosContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
`;

const StyledRadioPack = styled.div`
	display: flex;
	width: 100%;
	justify-content: flex-start;
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
		border: 0.0625rem solid ${COLORS.dark};
	}
	&:checked::after {
		content: '🐰';
		position: absolute;
		top: 0.2rem;
		color: ${COLORS.white};
	}
`;

const StyledLabel = styled.label`
	width: 70%;
`;

const StyledTandC = styled.span`
	font-weight: ${FONT_WEIGHT.bold};
	color: ${COLORS.deepViolet};
	text-decoration: underline;
	cursor: pointer;
`;

const StyledRequired = styled.span`
	color: red;
	font-size: 0.8rem;
`;

export {
	StyledCheckbox,
	StyledContainer,
	StyledImg,
	StyledInput,
	StyledInputAndTag,
	StyledLabel,
	StyledMain,
	StyledRadioPack,
	StyledRadiosContainer,
	StyledRegisterForm,
	StyledRequired,
	StyledTandC
};
