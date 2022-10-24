import { useState } from 'react';
import questionMarkIcon from '../assets/questionMark.svg';
// import { toggleManualModal } from '../utils/func';

interface Props {}

const HowItWorks = ({}: Props) => {
	const [showManualModal, setshowManualModal] = useState<boolean>(false);
	return (
		<div
			className='flex items-center gap-1 cursor-pointer'
			onClick={() => setshowManualModal(true)}
		>
			<span className='text-grayTxt text-sm'>How to use</span>{' '}
			<img
				src={questionMarkIcon}
				alt='how to use'
			/>
		</div>
	);
};

export default HowItWorks;
