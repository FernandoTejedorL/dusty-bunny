import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledDynamicCard = styled.div`
	display: none;

	@media screen and (width>=1024px) {
		display: flex;
		flex-direction: column;
		position: absolute;
		left: 5vw;
		top: 30%;
		width: 300px;
		height: 200px;
		border: 0.0625rem solid ${COLORS.dark};
		border-radius: 1rem;
		padding: 1rem;
	}
`;

const StyledBankLogo = styled.img`
	height: 50px;
	width: 50px;
`;

export { StyledDynamicCard, StyledBankLogo };
