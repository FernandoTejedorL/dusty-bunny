import { useState } from 'react';
import {
	StyledButtonsContainer,
	StyledEachQuery,
	StyledQueryDetails,
	StyledQueryTag,
	StyledQueryTile,
	StyledSubTile
} from './eachQuerie.styles';
import ButtonPrimary from '../buttonPrimary/ButtonPrimary';
import { findAllQueries, updateQueryStatus } from '../../utils/api';

const EachQuerie = ({ item, setQueries }) => {
	const [showDetails, setShowDetails] = useState(false);
	const read = item.read;
	const id = item._id;

	return (
		<StyledEachQuery $showDetails={showDetails} $read={read}>
			<StyledQueryTile onClick={() => setShowDetails(true)}>
				<span>{item.date}</span>
				<StyledSubTile>
					<span>{item.type.toUpperCase()} :</span>
					<span>{item.topic.toUpperCase()}</span>
				</StyledSubTile>
			</StyledQueryTile>
			{showDetails && (
				<>
					<StyledQueryDetails>
						<StyledQueryTag>Name:</StyledQueryTag>
						<span>{item.name}</span>
						<StyledQueryTag>Surname:</StyledQueryTag>
						<span>{item.email}</span>
						<StyledQueryTag>Message:</StyledQueryTag>
						<p>{item.description}</p>
					</StyledQueryDetails>
					<StyledButtonsContainer>
						<ButtonPrimary
							text={'Mark as unread'}
							action={() => unreadMessage(id, setShowDetails, setQueries)}
						/>
						<ButtonPrimary
							text={'Close as read'}
							action={() => readMessage(id, setShowDetails, setQueries)}
						/>
					</StyledButtonsContainer>
				</>
			)}
		</StyledEachQuery>
	);
};

const readMessage = async (id, setShowDetails, setQueries) => {
	try {
		const newInfo = {
			read: true
		};
		await updateQueryStatus(id, newInfo);
		await findQueries(setQueries);
		setShowDetails(false);
	} catch (error) {
		console.log(error);
	}
};

const unreadMessage = async (id, setShowDetails, setQueries) => {
	try {
		const newInfo = {
			read: false
		};
		await updateQueryStatus(id, newInfo);
		await findQueries(setQueries);
		setShowDetails(false);
	} catch (error) {
		console.log(error);
	}
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

export default EachQuerie;
