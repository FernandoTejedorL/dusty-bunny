import {
	StyledAvatar,
	StyledAvatarComponent,
	StyledAvatarGrid,
	StyledRequired
} from './AvatarGrid.Styles';

import { AVATARS_INFO } from '../../constants/avatars-info';

const AvatarGrid = ({ register, error, required, action }) => {
	return (
		<StyledAvatarComponent>
			<h3>Select an avatar!</h3>
			<StyledAvatarGrid>
				{AVATARS_INFO.map(item => (
					<StyledAvatar
						$image={item.image}
						key={item.image}
						type='radio'
						id={item.image}
						value={item.image}
						onClick={() => action(item.image)}
						{...register('avatar', { required })}
					/>
				))}
			</StyledAvatarGrid>
			{error && <StyledRequired>{error.message}</StyledRequired>}
		</StyledAvatarComponent>
	);
};

export default AvatarGrid;
