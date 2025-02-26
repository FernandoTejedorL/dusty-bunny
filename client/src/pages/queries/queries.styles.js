import styled from 'styled-components';

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-block: 2rem;
`;

const StyledAllComp = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;

	@media screen and (width>=1024px) {
		flex-direction: row;
		align-items: start;
		justify-content: center;
		flex-wrap: wrap;
	}
`;

export { StyledMain, StyledAllComp };
