type PropsType = {
	title: string;
	center?: boolean;
	largePara?: boolean;
	paragraph: string;
	width?: string;
	paraWidth?: string;
	titleWidth?: string;
	marginBottom?: string;
};

export default function SectionTitleH2(props: PropsType) {
	const {
		title,
		center,
		largePara,
		paragraph,
		width,
		paraWidth,
		titleWidth,
		marginBottom = "70px",
	} = props;
	return (
		<div
			className={`${center ? "mx-auto text-center" : ""}`}
			style={{ maxWidth: width, marginBottom: marginBottom }}
		>
			<h2
				className={`mb-4.5 text-4xl font-black tracking-[-.5px] text-dark dark:text-white md:text-[44px]/[50px]`}
				style={{ maxWidth: titleWidth }}
			>
				{title}
			</h2>
			<p
				className={`${
					largePara ? "text-base md:text-lg" : "text-base"
				} text-body dark:text-gray-4 ${paraWidth && center ? "mx-auto" : ""}`}
				style={{ maxWidth: paraWidth }}
			>
				{paragraph}
			</p>
		</div>
	);
}
