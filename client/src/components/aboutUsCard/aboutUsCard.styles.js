import styled from 'styled-components';

const StyledCard = styled.div`
	display: flex;
	width: 90%;
`;

const StyledPersona = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
	text-align: center;
`;

const StyledCV = styled.div`
	display: flex;
	flex-direction: column;
`;

const StyledImage = styled.img`
	width: 6.25rem;
	height: 6.25rem;
	border-radius: 1rem;
`;
export { StyledCard, StyledPersona, StyledCV, StyledImage };
