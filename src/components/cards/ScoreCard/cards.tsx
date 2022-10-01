import { FC } from 'react';
import { Link } from 'react-router-dom';
import { resetQuiz } from '../../../features/quizSlice';
import { useAppDispatch } from '../../../hooks';
import { answer, answers } from '../../../types/types';
import { optionNumbersMappedToLetters } from '../../../utils/constants';
import Btn from '../../Btn';
import Divider from '../../Divider';
import HowItWorks from '../../HowItWorks';
import close_icon from '../../icons/close_icon';

interface ScoreProps {
	answer: answer;
	index: number;
}

const Score: FC<ScoreProps> = function ({ answer, index }) {
	const userAnswerTxt = answer.quiz.options.find(
		(opt) => opt.id == answer.optionIdSelected
	)?.value;
	const correctAnswerTxt = answer.quiz.options.find(
		(opt) => opt.id == answer.correctOptionId
	)?.value;
	return (
		<div className='score flex items-start'>
			<span className='text-h1Clr text-base font-medium mr-2'>{index}.</span>

			{/* question */}
			<div className=''>
				<p className='text-text text-base mb-2'>{answer.quiz.question}</p>

				{/* options */}
				<div className='flex gap-5 flex-wrap'>
					{/* selected option */}
					<div className='flex flex-col'>
						<span className='block mb-2 text-xs font-medium text-h1Clr'>
							Your answer
						</span>
						{answer.optionIdSelected ? (
							<div className='flex items-start '>
								<span
									className={`text-white mr-2 text-xs uppercase font-medium ${
										answer.isCorrectAnswer ? ' bg-[#12AF8A]' : 'bg-[#F97F7F]'
									} min-w-[1.25rem] min-h-[1.25rem] flex items-center justify-center rounded-full`}
								>
									{optionNumbersMappedToLetters[answer.optionIdSelected]}
								</span>
								<p
									className={`p-[0.375rem] text-xs font-medium text-white ${
										answer.isCorrectAnswer ? ' bg-[#12AF8A]' : 'bg-[#F97F7F]'
									} text-center rounded`}
								>
									{userAnswerTxt}
								</p>
							</div>
						) : (
							<div className='w-full h-full flex items-center justify-center'>
								<span className='block w-9 h-1 rounded-full bg-[#F2AA55] justify-self-center'></span>
							</div>
						)}
					</div>
					{/* correct option */}
					{!answer.isCorrectAnswer && (
						<div className=''>
							<span className='block mb-2 text-xs font-medium text-h1Clr'>
								Correct answer
							</span>
							<div className='flex items-start'>
								<span className='text-white mr-2 text-xs font-medium bg-[#12AF8A] min-w-[1.25rem] min-h-[1.25rem] flex items-center justify-center rounded-full uppercase'>
									{optionNumbersMappedToLetters[answer.correctOptionId]}
								</span>
								<p className='p-[0.375rem] text-xs font-medium text-white bg-[#12AF8A] text-center rounded'>
									{correctAnswerTxt}
								</p>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

interface ScoreDetailsProps {
	correctAnsCount: number;
	totalQuestionsCount: number;
	percentageScore: number;
	handleHideScoreDetails: () => void;
	answers: answers;
}
export const ScoreDetails: FC<ScoreDetailsProps> = function ({
	correctAnsCount = 0,
	totalQuestionsCount = 0,
	percentageScore,
	handleHideScoreDetails,
	answers = [],
}) {
	return (
		<div className='w-full p-5 h-full flex flex-col'>
			<header className='flex items-center justify-between mb-7 mr-2'>
				<div className=''>
					<h3 className='text-h1Clr text-xl font-semibold mb-2'>
						Result {percentageScore}%
					</h3>
					<p className='text-sm  text-text'>
						Selected <span className='font-bold'>{correctAnsCount}</span>{' '}
						correct options out of{' '}
						<span className='font-bold'>{totalQuestionsCount}</span> questions{' '}
					</p>
				</div>

				<i
					className='flex items-center justify-center rounded-full w-8 h-8 bg-[#EBEDEF] cursor-pointer'
					onClick={handleHideScoreDetails}
				>
					{close_icon}
				</i>
			</header>

			<h2 className='text-h1Clr font-medium text-xl mb-4'>Scores</h2>

			{/* scores */}
			<div className='overflow-auto'>
				{answers.map((answer, index) => {
					return (
						<div
							className='mb-14'
							key={index}
						>
							<div className='mb-6'>
								<Score
									answer={answer}
									index={index + 1}
								/>
							</div>
							<Divider />
						</div>
					);
				})}
			</div>
		</div>
	);
};

interface ScoreOverviewProps {
	correctAnsCount: number;
	totalQuestionsCount: number;
	percentageScore: number;
	handleShowScoreDetails: () => void;
}

export const ScoreOverview: FC<ScoreOverviewProps> = function ({
	correctAnsCount = 0,
	totalQuestionsCount = 0,
	percentageScore,
	handleShowScoreDetails,
}) {
	const dispatch = useAppDispatch();
	return (
		<div className='w-full p-5'>
			<div className='flex flex-col items-center mb-5'>
				<h3 className='text-h1Clr text-center text-2xl font-semibold mb-3'>
					Result {percentageScore}%
				</h3>
				<p className='text-lg text-center text-text'>
					Selected <span className='font-bold'>{correctAnsCount}</span> correct
					options out of{' '}
					<span className='font-bold'>{totalQuestionsCount}</span> questioins{' '}
				</p>
			</div>

			<div className='flex flex-col items-center gap-7 mb-12'>
				<Btn onClick={() => dispatch(resetQuiz())}>Retry</Btn>
				<HowItWorks />
			</div>

			<div className='mb-6'>
				<Divider />
			</div>

			<div className='flex gap-4 justify-center flex-wrap'>
				<Link to='/'>
					<Btn outlined>Go Back Home</Btn>
				</Link>
				<Btn onClick={handleShowScoreDetails}>View Scores</Btn>
			</div>
		</div>
	);
};
