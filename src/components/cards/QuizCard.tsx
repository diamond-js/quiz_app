import { FC, ReactEventHandler, useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
	answerQuestion,
	endQuiz as endAppQuiz,
} from '../../features/quizSlice';
import { useAppDispatch } from '../../hooks';
import SimpleQuiz from '../../SimpleQuiz';
import {
	answer,
	OptionLetters,
	OptionNumbers,
	quizes,
} from '../../types/types';
import {
	keyboardShortcuts,
	numbersToAlphabets,
	optionLettersMappedToNumbers,
} from '../../utils/constants';
import Btn from '../Btn';
import Divider from '../Divider';
import HowItWorks from '../HowItWorks';

interface Props {
	MyQuiz: SimpleQuiz;
	quizCategoryId: string;
	quizesToAnswer: quizes;
}
// questionsToAnswer;

const QuizCard: FC<Props> = ({ MyQuiz, quizesToAnswer }) => {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
	const [selectedOption, setSelectedOption] = useState<OptionNumbers>(0);
	const lastQuestionIdREF = useRef<string>(''); // acts as a tracker to make sure user does not answer a question twice
	const currentQuestion = MyQuiz.getQuestionByIndex(
		currentQuestionIndex,
		quizesToAnswer
	);
	const quixWithCalculatedDuration = quizesToAnswer.reduce(
		(total, current) => {
			return { ...total, duration: total.duration + current.duration };
		},
		{ duration: 0 }
	);
	const dispatch = useAppDispatch();

	const selectOption = (optionId: OptionNumbers) => {
		if (selectedOption === optionId || !optionId) setSelectedOption(0);
		else setSelectedOption(optionId);
	};

	const endQuiz = () => {
		dispatch(endAppQuiz());
	};

	function nextQuestion() {
		const isLastQuestion = currentQuestionIndex + 1 >= quizesToAnswer.length;

		if (!currentQuestion || !currentQuestion.id) return;

		const newAnswer: answer = {
			quizId: currentQuestion.id,
			correctOptionId: currentQuestion.correctOptionId,
			optionIdSelected: selectedOption,
			isCorrectAnswer: MyQuiz.isAnswerCorrect(currentQuestion, selectedOption),
			quiz: currentQuestion,
		};

		if (lastQuestionIdREF.current !== currentQuestion.id) {
			dispatch(answerQuestion(newAnswer));
			lastQuestionIdREF.current = currentQuestion.id;
		}
		setSelectedOption(0);

		if (!isLastQuestion) {
			setCurrentQuestionIndex((prev) => prev + 1);
		} else endQuiz();
	}
	const keyUpListener = (e: KeyboardEvent) => {
		if (keyboardShortcuts.nextQuestionKeys.includes(e.key)) nextQuestion();
		else if (keyboardShortcuts.quitQuiz.includes(e.key)) endQuiz();
		else if (keyboardShortcuts.selectOption.includes(e.key as OptionLetters))
			selectOption(optionLettersMappedToNumbers[e.key as OptionLetters] || 0);
	};
	useEffect(() => {
		window.addEventListener('keyup', keyUpListener);
		return () => {
			window.removeEventListener('keyup', keyUpListener);
		};
	}, [currentQuestionIndex, selectedOption]); //the dependency array might look weird but the items there are there because some of the functions that would run inside this effect of in functions called inside this effect, would read or update the state, so for everything to work well, after testing, i included all the variable i know would eventually be needed inside the useEffect one way or the other...

	if (!quizesToAnswer.length)
		return (
			<div className='w-full h-full flex items-center justify-center'>
				<main className='bg-white w-full max-w-[722px] min-h-[467px] flex flex-col justify-center items-center main-card-shadow'>
					<h1 className='text-4xl text-center font-semibold mb-5 text-errorTxt'>
						No questions in this category
					</h1>
					<Link to={'/category'}>
						<Btn>Back</Btn>
					</Link>
				</main>
			</div>
		);

	return (
		<div className='fixed inset-0 block bg-white overflow-auto sm:bg-opacity-0 place-items-center sm:grid sm:py-4'>
			{' '}
			{/*  */}
			{/* minh-[467px] */}
			<main className='bg-white main-card-shadow w-full h-fit max-w-[722px] flex items-center relative'>
				<div className='h-8 absolute flex sm:items-center justify-center w-full top-0 sm:-translate-y-1/2'>
					<div className='bg-[#E5E9EF] w-full h-2 relative flex items-start sm:items-center justify-center'>
						<span className='text-xs font-medium text-[#294C81] bg-[#E5E9EF] py-[.5px] px-8 sm:px-5 sm:py-2 absolute sm:relative top-0 sm:top-auto rounded-none sm:rounded-full  rounded-bl-3xl rounded-br-3xl block  '>
							{quixWithCalculatedDuration.duration}
							{quixWithCalculatedDuration.duration > 1 ? 'mins' : 'min'}
						</span>
					</div>
				</div>
				<motion.div
					style={{ display: '' }}
					initial={{
						clipPath: 'polygon(0% 0%, 0% 100%, 0 100%, 0 0)',
					}}
					onAnimationComplete={() => endQuiz()}
					animate={{ clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)' }}
					transition={{
						ease: 'linear',
						duration: quixWithCalculatedDuration.duration * 60,
					}}
					className='h-8 absolute flex sm:items-center justify-center w-full top-0 sm:-translate-y-1/2 z-10'
				>
					<div className='bg-prim w-full h-2 relative flex items-start sm:items-center justify-center'>
						<span className='text-xs font-medium  text-white bg-prim py-[.5px] px-8 sm:px-5 sm:py-2 absolute sm:relative top-0 sm:top-auto rounded-none sm:rounded-full rounded-bl-3xl rounded-br-3xl block'>
							{quixWithCalculatedDuration.duration}
							{quixWithCalculatedDuration.duration > 1 ? 'mins' : 'min'}
						</span>
					</div>
				</motion.div>
				{/* </div>

				{/* content */}
				<div className='w-full p-5'>
					<h4 className='text-[##38404C] text-lg font-semibold text-center mb-2 mt-1'>
						{currentQuestionIndex + 1}{' '}
						<span className='text-[#414B5A] font-normal'>of</span>{' '}
						{quizesToAnswer.length}{' '}
					</h4>
					<div className='flex flex-col mb-8'>
						<h3 className='text-h1Clr text-lg font-semibold mb-3'>Question</h3>
						<p className='text-lg  text-text'>{currentQuestion.question}</p>
					</div>
					{/*  */}
					<div className='mb-9'>
						<h3 className='text-h1Clr text-base font-semibold mb-4'>Options</h3>
						<div className='grid grid-cols-1 sm:grid-cols-2 gap-9'>
							{currentQuestion?.options.map((option) => {
								return (
									<div
										key={option.id}
										className='flex gap-2 cursor-pointer'
										onClick={() => selectOption(option.id)}
									>
										<span
											className={`flex rounded-full w-6 h-6 items-center justify-center font-semibold text-sm transition-all duration-150 ${
												selectedOption == option.id
													? 'text-white bg-prim'
													: 'text-[#697179] bg-[#DFE1E4] '
											}`}
										>
											{numbersToAlphabets[option.id]}
										</span>
										<span
											className={`transition-all duration-150 border ${
												selectedOption == option.id
													? 'border-prim bg-prim text-white'
													: 'border-[#7E8F9F] bg-white text-[#22262D]'
											} option-shadow rounded-md p-4 flex-1 flex justify-center items-center`}
										>
											{option.value}
										</span>
									</div>
								);
							})}
						</div>
					</div>
					{/*  */}
					<div className='mb-5'>
						<Divider />
					</div>
					{/*  */}
					<div className='flex flex-row items-center justify-between'>
						<HowItWorks />
						<div className=''>
							<Btn
								onClick={() => {
									// nextQuestion();
									nextQuestion();
								}}
							>
								{currentQuestionIndex >= quizesToAnswer.length - 1
									? 'Finish'
									: selectedOption
									? 'Next'
									: 'Skip'}
							</Btn>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default QuizCard;
