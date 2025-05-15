import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONT_SIZE, FONT_WEIGHT } from '../../styles/fonts';

const StyledMenu = styled.div`
	position: fixed;
	top: 4.75rem;
	left: 0;
	width: 100%;
	background-color: ${COLORS.lightViolet};
	translate: ${({ $showMenu }) => ($showMenu ? '0' : '+100%')};
	transition: translate 0.3s;
	border-bottom: 0.3125rem solid ${COLORS.dark};
	border-radius: 0 0 0.5rem 0.5rem;
	z-index: 10;
	height: 100vh;
	overflow-y: auto;

	@media screen and (width>=1024px) {
		position: relative;
		background-color: transparent;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		translate: 0;
		top: 0;
		border-bottom: none;
		height: 4rem;
		max-width: 70%;
	}
`;

const StyledUl = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	@media screen and (width>=1024px) {
		flex-direction: row;
		align-items: center;
		gap: 2rem;
		text-align: center;
		margin-left: auto;
		width: 100%;
		justify-content: flex-end;
	}
`;

const StyledNavLink = styled(NavLink)`
	color: ${COLORS.dark};
	font-weight: ${FONT_WEIGHT.bold};
	font-size: ${FONT_SIZE.m};
	letter-spacing: 0.125rem;
	padding: 1.5625rem;
	border-bottom: 0.0625rem solid ${COLORS.dark};

	&.active {
		color: ${COLORS.white};
	}

	@media screen and (width>=1024px) {
		padding: 0;
		border-bottom: none;
		letter-spacing: 0;
		font-size: ${FONT_SIZE.s};

		&.active {
			color: ${COLORS.deepViolet};
		}
	}

	@media (hover: hover) {
		&:hover {
			color: ${COLORS.white};
		}

		@media screen and (width>=1024px) {
			&:hover {
				color: ${COLORS.deepViolet};
			}
		}
	}
`;

const StyledButtonsContainer = styled.div`
	display: flex;
	align-items: center;
	max-width: 100%;
	padding: 1.5625rem;
	gap: 1.5625rem;
`;

export { StyledButtonsContainer, StyledMenu, StyledNavLink, StyledUl };
