import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledAvatarComponent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
`;

const StyledAvatarGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 1rem;
`;

const StyledAvatar = styled.input`
	appearance: none;
	-webkit-appearance: none;
	-moz-appearance: none;
	width: 3.4375rem;
	height: 3.4375rem;
	background-image: url(${props => props.$image});
	background-size: cover;
	background-position: center;
	border: none;
	border-radius: 0;
	cursor: pointer;

	&:checked {
		box-shadow: 0 0 0.625rem 0.25rem ${COLORS.deepViolet};
		border-color: #000;
	}

	@media screen and (width>=768px) {
		width: 5rem;
		height: 5rem;
	}

	@media screen and (width>=768px) {
		width: 6.25rem;
		height: 6.25rem;
	}
`;

const StyledRequired = styled.span`
	color: red;
	font-size: 0.8rem;
`;

export {
	StyledAvatar,
	StyledAvatarComponent,
	StyledAvatarGrid,
	StyledRequired
};
