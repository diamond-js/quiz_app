import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { answer, answers, category } from '../types/types';
import { initialQuizState } from './initialStates';

const quizSlice = createSlice({
	name: 'quiz',
	initialState: initialQuizState,
	reducers: {
		resetQuiz: () => {
			return initialQuizState;
		},
		pickCategory: (state, { payload }: PayloadAction<category>) => {
			state.category = payload;
		},
		answerQuestion: (state, { payload }: PayloadAction<answer>) => {
			state.answers.push(payload);
		},
		startQuiz: (state) => {
			state.quizState = 'started';
		},
		endQuiz: (state) => {
			state.quizState = 'ended';
		},
		setManualModal: (state, { payload }: PayloadAction<{ show: boolean }>) => {
			state.modals.manualModalShown = payload.show;
		},
	},
});

export default quizSlice.reducer;
export const {
	pickCategory,
	answerQuestion,
	startQuiz,
	endQuiz,
	resetQuiz,
	setManualModal,
} = quizSlice.actions;
