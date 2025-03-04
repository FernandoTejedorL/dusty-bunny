import AboutUsCard from '../../components/aboutUsCard/AboutUsCard';
import PageHeader from '../../components/pageHeader/PageHeader';
import Paragraph from '../../components/paragraph/Paragraph';
import { ABOUT_INFO } from '../../constants/aboutUs-info';
import { STAFF_INFO } from '../../constants/staff-info';

import { StyledCardsContainer, StyledMain } from './aboutUs.styles';

const AboutUs = () => {
	return (
		<>
			<PageHeader text={'About Us'} />
			<StyledMain>
				{ABOUT_INFO.map(content => (
					<Paragraph key={content.id} content={content.text} />
				))}
				<StyledCardsContainer>
					{STAFF_INFO.map(item => (
						<AboutUsCard key={item.id} item={item} />
					))}
				</StyledCardsContainer>
			</StyledMain>
		</>
	);
};

export default AboutUs;
