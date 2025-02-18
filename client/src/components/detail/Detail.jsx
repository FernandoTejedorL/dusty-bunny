import { StyledDetailTag, StyledEachDetail } from './detail.styles';

const Detail = ({ name, info }) => {
	return (
		<StyledEachDetail>
			<StyledDetailTag>{name}: </StyledDetailTag>
			<span>{info}</span>
		</StyledEachDetail>
	);
};

export default Detail;
