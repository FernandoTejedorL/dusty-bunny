import { StyledElement, StyledTitle } from './tAndCInfo.styles';

const TAndCInfo = ({ item }) => {
	console.log(item);
	return (
		<div>
			<StyledTitle>{item.title}</StyledTitle>
			{item.description.map(element => (
				<StyledElement key={element}>
					<b>· </b>
					{element}
				</StyledElement>
			))}
		</div>
	);
};

export default TAndCInfo;
