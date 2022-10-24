import { FC, ReactNode, useState } from 'react';
import { toggleManualModal } from '../utils/func';
import Btn from './Btn';

const HightlightedText: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<span className='px-3 text-[#386189] bg-[#eff3f6] rounded text- font-'>
			{children}
		</span>
	);
};

interface Props {}

const Manual: FC<Props> = ({}) => {
	const [activeNav, setActiveNav] = useState<'about' | 'how_to_use'>(
		'how_to_use'
	);
	const aboutIsActive = activeNav === 'about';
	const howToUseIsActive = activeNav === 'how_to_use';
	return (
		<div className='fixed inset-0 bg-[#00000040] z-50 py-4 overflow-auto grid place-items-center'>
			<div className='bg-white rounded-xl w-full h-fit max-w-[407px] py-5 px-9'>
				<nav className='flex mb-5'>
					<div
						className={`p-2 flex-1 text-center relative overflow-hidden transition duration-200 cursor-pointer ${
							aboutIsActive ? 'bg-[#DBE8FA]' : ''
						}`}
						onClick={() => setActiveNav('about')}
					>
						<span
							className={`font-semibold text-xl ${
								aboutIsActive ? 'text-[#344867]' : 'text-[#697485]'
							}`}
						>
							About
						</span>
						<i
							className={`block transition-transform duration-200 w-full h-[0.125rem] bg-prim absolute bottom-0 right-0 ${
								aboutIsActive ? 'translate-x-0' : 'translate-x-full'
							}`}
						></i>
					</div>

					<div
						className={`p-2 flex-1 text-center relative overflow-hidden transition duration-200 cursor-pointer ${
							howToUseIsActive ? 'bg-[#DBE8FA]' : ''
						}`}
						onClick={() => setActiveNav('how_to_use')}
					>
						<span
							className={`font-semibold text-xl   ${
								howToUseIsActive ? 'text-[#344867]' : 'text-[#697485]'
							}`}
						>
							How To Use
						</span>
						<i
							className={`block transition-transform duration-200 w-full h-[0.125rem] bg-prim absolute bottom-0 left-0 ${
								howToUseIsActive ? '-translate-x-0' : '-translate-x-full'
							}`}
						></i>
					</div>
				</nav>

				{aboutIsActive && (
					<div className='mb-5'>
						<p className='text-text text-base mb-3'>
							This is a Quiz app designed and programmed by{' '}
							<HightlightedText>Dynasty Aigbomian</HightlightedText> as a react
							project.
						</p>
						<h3 className='font-medium text-lg text-h1Clr mb-2'>
							Technologies Used
						</h3>
						<div className='flex flex-wrap gap-3 mb-4'>
							{['Tailwind CSS', 'HTML5', 'React', 'Typescript'].map(
								(techUsed) => {
									return (
										<HightlightedText key={techUsed}>
											{techUsed}
										</HightlightedText>
									);
								}
							)}
						</div>
						<h3 className='font-medium text-lg text-h1Clr mb-1'>Follow me</h3>
						<div className='flex flex-wrap gap-3'></div>
					</div>
				)}

				{howToUseIsActive && (
					<div className=' mb-5'>
						<p className='text-text text-base mb-3'>
							Click on start quiz, then select a category then confirm category.
							To move to next question click the next/skip button or use any of
							the respective keyboard shortcuts below. The progress bar show how
							much time you have left to answer all the questions. Once the
							progress bar is completed, the quiz would end automatically.
						</p>
						<h3 className='font-medium text-lg text-h1Clr mb-1'>
							Keyboard shortcuts
						</h3>
						<ul className='text-text '>
							<li className='mb-2'>
								Press <HightlightedText>n</HightlightedText>,{' '}
								<HightlightedText>{'left arrow'}</HightlightedText> or{' '}
								<HightlightedText>Enter</HightlightedText> to skip or move to
								next question
							</li>
							<li className='mb-2'>
								Press <HightlightedText>q</HightlightedText> to quit and submit
								quiz.
							</li>
							<li className='mb-2'>
								Press <HightlightedText>a</HightlightedText>{' '}
								<HightlightedText>b</HightlightedText>{' '}
								<HightlightedText>c</HightlightedText>{' '}
								<HightlightedText>d</HightlightedText> to select options
								respectively.
							</li>
						</ul>
					</div>
				)}

				<div className='  w-fit ml-auto'>
					<Btn onClick={() => toggleManualModal(false)}>Close</Btn>
				</div>
			</div>
		</div>
	);
};

export default Manual;
