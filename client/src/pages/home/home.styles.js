import styled from 'styled-components';
import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from '../../styles/fonts';
import { COLORS } from '../../styles/colors';

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StyledBanner = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	align-items: center;
	width: 100%;
	height: auto;
	padding: 2.9375rem;
	font-family: ${FONT_FAMILY.pacifico};
	font-size: ${FONT_SIZE.m};
	font-weight: ${FONT_WEIGHT.regular};
	line-height: 160%;
	text-align: center;
	background-image: url(/assets/images/common/banner.jpg);
	background-repeat: no-repeat;
	background-size: cover;
`;

const StyledBrand = styled.h2`
	font-family: ${FONT_FAMILY.chewy};
	font-size: 3.75rem;
	-webkit-text-stroke: 0.0625rem ${COLORS.white};
	text-shadow: 0 0.25rem 0.25rem;
	white-space: nowrap;
`;

const StyledHookStart = styled.span`
	font-size: ${FONT_SIZE.m};
	align-self: flex-start;
	margin-left: 1rem;
`;

const StyledHookEnd = styled.span`
	font-size: ${FONT_SIZE.m};
	align-self: flex-end;
`;

const StyledCarouselContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2.4375rem;
	padding-block: 2.4375rem;
`;

const StyledOpinions = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 90%;
	gap: 2.4375rem;
`;

const StyledOpinionsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2.4375rem;
	margin-bottom: 2.4375rem;

	@media screen and (width>=1024px) {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	}
`;

export {
	StyledMain,
	StyledBanner,
	StyledBrand,
	StyledHookStart,
	StyledHookEnd,
	StyledCarouselContainer,
	StyledOpinions,
	StyledOpinionsContainer
};
