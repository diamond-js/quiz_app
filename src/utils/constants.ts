import {
	CategoryId,
	OptionLetters,
	OptionNumbers,
	quizes,
} from '../types/types';

export const optionLettersMappedToNumbers: {
	[K in OptionLetters]: OptionNumbers;
} = { a: 1, b: 2, c: 3, d: 4 };

export const optionNumbersMappedToLetters: {
	[K in OptionNumbers]: OptionLetters | '';
} = { 0: '', 1: 'a', 2: 'b', 3: 'c', 4: 'd' };

export const keyboardShortcuts: {
	nextQuestionKeys: string[];
	quitQuiz: string[];
	selectOption: OptionLetters[];
} = {
	nextQuestionKeys: ['n', 'ArrowRight', 'Enter'],
	quitQuiz: ['q'],
	selectOption: ['a', 'b', 'c', 'd'],
};
export const categoryList: {
	id: CategoryId;
	name: string;
}[] = [
	{
		id: 'computer',
		name: 'Computer Science',
	},
	{
		id: 'general_knowledge',
		name: 'General Knowledge',
	},
];

export const numbersToAlphabets: any = {
	1: 'A',
	2: 'B',
	3: 'C',
	4: 'D',
};

// {
// 	id: 'ques_',
// 	question: '',
// 	options: [
// 		{ id: 1, value: '' },
// 		{ id: 2, value: '' },
// 		{ id: 3, value: '' },
// 		{ id: 4, value: '' },
// 	],
// 	categoryId: '',
// 	duration: 1,
// 	correctOptionId: 2,
// },
// i made id string incase i'm ever going to use an api anytime soon, so that is if the api Identifier key for the quiz item, is a string i do not have to change anything in typescript
export const questions: quizes = [
	{
		id: 'ques_1',
		question: 'Who is the father of computer?',
		options: [
			{ id: 1, value: 'Edward Robert' },
			{ id: 2, value: 'Charles Babbage' },
			{ id: 3, value: 'Bill Gates' },
			{ id: 4, value: 'Allen Turning' },
		],
		categoryId: 'computer',
		duration: 0.5,
		correctOptionId: 2,
	},
	{
		id: 'ques_2',
		question: "The term 'Computer' is derived from.....?",
		options: [
			{ id: 1, value: 'Greek' },
			{ id: 2, value: 'China' },
			{ id: 3, value: 'USA' },
			{ id: 4, value: 'Latin' },
		],
		categoryId: 'computer',
		duration: 1,
		correctOptionId: 4,
	},
	{
		id: 'ques_3',
		question: 'Who is the father of personal computer?',
		options: [
			{ id: 1, value: 'Bill Gates' },
			{ id: 2, value: 'Allen Turning' },
			{ id: 3, value: 'Edward Robert' },
			{ id: 4, value: 'Charles Babbage' },
		],
		categoryId: 'computer',
		duration: 1,
		correctOptionId: 3,
	},

	{
		id: 'ques_4',
		question: "What does 'OS' mean in Computer?",
		options: [
			{
				id: 1,
				value: 'Order Of Significance',
			},
			{
				id: 2,
				value: 'Out Of Sync',
			},
			{ id: 3, value: 'Operation Symentry' },
			{
				id: 4,
				value: 'Operating System',
			},
		],
		categoryId: 'computer',
		duration: 0.5,
		correctOptionId: 4,
	},

	{
		id: 'ques_5',
		question:
			'Which of the following controls the process of interaction between the user and the operating system?',
		options: [
			{ id: 1, value: 'User Interface' },
			{ id: 2, value: 'Chip' },
			{ id: 3, value: 'GPU' },
			{ id: 4, value: 'CPU' },
		],
		categoryId: 'computer',
		duration: 1,
		correctOptionId: 1,
	},

	{
		id: 'ques_6',
		question: 'You organize files by sorting them in?',
		options: [
			{ id: 1, value: 'internet' },
			{ id: 2, value: 'ROM' },
			{ id: 3, value: 'folders' },
			{ id: 4, value: 'RAM' },
		],
		categoryId: 'computer',
		duration: 0.5,
		correctOptionId: 3,
	},

	{
		id: 'ques_7',
		question: 'What does a Hacker do?',
		options: [
			{ id: 1, value: 'send unesseccery mails' },
			{ id: 2, value: "break into other people's computers" },
			{ id: 3, value: 'repair laptops' },
			{ id: 4, value: "read people's mails" },
		],
		categoryId: 'computer',
		duration: 0.5,
		correctOptionId: 2,
	},

	{
		id: 'ques_8',
		question: 'What are made and repaired by a cobbler?',
		options: [
			{ id: 1, value: 'Clothes' },
			{ id: 2, value: 'Skates' },
			{ id: 3, value: 'Shoes' },
			{ id: 4, value: 'Chips' },
		],
		categoryId: 'general_knowledge',
		duration: 1,
		correctOptionId: 3,
	},

	{
		id: 'ques_9',
		question: 'How many states make up the United States of America?',
		options: [
			{ id: 1, value: '52 states' },
			{ id: 2, value: '40 states' },
			{ id: 3, value: '50 states' },
			{ id: 4, value: '55 states' },
		],
		categoryId: 'general_knowledge',
		duration: 1,
		correctOptionId: 3,
	},

	{
		id: 'ques_10',
		question: 'H2O is the chemical formular for what?',
		options: [
			{ id: 1, value: 'ink' },
			{ id: 2, value: 'graphite' },
			{ id: 3, value: 'paste' },
			{ id: 4, value: 'water' },
		],
		categoryId: 'general_knowledge',
		duration: 1,
		correctOptionId: 4,
	},

	{
		id: 'ques_11',
		question:
			"Complete the title of the play by Shakespeare - 'The Merchant of....'?",
		options: [
			{ id: 1, value: 'Peace' },
			{ id: 2, value: 'Dennis' },
			{ id: 3, value: 'Venice' },
			{ id: 4, value: 'Bear Grylls' },
		],
		categoryId: 'general_knowledge',
		duration: 2,
		correctOptionId: 3,
	},

	{
		id: 'ques_12',
		question: 'In which sport may a player score a birdie, eagle or albatross?',
		options: [
			{ id: 1, value: 'Golf' },
			{ id: 2, value: 'Football' },
			{ id: 3, value: 'Netball' },
			{ id: 4, value: 'Tennis' },
		],
		categoryId: 'general_knowledge',
		duration: 2,
		correctOptionId: 1,
	},

	// {

	// }
];
