const CommentCard = ({ comment, image, name, type }) => {
	return (
		<div>
			<span>{comment}</span>
			<div>
				<img src={image} alt='profile-pic' />
				<div>
					<span>{name}</span>
					<span>{type}</span>
				</div>
			</div>
		</div>
	);
};

export default CommentCard;
