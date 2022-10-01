import store from '../features/store';

import { setManualModal } from '../features/quizSlice';
// note: functions here might directly change the redux state
export const toggleManualModal = (show: boolean = true) => {
	store.dispatch(setManualModal({ show }));
};
