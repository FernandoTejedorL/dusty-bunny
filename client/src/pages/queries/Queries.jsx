import { useEffect, useState } from 'react';
import EachQuerie from '../../components/eachQuerie/EachQuerie';
import PageHeader from '../../components/pageHeader/PageHeader';
import { findAllQueries } from '../../utils/api';
import { StyledAllComp, StyledMain } from './queries.styles';

const Queries = () => {
	const [queries, setQueries] = useState([]);

	useEffect(() => {
		findQueries(setQueries);
	}, []);

	if (!queries) return <h2>Loading...</h2>;

	return (
		<StyledMain>
			<PageHeader text={'My Messages'} />
			<StyledAllComp>
				{queries.map(item => (
					<EachQuerie setQueries={setQueries} key={item._id} item={item} />
				))}
			</StyledAllComp>
		</StyledMain>
	);
};

const findQueries = async setQueries => {
	const allQueries = await findAllQueries();
	const orderedQueries = allQueries.sort((a, b) => {
		const dateA = new Date(a.date.split('/').reverse().join('-'));
		const dateB = new Date(b.date.split('/').reverse().join('-'));
		return dateB - dateA;
	});

	setQueries(orderedQueries);
};

export default Queries;
