import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONT_FAMILY, FONT_SIZE } from '../../styles/fonts';

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem;
	gap: 2rem;
`;

const StyledContactImage = styled.img`
	width: 15.625rem;
	height: 15.625rem;
	border-radius: 1rem;
`;

const StylefFormContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	align-items: center;
	width: 90%;

	@media screen and (width>=1024px) {
		flex-direction: row;
		align-items: flex-start;
	}
`;

const StyledTopForm = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	align-items: center;
	width: 100%;
`;
const StyledBotForm = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	align-items: center;
	width: 100%;
`;

const StyledCatchphrase = styled.p`
	font-family: ${FONT_FAMILY.pacifico};
	font-size: ${FONT_SIZE.m};
	line-height: 150%;
	text-align: center;
`;

const StyledSelect = styled.select`
	text-align: center;
	width: 65%;
	padding: 0.5rem;
	border-radius: 0.5rem;
	box-shadow: ${({ $shadow }) =>
		$shadow ? `0 0 0.625rem 0.25rem ${COLORS.deepViolet}` : 'none'};
`;

const StyledSuccessful = styled.div`
	position: absolute;
	text-align: center;
	top: 12.5rem;
	width: 70%;
	padding: 3rem;
	background-color: ${COLORS.lightViolet};
	font-family: ${FONT_FAMILY.pacifico};
	font-size: ${FONT_SIZE.m};
	line-height: 160%;
	border-radius: 1rem;
	box-shadow: 0 0 0.625rem 0.25rem ${COLORS.deepViolet};
`;

const StyledSuccessfullClose = styled.img`
	position: absolute;
	top: 0.9375rem;
	right: 0.9375rem;
	height: 1rem;
	width: 1rem;
	cursor: pointer;
`;

export {
	StyledBotForm,
	StyledCatchphrase,
	StyledContactImage,
	StyledMain,
	StyledSelect,
	StyledSuccessful,
	StyledSuccessfullClose,
	StyledTopForm,
	StylefFormContainer
};
