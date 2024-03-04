import React from "react";

const SectionHeader = ({
	title,
	description,
}: {
	title: string;
	description: string;
}) => {
	return (
		<div className='mx-auto mb-12.5 w-full max-w-[703px] px-4 text-center sm:px-8 lg:mb-17.5 xl:px-0'>
			<h2 className='mb-4.5 font-satoshi text-3xl font-bold -tracking-[1.6px] text-black dark:text-white lg:text-heading-4 xl:text-heading-2'>
				{title}
			</h2>

			<p className='mx-auto w-full max-w-[585px] dark:text-gray-4'>
				{description}
			</p>
		</div>
	);
};

export default SectionHeader;
