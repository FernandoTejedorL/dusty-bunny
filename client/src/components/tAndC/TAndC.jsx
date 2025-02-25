import { TANDC_INFO } from '../../constants/tandc.-info';
import ButtonPrimary from '../buttonPrimary/ButtonPrimary';
import TAndCInfo from '../tAndCInfo/TAndCInfo';
import { StyledTandC } from './tAndC.styles';

const TAndC = ({ setShowModal }) => {
	return (
		<StyledTandC>
			{TANDC_INFO.map(item => (
				<TAndCInfo key={item.id} item={item} />
			))}
			<ButtonPrimary text={'Close'} action={() => setShowModal(false)} />
		</StyledTandC>
	);
};

export default TAndC;
