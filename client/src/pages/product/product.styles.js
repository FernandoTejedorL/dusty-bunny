import styled from 'styled-components';
import { FONT_FAMILY, FONT_SIZE } from '../../styles/fonts';

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	margin-top: 2rem;
`;

const StyledName = styled.h2`
	font-family: ${FONT_FAMILY.chewy};
	font-size: ${FONT_SIZE.header};
	line-height: 120%;
	text-align: center;
`;

const StyledProductContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	margin-top: 2rem;
`;

const StyledImagesContainer = styled.div`
	display: flex;
	position: relative;
`;

const StyledImage = styled.img`
	height: 300px;
	width: 300px;
	border-radius: 1rem;
`;

const StyledFavIcon = styled.img`
	position: absolute;
	left: 20px;
	top: 20px;
	height: 48px;
	width: 48px;
`;

export {
	StyledMain,
	StyledName,
	StyledProductContainer,
	StyledImagesContainer,
	StyledImage,
	StyledFavIcon
};
