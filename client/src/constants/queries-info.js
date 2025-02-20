import { v4 } from 'uuid';

const SUPPORT = [
	{
		id: v4(),
		name: 'Product',
		value: 'product',
		concern:
			'Ensuring product quality and customer satisfaction with every purchase.'
	},
	{
		id: v4(),
		name: 'Delivery',
		value: 'delivery',
		concern:
			'Minimizing delays and ensuring safe, timely deliveries to customers.'
	},
	{
		id: v4(),
		name: 'Payment',
		value: 'payment',
		concern:
			'Providing secure and seamless payment options for all transactions.'
	},
	{
		id: v4(),
		name: 'Guarantee',
		value: 'guarantee',
		concern: 'Ensuring fair policies for returns, refunds, and warranty claims.'
	}
];

const GENERAL = [
	{
		id: v4(),
		name: 'Suggestions',
		value: 'suggestions',
		concern: 'Gathering valuable feedback to improve products and services.'
	},
	{
		id: v4(),
		name: 'Info Request',
		value: 'info',
		concern:
			'Providing accurate and timely information to customers and partners.'
	},
	{
		id: v4(),
		name: 'Collaboration',
		value: 'collab',
		concern:
			'Building strong partnerships and mutually beneficial collaborations.'
	},
	{
		id: v4(),
		name: 'Jobs',
		value: 'jobs',
		concern:
			'Attracting and retaining top talent to drive innovation and growth.'
	}
];

export const QUERIES = {
	support: SUPPORT,
	general: GENERAL
};
