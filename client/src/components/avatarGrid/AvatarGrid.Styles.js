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
	width: 55px;
	height: 55px;
	background-image: url(${props => props.$image});
	background-size: cover;
	background-position: center;
	border: none;
	border-radius: 0;
	cursor: pointer;

	&:checked {
		box-shadow: 0 0 10px 4px ${COLORS.deepViolet};
		border-color: #000;
	}
`;

export { StyledAvatarComponent, StyledAvatarGrid, StyledAvatar };
