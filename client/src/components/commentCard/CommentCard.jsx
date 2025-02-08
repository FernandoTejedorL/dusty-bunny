import {
	StyledCard,
	StyledComment,
	StyledName,
	StyledNameAndRole,
	StyledProfile,
	StyledProfilePic,
	StyledRole
} from './commentCard.styles';

const CommentCard = ({ comment, image, name, type }) => {
	return (
		<StyledCard>
			<StyledComment>{comment}</StyledComment>
			<StyledProfile>
				<StyledProfilePic src={image} alt='profile-pic' />
				<StyledNameAndRole>
					<StyledName>{name}</StyledName>
					<StyledRole>{type}</StyledRole>
				</StyledNameAndRole>
			</StyledProfile>
		</StyledCard>
	);
};

export default CommentCard;
