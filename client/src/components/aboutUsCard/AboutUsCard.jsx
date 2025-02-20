import {
	StyledCard,
	StyledCV,
	StyledImage,
	StyledPersona,
	StyledQuote,
	StyledRole
} from './aboutUsCard.styles';

const AboutUsCard = ({ item }) => {
	return (
		<StyledCard>
			<StyledPersona>
				<StyledImage src={item.image} alt='image' />
				<StyledRole>{item.role}</StyledRole>
				<StyledQuote>&quot;{item.catchphrase}&quot;</StyledQuote>
			</StyledPersona>
			<StyledCV>
				<StyledRole>{item.name}</StyledRole>
				<span>{item.subrole}</span>
				<p>{item.career}</p>
			</StyledCV>
		</StyledCard>
	);
};

export default AboutUsCard;
