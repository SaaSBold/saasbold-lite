// "use client";
// import { Faq } from "@/types/faq";
// import React, { useState, useEffect, useRef } from "react";

// const FaqItem = ({ faq }: { faq: Faq }) => {
// 	const [open, setOpen] = useState(false);
// 	const faqRef = useRef(null);

// 	const handleClickOutside = (event: MouseEvent) => {
// 		const target = event.target as HTMLElement;

// 		if (faqRef.current && !target.closest(".content")) {
// 			setOpen(false);
// 		}
// 	};

// 	useEffect(() => {
// 		document.addEventListener("click", handleClickOutside);
// 		return () => {
// 			document.removeEventListener("click", handleClickOutside);
// 		};
// 	}, []);

// 	return (
// 		<div
// 			ref={faqRef}
// 			className='content rounded-lg bg-white shadow-1 dark:bg-gray-dark'
// 		>
// 			<button
// 				onClick={() => setOpen(!open)}
// 				className='flex w-full items-center justify-between gap-2 px-6 py-4'
// 			>
// 				<div>
// 					<h3 className='font-satoshi text-xl font-medium text-black dark:text-white'>
// 						{faq?.question}
// 					</h3>
// 				</div>
// 				<div className={`transition-transform ${open ? "rotate-180" : ""}`}>
// 					<svg
// 						width='24'
// 						height='24'
// 						viewBox='0 0 24 24'
// 						fill='none'
// 						className='dark:text-white'
// 						xmlns='http://www.w3.org/2000/svg'
// 					>
// 						<path
// 							fillRule='evenodd'
// 							clipRule='evenodd'
// 							d='M4.43057 8.51192C4.70014 8.19743 5.17361 8.161 5.48811 8.43057L12 14.0122L18.5119 8.43057C18.8264 8.16101 19.2999 8.19743 19.5695 8.51192C19.839 8.82642 19.8026 9.29989 19.4881 9.56946L12.4881 15.5695C12.2072 15.8102 11.7928 15.8102 11.5119 15.5695L4.51192 9.56946C4.19743 9.29989 4.161 8.82641 4.43057 8.51192Z'
// 							fill='currentColor'
// 						/>
// 					</svg>
// 				</div>
// 			</button>

// 			<div
// 				className={`border-t border-stroke px-6 pb-6 pt-7 duration-200 ease-in-out dark:border-stroke-dark ${
// 					open ? "block" : "hidden"
// 				}`}
// 			>
// 				<p className='dark:text-gray-4'>{faq?.answer}</p>
// 			</div>
// 		</div>
// 	);
// };

// export default FaqItem;

type PropsType = {
	faq: {
		id: number | string;
		question: string;
		answer: string;
	};
	handleFaqToggle: (id: number | string) => void;
	activeFaq: number | string;
};

export default function FaqItem({
	faq,
	handleFaqToggle,
	activeFaq,
}: PropsType) {
	const { id, question, answer } = faq;

	return (
		<>
			<div className='rounded-lg bg-white shadow-1 dark:bg-gray-dark'>
				<button
					onClick={() => {
						handleFaqToggle(id);
					}}
					className={`text-medium flex w-full items-center justify-between px-6 py-4 text-left text-lg text-dark dark:text-white md:text-xl`}
				>
					{question}

					<span
						className={`duration-300 ${activeFaq === id ? "rotate-180" : ""}`}
					>
						<svg
							width='24'
							height='25'
							viewBox='0 0 24 25'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M4.43057 8.87618C4.70014 8.56168 5.17361 8.52526 5.48811 8.79483L12 14.3765L18.5119 8.79483C18.8264 8.52526 19.2999 8.56168 19.5695 8.87618C19.839 9.19067 19.8026 9.66415 19.4881 9.93371L12.4881 15.9337C12.2072 16.1745 11.7928 16.1745 11.5119 15.9337L4.51192 9.93371C4.19743 9.66415 4.161 9.19067 4.43057 8.87618Z'
								fill='currentColor'
							/>
						</svg>
					</span>
				</button>
				<div
					className={`grid`}
					style={{
						gridTemplateRows: `${activeFaq === id ? "1fr" : "0fr"}`,
						transition: "grid-template-rows 300ms",
					}}
				>
					<div className={`overflow-hidden transition-all duration-300`}>
						<p
							className={`border-t border-stroke px-6 py-7 dark:border-stroke-dark`}
						>
							{answer}
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
