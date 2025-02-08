import styled from 'styled-components';
import { FONT_SIZE, FONT_WEIGHT } from '../../styles/fonts';

const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	padding: 1.5rem;
	width: 325px;
	box-shadow: 0px 4px 4px;
	border-radius: 0.5rem;
`;

const StyledComment = styled.span`
	font-size: ${FONT_SIZE.m};
	font-weight: ${FONT_WEIGHT.bold};
	letter-spacing: -2%;
	line-height: 120%;
`;

const StyledProfile = styled.div`
	display: flex;
	align-items: center;
	gap: 0.75rem;
`;

const StyledProfilePic = styled.img`
	height: 2.5rem;
	width: 2.5rem;
	border-radius: 50%;
`;

const StyledNameAndRole = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.1875rem;
`;

const StyledName = styled.span`
	font-weight: ${FONT_WEIGHT.bold};
	font-size: ${FONT_SIZE.s};
	opacity: 60%;
`;

const StyledRole = styled.span`
	font-weight: ${FONT_WEIGHT.regular};
	font-size: ${FONT_SIZE.body};
	opacity: 60%;
`;

export {
	StyledCard,
	StyledComment,
	StyledProfile,
	StyledProfilePic,
	StyledNameAndRole,
	StyledName,
	StyledRole
};
