import styled from 'styled-components';

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem;
	gap: 2rem;
`;

const StyledCardsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;

	@media screen and (width>=1024px) {
		flex-direction: row;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
	}
`;

export { StyledMain, StyledCardsContainer };
