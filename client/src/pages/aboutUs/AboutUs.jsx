import AboutUsCard from '../../components/aboutUsCard/AboutUsCard';
import PageHeader from '../../components/pageHeader/PageHeader';
import { STAFF_INFO } from '../../constants/staff-info';

const AboutUs = () => {
	return (
		<>
			<PageHeader text={'About Us'} />
			{STAFF_INFO.map(item => (
				<AboutUsCard key={item.id} item={item} />
			))}
		</>
	);
};

export default AboutUs;
