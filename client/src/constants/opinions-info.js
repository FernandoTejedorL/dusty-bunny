import { v4 } from 'uuid';

export const OPINIONS = [
	{
		id: v4(),
		image: '/assets/images/profiles/female/1.jpeg',
		name: 'Sarah Llergy',
		comment: '“Who knew buying fluff could be so exciting?”',
		type: 'Customer'
	},
	{
		id: v4(),
		image: '/assets/images/profiles/male/3.jpeg',
		name: 'Alexis Nooze',
		comment:
			'“I never thought that something so small could make me so happy.”',
		type: 'Customer'
	},
	{
		id: v4(),
		image: '/assets/images/profiles/male/4.jpeg',
		name: 'Sam Ugger',
		comment: '“Dusty Bunny´s fluff has personality. I´m thrilled!”',
		type: 'Customer'
	},
	{
		id: v4(),
		image: '/assets/images/profiles/female/2.jpeg',
		name: 'Sandy Duster',
		comment:
			'“I love to give advice on how to take care of these little jewels.”',
		type: 'Supplier'
	},
	{
		id: v4(),
		image: '/assets/images/profiles/male/5.jpeg',
		name: 'Dustin Hairs',
		comment:
			'“Thanks to Dusty Bunny, my lint gets to homes where it is valued.”',
		type: 'Supplier'
	},
	{
		id: v4(),
		image: '/assets/images/profiles/female/6.jpeg',
		name: 'Carly Cobwebb',
		comment: '“Thanks to Dusty Bunny, I can now live from my passion.”',
		type: 'Supplier'
	}
];
