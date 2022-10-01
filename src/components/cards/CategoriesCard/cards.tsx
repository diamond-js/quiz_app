import { FC } from 'react';
import { categoryList, questions } from '../../../utils/constants';
import Btn from '../../Btn';
import HowItWorks from '../../HowItWorks';
import { Link } from 'react-router-dom';
import { pickCategory, resetQuiz } from '../../../features/quizSlice';
import { AppDispatch } from '../../../features/store';
import { category } from '../../../types/types';

export const ConfirmCategory: FC<{
	category: category;
	dispatch: AppDispatch;
}> = ({ category, dispatch }) => {
	const quizInSelectedCategory = questions.filter(
		(quiz) => quiz.categoryId === category.id
	);
	const calculatedDuration = quizInSelectedCategory.reduce(
		(prev, cur) => {
			return {
				...prev,
				duration: prev.duration + cur.duration,
			};
		},
		{ duration: 0 }
	).duration;
	return (
		<div className='p-5'>
			<div className='mb-10 flex flex-col items-center'>
				<h4 className='text-xl text-center max-w-[387px] text-h1Clr mb-3'>
					Category selected:
				</h4>
				<h1 className='text-h1Clr text-center text-2xl font-semibold'>
					{category.name}
				</h1>
			</div>

			{/*  */}
			<div className='flex justify-center mb-12'>
				{quizInSelectedCategory.length > 0 ? (
					<ul className='grid grid-cols-category-info gap-8'>
						<li className='text-lg text-h1Clr grid grid-rows-2 gap-4  '>
							<span className='font-medium'>Total Questions</span>
							<span className='font-medium'>Total Time</span>
						</li>
						<li className='text-lg text-h1Clr grid grid-rows-2 gap-4'>
							<span className='font-bold'>{quizInSelectedCategory.length}</span>
							<span className='font-bold'>
								{calculatedDuration}
								{calculatedDuration > 1 ? 'mins' : 'min'}
							</span>
						</li>
					</ul>
				) : (
					<h1 className='text-center font-medium text-lg text-errorTxt'>
						Sorry! No Questions In This Category. <br /> Please select another
						category.
					</h1>
				)}
			</div>

			{/*  */}
			<div className='flex flex-col items-center'>
				<div className='mb-7 flex flex-wrap gap-5 justify-center'>
					<Btn
						outlined
						onClick={() => {
							dispatch(pickCategory({ id: '', name: '' }));
						}}
					>
						Change Category
					</Btn>
					{quizInSelectedCategory.length > 0 && (
						<Link
							to={`/quiz/${category.id}`}
							onClick={() => dispatch(resetQuiz())}
						>
							<Btn>Start Quiz</Btn>
						</Link>
					)}
				</div>

				<HowItWorks />
			</div>
		</div>
	);
};

export const PickCategory: FC<{ dispatch: AppDispatch }> = ({ dispatch }) => {
	return (
		<>
			{/* content */}
			<div className='p-5'>
				<div className='mb-10 flex flex-col items-center  '>
					<h1 className='text-h1Clr text-2xl text-center font-semibold mb-3'>
						Select A Category
					</h1>
					<p className='text-base text-center max-w-[387px] text-text'>
						Select any category of questions you would like to answer
					</p>
				</div>

				{/*  */}

				<div className='flex flex-col items-center'>
					<div className='mb-7 flex flex-wrap gap-5 justify-center'>
						{categoryList.map((category) => {
							return (
								<Btn
									key={category.name}
									outlined={true}
									onClick={() =>
										dispatch(
											pickCategory({ id: category.id, name: category.name })
										)
									}
								>
									{category.name}
								</Btn>
							);
						})}
					</div>

					<HowItWorks />
				</div>
			</div>
		</>
	);
};
