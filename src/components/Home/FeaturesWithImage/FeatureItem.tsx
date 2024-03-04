import { FeatureWithImg } from "@/types/featureWithImg";
import Image from "next/image";
import React from "react";

const FeatureItem = ({ data }: { data: FeatureWithImg }) => {
	return (
		<div
			className={`flex flex-col items-center justify-between gap-10 ${
				data?.id % 2 === 0
					? "pt-17.5 sm:flex-row-reverse lg:pt-22.5 xl:pt-27.5"
					: "sm:flex-row"
			}`}
		>
			<div className='w-full max-w-[475px]'>
				<h3 className='mb-4.5 font-satoshi text-2xl font-bold text-black dark:text-white lg:text-3xl xl:text-heading-4'>
					{data?.title}
				</h3>
				<p className='dark:text-gray-5'>{data?.description}</p>

				<ul className='mt-7.5 flex flex-col gap-3'>
					{data?.checklist?.map((list, key) => (
						<li key={key} className='flex items-center gap-3'>
							<span>
								<svg
									width='22'
									height='22'
									viewBox='0 0 22 22'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M20.1668 10.9999C20.1668 16.0625 16.0628 20.1666 11.0002 20.1666C5.93755 20.1666 1.8335 16.0625 1.8335 10.9999C1.8335 5.93731 5.93755 1.83325 11.0002 1.83325C16.0628 1.83325 20.1668 5.93731 20.1668 10.9999ZM14.6946 8.22212C14.9631 8.4906 14.9631 8.9259 14.6946 9.19439L10.1113 13.7777C9.84281 14.0462 9.40751 14.0462 9.13903 13.7777L7.30569 11.9444C7.03721 11.6759 7.03721 11.2406 7.30569 10.9721C7.57418 10.7036 8.00948 10.7036 8.27797 10.9721L9.62516 12.3193L11.6738 10.2707L13.7224 8.22212C13.9908 7.95363 14.4261 7.95363 14.6946 8.22212Z'
										fill='#573CFF'
									/>
								</svg>
							</span>
							{list}
						</li>
					))}
				</ul>
			</div>

			<div className='w-full max-w-[484px]'>
				<Image src={data?.image} alt={data?.title} width={484} height={400} />
			</div>
		</div>
	);
};

export default FeatureItem;
