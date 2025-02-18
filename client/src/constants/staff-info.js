import { v4 } from 'uuid';

export const STAFF_INFO = [
	{
		id: v4(),
		image: '/assets/images/staff/ceo.jpg',
		name: 'Fluffy Bossington',
		role: 'CEO',
		subrole: 'Chief Executive Officer',
		career:
			'Started as a simple dust bunny under the couch; now she leads the fluff empire with a soft yet firm paw.',
		catchphrase: 'Dream big, fluff bigger!'
	},
	{
		id: v4(),
		image: '/assets/images/staff/finance.jpg',
		name: 'Dustin Cashflow',
		role: 'CFO',
		subrole: 'Chief Financial Officer',
		career:
			'Master of counting every floating fluff coin; once balanced the budget with a calculator made of lint.',
		catchphrase: 'Every cent counts—even the dusty ones!'
	},
	{
		id: v4(),
		image: '/assets/images/staff/marketing.jpg',
		name: 'Misty Marketington',
		role: 'CMO',
		subrole: 'Chief Marketing Officer',
		career:
			"Expert in making dust look glamorous; pioneered the 'Flufffluencer' trend on social media.",
		catchphrase: "If it's fluffy, it's fabulous!"
	},
	{
		id: v4(),
		image: '/assets/images/staff/hr.jpg',
		name: 'Harry Humanwhisper',
		role: 'CPO',
		subrole: 'Chief People Officer',
		career:
			'Knows how to motivate every fluff, from the tiniest lint speck to the biggest dust ball.',
		catchphrase: 'Happy fluff, happy life!'
	}
];
