import { FC, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import QuizCard from '../components/cards/QuizCard';
import ScoreCard from '../components/cards/ScoreCard';
import { useAppSelector } from '../hooks';
import SimpleQuiz from '../SimpleQuiz';
import { categoryList, questions } from '../utils/constants';

interface Props {}

const MyQuiz = new SimpleQuiz();

const Quiz: FC<Props> = ({}) => {
	const { category: quizCategoryId = '' } = useParams();
	const navigate = useNavigate();
	const category = categoryList.find((ele) => ele.id == quizCategoryId);

	const quizState = useAppSelector((state) => state.quiz.quizState);
	const quizesToAnswer = MyQuiz.getQuestionsByCategory(
		quizCategoryId,
		questions
	); //

	useEffect(() => {
		if (!quizCategoryId || !category) navigate('/category');
		return () => {};
	}, [quizCategoryId]);

	if (quizState == 'ended')
		return (
			<ScoreCard
				quizesToAnswer={quizesToAnswer}
				MyQuiz={MyQuiz}
			/>
		);
	else
		return (
			<QuizCard
				MyQuiz={MyQuiz}
				quizesToAnswer={quizesToAnswer}
				quizCategoryId={quizCategoryId || ''}
			/>
		);
	//
};

export default Quiz;
