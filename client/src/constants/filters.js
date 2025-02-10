import { v4 } from 'uuid';

export const FILTERS = [
	{
		id: v4(),
		type: 'category',
		values: ['Animals', 'Special', 'Jobs', 'Personalities', 'Realistic']
	},
	{
		id: v4(),
		type: 'size',
		values: ['S', 'M', 'L']
	},
	{
		id: v4(),
		type: 'diet',
		values: ['Omnivore', 'Herbivore', 'Carnivore']
	}
];
