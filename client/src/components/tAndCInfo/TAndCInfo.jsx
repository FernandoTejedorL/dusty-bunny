import {
	StyledElement,
	StyledTandCContainer,
	StyledTitle
} from './tAndCInfo.styles';

const TAndCInfo = ({ item }) => {
	return (
		<StyledTandCContainer>
			<StyledTitle>{item.title}</StyledTitle>
			{item.description.map(element => (
				<StyledElement key={element}>
					<b>· </b>
					{element}
				</StyledElement>
			))}
		</StyledTandCContainer>
	);
};

export default TAndCInfo;
