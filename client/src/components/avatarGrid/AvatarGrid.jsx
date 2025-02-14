import { AVATARS_INFO } from '../../constants/avatars-info';
import {
	StyledAvatar,
	StyledAvatarComponent,
	StyledAvatarGrid
} from './AvatarGrid.Styles';

const AvatarGrid = () => {
	return (
		<StyledAvatarComponent>
			<h3>Select an avatar!</h3>
			<StyledAvatarGrid>
				{AVATARS_INFO.map(item => (
					<StyledAvatar
						$image={item.image}
						key={item.image}
						type='radio'
						name='avatar'
						id={item.image}
						value={item.image}
					/>
				))}
			</StyledAvatarGrid>
		</StyledAvatarComponent>
	);
};

export default AvatarGrid;
