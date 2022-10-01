import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { AppDispatch } from '../../../features/store';
import { category } from '../../../types/types';
import { ConfirmCategory, PickCategory } from './cards';

interface Props {}

const CategoriesCard: FC<Props> = ({}) => {
	const dispatch: AppDispatch = useAppDispatch();
	const selectedCategory: category = useAppSelector(
		(state) => state.quiz.category
	);
	return (
		<div className='w-full h-full flex items-center justify-center'>
			{' '}
			{/*  */}
			<main className='bg-white w-full max-w-[722px] min-h-[467px] px-5 flex items-center justify-center'>
				{selectedCategory.id ? (
					<ConfirmCategory
						dispatch={dispatch}
						category={selectedCategory}
					/>
				) : (
					<PickCategory dispatch={dispatch} />
				)}
			</main>
		</div>
	);
};

export default CategoriesCard;
