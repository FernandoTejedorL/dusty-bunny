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
import { updateQueryStatus } from '../../utils/api';

const EachQuerie = ({ item }) => {
	const [showDetails, setShowDetails] = useState(false);
	const read = item.read;
	const id = item._id;

	return (
		<StyledEachQuery $showDetails={showDetails} $read={read}>
			<StyledQueryTile onClick={() => setShowDetails(true)}>
				<span>{item.date}</span>
				<StyledSubTile>
					<span>{item.type.toUpperCase()}</span>
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
							action={() => setShowDetails(false)}
						/>
						<ButtonPrimary
							text={'Close as read'}
							action={() => readMessage(id, setShowDetails)}
						/>
					</StyledButtonsContainer>
				</>
			)}
		</StyledEachQuery>
	);
};

const readMessage = async (id, setShowDetails) => {
	try {
		const newInfo = {
			read: true
		};
		await updateQueryStatus(id, newInfo);
		setShowDetails(true);
	} catch (error) {
		console.log(error);
	}
};

export default EachQuerie;
