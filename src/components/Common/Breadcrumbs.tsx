import Link from "next/link";
import React from "react";

const Breadcrumbs = ({ title, pages }: { title: string; pages: string[] }) => {
	return (
		<div className='pb-17.5 text-center'>
			<h1 className='mb-4 font-satoshi text-3xl font-bold -tracking-[1px] text-black dark:text-white'>
				{title}
			</h1>

			<ul className='flex items-center justify-center gap-2'>
				<li>
					<Link className='dark:text-gray-5' href='/'>
						{pages[0]}
					</Link>
				</li>
				{pages?.slice(1).map((page, index) => (
					<li className='dark:text-gray-5' key={index}>
						/ {page}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Breadcrumbs;
