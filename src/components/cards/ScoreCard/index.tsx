import { FC, useState } from 'react';
import { useAppSelector } from '../../../hooks';
import SimpleQuiz from '../../../SimpleQuiz';
import { answers, quizes } from '../../../types/types';
import { ScoreDetails, ScoreOverview } from './cards';

interface Props {
	quizesToAnswer: quizes;
	MyQuiz: SimpleQuiz;
}

const ScoreCard: FC<Props> = ({ quizesToAnswer, MyQuiz }) => {
	const [showScoreDetails, setShowScoreDetails] = useState<boolean>(false);

	const answers: answers = useAppSelector((state) => state.quiz.answers);
	const correctAnswers: answers = MyQuiz.getCorrectAnswers(answers);

	const percentageScore: number = MyQuiz.getPercentageScore(
		correctAnswers.length,
		quizesToAnswer.length
	);

	return (
		<div className='w-full h-full flex items-center justify-center'>
			{showScoreDetails ? (
				<main className='bg-white w-full max-w-[722px] min-h-[467px] h-full  sm:h-[90%] main-card-shadow flex flex-col'>
					<div className='h-full'>
						<ScoreDetails
							correctAnsCount={correctAnswers.length}
							totalQuestionsCount={quizesToAnswer.length}
							percentageScore={percentageScore}
							handleHideScoreDetails={() => setShowScoreDetails(false)}
							answers={answers}
						/>
					</div>
				</main>
			) : (
				<main className='bg-white w-full max-w-[722px] min-h-[467px] main-card-shadow flex flex-col'>
					<div className='flex-1 flex items-center'>
						<ScoreOverview
							correctAnsCount={correctAnswers.length}
							totalQuestionsCount={quizesToAnswer.length}
							percentageScore={percentageScore}
							handleShowScoreDetails={() => setShowScoreDetails(true)}
						/>
					</div>
				</main>
			)}
		</div>
	);
};

export default ScoreCard;
