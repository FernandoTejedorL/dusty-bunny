import styled from 'styled-components';
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
	}
`;

const StyledImg = styled.img`
	height: 13.75rem;
	width: 13.75rem;
	border-radius: 1rem;
	box-shadow: 0 0.25rem 0.625rem 0.25rem;
`;

const StyledForm = styled.form`
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
	border: 0.0625rem solid ${COLORS.dark};
	padding-inline: 0.5rem;
`;

const StyledButton = styled.input`
	display: flex;
	align-items: center;
	height: 2.5rem;
	background-color: ${COLORS.lightViolet};
	border-radius: 0.5rem;
	border: 0.0625rem solid ${COLORS.dark};
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
	StyledContainer,
	StyledImg,
	StyledForm,
	StyledInputAndTag,
	StyledInput,
	StyledButton
};
