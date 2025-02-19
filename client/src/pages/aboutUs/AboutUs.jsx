import AboutUsCard from '../../components/aboutUsCard/AboutUsCard';
import PageHeader from '../../components/pageHeader/PageHeader';
import { STAFF_INFO } from '../../constants/staff-info';
import { StyledMain } from './aboutUs.styles';

const AboutUs = () => {
	return (
		<>
			<PageHeader text={'About Us'} />
			<StyledMain>
				<div>
					{STAFF_INFO.map(item => (
						<AboutUsCard key={item.id} item={item} />
					))}
				</div>
			</StyledMain>
		</>
	);
};

export default AboutUs;
