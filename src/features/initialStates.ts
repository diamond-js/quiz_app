import { rdxQuizState } from '../types/types';

export const initialQuizState: rdxQuizState = {
	category: {
		id: '',
		name: '',
	},
	quizState: 'started',
	modals: {
		manualModalShown: false,
	},
	answers: [],
};
