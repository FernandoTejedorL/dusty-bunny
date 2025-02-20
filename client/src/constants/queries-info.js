import { v4 } from 'uuid';

const SUPPORT = [
	{
		id: v4(),
		name: 'Product',
		value: 'product',
		concern:
			'Making sure every fluff meets the highest cuddle standards and brings joy to its new home.'
	},
	{
		id: v4(),
		name: 'Delivery',
		value: 'delivery',
		concern:
			'Ensuring your precious fluff arrives safe, sound, and without getting lost in the wind!'
	},
	{
		id: v4(),
		name: 'Payment',
		value: 'payment',
		concern:
			'Making sure transactions are as smooth as a dust bunny gliding under the sofa.'
	},
	{
		id: v4(),
		name: 'Guarantee',
		value: 'guarantee',
		concern:
			'Keeping our promise that every fluff is as delightful as expected—or your dust back!'
	}
];

const GENERAL = [
	{
		id: v4(),
		name: 'Suggestions',
		value: 'suggestions',
		concern:
			'Always looking for ways to make Dusty Bunny fluffier, funnier, and friendlier!'
	},
	{
		id: v4(),
		name: 'Info Request',
		value: 'info',
		concern:
			'Got questions? We’ve got answers—straight from the dust bunny archives!'
	},
	{
		id: v4(),
		name: 'Collaboration',
		value: 'collab',
		concern:
			'Partnering up to spread the fluff and bring even more dust-tastic ideas to life!'
	},
	{
		id: v4(),
		name: 'Jobs',
		value: 'jobs',
		concern:
			'Looking for the next great fluff wrangler to join the Dusty Bunny crew!'
	}
];

export const QUERIES = {
	support: SUPPORT,
	general: GENERAL
};
