import { v4 } from 'uuid';

export const FILTERS = [
	{
		id: v4(),
		name: 'Category',
		type: 'category',
		values: ['Animals', 'Special', 'Jobs', 'Personalities', 'Realistic']
	},
	{
		id: v4(),
		name: 'Size',
		type: 'size',
		values: ['S', 'M', 'L']
	},
	{
		id: v4(),
		name: 'Diet',
		type: 'diet',
		values: ['Omnivore', 'Herbivore', 'Carnivore']
	}
];
