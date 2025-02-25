import { StyledBankLogo, StyledDynamicCard } from './dynamicCard';

const DynamicCard = ({ nameValues, numberValues, dateValues }) => {
	return (
		<StyledDynamicCard>
			<StyledBankLogo src='/assets/images/common/creditcard.png' alt='' />
			<div>
				<span>Cardholder Name</span>
				<span>{nameValues}</span>
			</div>
			<div>
				<span>{numberValues}</span>
			</div>
			<div>
				<div>
					<span>Exp. Date</span>
					<span>{dateValues}</span>
				</div>
			</div>
		</StyledDynamicCard>
	);
};

export default DynamicCard;
