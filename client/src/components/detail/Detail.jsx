import { StyledEachDetail } from './detail.styles';

const Detail = ({ name, info }) => {
	return (
		<StyledEachDetail>
			<span>{name}: </span>
			<span>{info}</span>
		</StyledEachDetail>
	);
};

export default Detail;
