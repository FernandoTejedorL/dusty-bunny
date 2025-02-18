import styled from 'styled-components';
import { FONT_WEIGHT } from '../../styles/fonts';

const StyledFilterContainer = styled.div`
	display: flex;
	width: 90%;
	justify-content: space-between;
	font-weight: ${FONT_WEIGHT.regular};

	@media screen and (width>=1024px) {
		width: 100%;
		gap: 1rem;
	}
`;

const StyledEachInput = styled.div`
	display: flex;
	gap: 1rem;
`;

export { StyledFilterContainer, StyledEachInput };
