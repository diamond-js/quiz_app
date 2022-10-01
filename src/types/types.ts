export type quizes = quiz[];
export type quizOptions = quizOption[];
export type answers = answer[];
export type quizState = 'started' | 'ended';
export type OptionLetters = 'a' | 'b' | 'c' | 'd';
export type OptionNumbers = 0 | 1 | 2 | 3 | 4; // 0 means no options selected
export type CategoryId = 'computer' | 'general_knowledge';

export interface quiz {
	id: string; //identifier
	question: string; // question being asked
	duration: number; // how long the user has to answer the question
	categoryId: CategoryId; // ref to the category of the question
	options: quizOptions; // list of options to the question,
	correctOptionId: OptionNumbers; // id of the correct option
}

export interface quizOption {
	id: OptionNumbers;
	value: string;
}
export interface category {
	id: string;
	name: string;
}

export interface answer {
	quizId: string;
	correctOptionId: OptionNumbers;
	optionIdSelected: OptionNumbers;
	isCorrectAnswer: boolean;
	quiz: quiz;
}

//rdx means redux tookit
export interface rdxQuizState {
	category: category;
	answers: answers;
	quizState: quizState;
	modals: {
		manualModalShown: boolean;
	};
}
