import { FC } from 'react';

import { Outlet } from 'react-router-dom';
import ManualModal from './components/ManualModal';
import { useAppSelector } from './hooks';

interface Props {}

const App: FC<Props> = function ({}) {
	const manualModalShown = useAppSelector(
		(state) => state.quiz.modals.manualModalShown
	);
	return (
		<div className='w-full h-screen bg-bgGray'>
			{manualModalShown && <ManualModal />}
			<Outlet />
		</div>
	);
};

export default App;
