import Detail from '../detail/Detail';
import { StyledInfoContainer } from './info.styles';

const names = ['Description', 'Category', 'Size', 'Diet', 'Price'];

const Info = ({ product }) => {
	return (
		<StyledInfoContainer>
			{names.map(name => (
				<Detail key={name} name={name} info={product[name.toLowerCase()]} />
			))}
		</StyledInfoContainer>
	);
};

export default Info;
