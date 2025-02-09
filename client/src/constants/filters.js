import { v4 } from 'uuid';

export const FILTERS = [
	{
		id: v4(),
		type: 'Category',
		values: ['Animals', 'Special', 'Jobs', 'Personalities', 'Realistic']
	},
	{
		id: v4(),
		type: 'Size',
		values: ['S', 'M', 'L']
	},
	{
		id: v4(),
		type: 'Diet',
		values: ['Omnivore', 'Herbivore', 'Carnivore']
	}
];
