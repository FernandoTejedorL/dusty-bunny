import Logo from '../logo/Logo';

import {
	StyledDynamicCard,
	StyledInfoContainer,
	StyledInput
} from './dynamicCard.styles';

const DynamicCard = ({ nameValues, numberValues, dateValues }) => {
	return (
		<StyledDynamicCard>
			<Logo />
			<StyledInfoContainer>
				<span>Name & Surname</span>
				{!nameValues && <StyledInput>Fluffy Duster</StyledInput>}
				{nameValues && <StyledInput $on={true}>{nameValues}</StyledInput>}
			</StyledInfoContainer>
			<StyledInfoContainer>
				{!numberValues && (
					<StyledInput $align={true}>0000 0000 0000 0000</StyledInput>
				)}
				{numberValues && (
					<StyledInput $on={true} $align={true}>
						{numberValues}
					</StyledInput>
				)}
			</StyledInfoContainer>
			<StyledInfoContainer>
				<span>Exp. Date</span>
				{!dateValues && <StyledInput>MM/YY</StyledInput>}
				{dateValues && <StyledInput $on={true}>{dateValues}</StyledInput>}
			</StyledInfoContainer>
		</StyledDynamicCard>
	);
};

export default DynamicCard;
