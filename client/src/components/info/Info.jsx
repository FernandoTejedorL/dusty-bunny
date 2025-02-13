import Detail from '../detail/Detail';

const names = ['Category', 'Size', 'Diet', 'Price', 'Description'];

const Info = ({ product }) => {
	return (
		<div>
			{names.map(name => (
				<Detail key={name} name={name} info={product[name.toLowerCase()]} />
			))}
		</div>
	);
};

export default Info;
