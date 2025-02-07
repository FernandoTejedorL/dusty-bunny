import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONT_SIZE, FONT_WEIGHT } from '../../styles/fonts';

const StyledMenu = styled.div`
	position: fixed;
	top: 88px;
	left: 0;
	width: 100%;
	background-color: ${COLORS.lightViolet};
	//background-image: url(/assets/images/common/bg-light.jpg);
	background-repeat: no-repeat;
	background-size: cover;
	translate: ${({ $showMenu }) => ($showMenu ? '0' : '+100%')};
	transition: translate 0.3s;
	border-bottom: 5px solid ${COLORS.dark};
	border-radius: 0 0 8px 8px;
`;

const StyledUl = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

const StyledNavLink = styled(NavLink)`
	color: ${COLORS.dark};
	font-weight: ${FONT_WEIGHT.bold};
	font-size: ${FONT_SIZE.m};
	letter-spacing: 0.125rem;
	padding: 1.5625rem;
	border-bottom: 1px solid ${COLORS.dark};

	&.active {
		color: ${COLORS.white};
		-webkit-text-stroke: 1px ${COLORS.white};
	}

	@media (hover: hover) {
		&:hover {
			color: ${COLORS.white};
		}
	}
`;

const StyledButtonsContainer = styled.div`
	display: flex;
	width: 100%;
	padding: 1.5625rem;
	gap: 1.5625rem;
`;

const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 34px;
	border: 1px solid ${COLORS.dark};
	background-color: ${COLORS.lightViolet};
	border-radius: 0.5rem;
	color: ${COLORS.dark};
	font-weight: ${FONT_WEIGHT.bold};
	letter-spacing: 0;
	padding: 1.5625rem;

	@media (hover: hover) {
		&:hover {
			color: ${COLORS.white};
			background-color: ${COLORS.deepViolet};
			border: 1px solid ${COLORS.white};
		}
	}
`;

const StyledLogOutButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 180px;
	height: 34px;
	border: 1px solid ${COLORS.dark};
	background-color: ${COLORS.white};
	border-radius: 0.5rem;
	color: ${COLORS.dark};
	font-weight: ${FONT_WEIGHT.bold};
	letter-spacing: 0;
	padding: 1.5625rem;
	margin: 1.5625rem;
	cursor: pointer;

	@media (hover: hover) {
		&:hover {
			color: ${COLORS.white};
			background-color: ${COLORS.deepViolet};
			border: 1px solid ${COLORS.white};
		}
	}
`;

export {
	StyledMenu,
	StyledUl,
	StyledNavLink,
	StyledButtonsContainer,
	StyledButton,
	StyledLogOutButton
};
