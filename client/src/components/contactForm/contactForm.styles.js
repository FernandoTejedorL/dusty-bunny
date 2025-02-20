import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	align-items: center;
	width: 90%;
`;

const StyledSelect = styled.select`
	text-align: center;
	width: 75%;
	padding: 0.5rem;
	border-radius: 0.5rem;
	box-shadow: ${({ $shadow }) =>
		$shadow ? `0 0 0.625rem 0.25rem ${COLORS.deepViolet}` : 'none'};
`;

const StyledInput = styled.input`
	text-align: center;
	width: 75%;
	padding: 0.5rem;
	border-radius: 0.5rem;
	border: 0.0625rem solid ${COLORS.deepViolet};
`;

const StyledBottomForm = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	gap: 1rem;
	align-items: center;
	margin-block: 1rem;
	width: 100%;
`;

const StyledTextInput = styled.textarea`
	resize: none;
	width: 90%;
	height: 12.5rem;
	padding: 0.5rem;
	border-radius: 0.5rem;
	border: 0.0625rem solid ${COLORS.deepViolet};
`;

const StyledSubmit = styled.input`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 70%;
	background-color: ${COLORS.lightViolet};
	border: 0.0625rem solid ${COLORS.dark};
	border-radius: 0.5rem;
	padding: 0.5rem;
	cursor: pointer;

	@media screen and (width>=1024px) {
		width: 80%;
	}

	@media (hover: hover) {
		&:hover {
			background-color: ${COLORS.deepViolet};
			border: 0.0625rem solid ${COLORS.white};
			color: ${COLORS.white};
		}
	}
`;

const StyledRequired = styled.span`
	color: red;
	font-size: 0.8rem;
`;

export {
	StyledForm,
	StyledSelect,
	StyledInput,
	StyledBottomForm,
	StyledTextInput,
	StyledSubmit,
	StyledRequired
};
