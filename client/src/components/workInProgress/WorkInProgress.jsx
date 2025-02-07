import { StyledWIP, StyledWipImage } from './workInProgress.styles';

const WorkInProgress = () => {
	return (
		<StyledWIP>
			<h2>Work In Progress...</h2>
			<StyledWipImage src='/assets/images/common/working.jpg' alt='' />
		</StyledWIP>
	);
};

export default WorkInProgress;
