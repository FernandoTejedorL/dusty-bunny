import {
	StyledCard,
	StyledCV,
	StyledImage,
	StyledPersona,
	StyledRole
} from './aboutUsCard.styles';

const AboutUsCard = ({ item }) => {
	return (
		<StyledCard>
			<StyledPersona>
				<StyledImage src={item.image} alt='image' />
				<StyledRole>{item.role}</StyledRole>
				<span>"{item.catchphrase}"</span>
			</StyledPersona>
			<StyledCV>
				<span>{item.name}</span>
				<span>{item.subrole}</span>
				<p>{item.career}</p>
			</StyledCV>
		</StyledCard>
	);
};

export default AboutUsCard;
