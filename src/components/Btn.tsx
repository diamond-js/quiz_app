import React, { FC, ReactNode } from 'react';

type Props = {
	children: ReactNode;
	outlined?: boolean;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Btn: FC<Props> = ({ outlined = false, children, onClick = () => {} }) => {
	return (
		<button
			onClick={onClick}
			className={`text-base font-medium rounded-md ${
				outlined ? 'bg-white text-btnClr' : 'bg-btnClr text-white'
			} border-btnClr border px-[1.875rem] py-[0.625rem]`}
		>
			{children}
		</button>
	);
};

export default Btn;
