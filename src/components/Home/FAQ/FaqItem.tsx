
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
					className={`text-medium flex w-full items-center justify-between px-6 py-4 text-left text-lg text-dark dark:text-white md:text-xl cursor-pointer`}
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
