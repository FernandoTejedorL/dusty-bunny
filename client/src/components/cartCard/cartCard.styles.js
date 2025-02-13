import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONT_SIZE } from '../../styles/fonts';

const StyledCartCard = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-align: right;
	padding: 1rem;
	margin: 0.5rem;
	width: 90%;
	height: 90px;
	border: 1px solid ${COLORS.dark};
	border-radius: 1rem;
`;

const StyledCartImage = styled.img`
	height: 70px;
	width: 70px;
	border-radius: 0.5rem;

	@media screen and (width>=1024px) {
		height: 50px;
		width: 50px;
	}
`;

const StyledCartElementInfo = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	flex-direction: column;
	justify-content: space-between;

	@media screen and (width>=768px) {
		flex-direction: row;
		align-items: center;
		width: 60%;
	}

	@media screen and (width>=1024px) {
		flex-direction: column;
		font-size: ${FONT_SIZE.body};
		align-items: flex-end;
	}
`;

export { StyledCartCard, StyledCartImage, StyledCartElementInfo };
