import { answers, quiz, quizes } from './types/types';

export default class {
	// questions: quizes = [];
	constructor() {}

	getQuestionsByCategory(quizCategoryId: string, questions: quizes): quizes {
		if (!quizCategoryId) [];
		return questions.filter((q) => q.categoryId == quizCategoryId);
	}

	getQuestionByIndex(index: number, questions: quizes): quiz {
		return questions[index];
	}

	isAnswerCorrect(question: quiz, answerIdToCheck: number): boolean {
		return question.correctOptionId === answerIdToCheck;
	}

	getCorrectAnswers(answers: answers): answers {
		return answers.filter((ans) => ans.isCorrectAnswer);
	}

	getPercentageScore(
		numberOfCorrectAnswers: number = 1,
		numberOfQuizes: number = 1
	): number {
		const res = (numberOfCorrectAnswers / numberOfQuizes) * 100;
		return Number(res.toFixed(1));
	}
}
