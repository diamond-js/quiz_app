import { FC } from 'react';
import { Link } from 'react-router-dom';
import HowItWorks from '../components/HowItWorks';
interface Props {}

const Home: FC<Props> = ({}) => {
	return (
		<div className='w-full h-full flex items-center justify-center'>
			{/*  */}
			<main className='bg-white w-full max-w-[722px] min-h-[467px] flex items-center justify-center'>
				{/* content */}
				<div className=''>
					<div className='mb-10 flex flex-col items-center px-20'>
						<h1 className='text-h1Clr text-2xl font-semibold mb-3'>
							Join Quiz
						</h1>
						<p className='text-base text-center max-w-[387px] text-text'>
							Click <span className='font-semibold'>Start Quiz</span> and then
							select any category of questions you would like to answer
						</p>
					</div>

					{/*  */}

					<div className='flex flex-col items-center'>
						<div className='mb-7'>
							<Link to={'/category'}>
								<button className='text-base font-medium text-white rounded-md bg-btnClr px-[1.875rem] py-[0.625rem]'>
									Start Quiz
								</button>
							</Link>
						</div>

						<HowItWorks />
					</div>
				</div>
			</main>
		</div>
	);
};

export default Home;
