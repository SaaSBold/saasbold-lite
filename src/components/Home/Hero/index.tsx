import Image from "next/image";
import React from "react";
import brandData from "./brandData";
import Link from "next/link";

const Hero = () => {
	return (
		<section className='relative z-1 overflow-hidden pb-17.5 pt-30 lg:pb-20 lg:pt-30 xl:pb-25 xl:pt-[170px]'>
			<div className='mx-auto w-full max-w-[740px] px-4 text-center sm:px-8 xl:px-0'>
				<h1 className='mb-5 font-satoshi text-heading-4 font-bold -tracking-[1.6px] text-black dark:text-white lg:text-heading-2 xl:text-[58px] xl:leading-[1.12]'>
					Full-Stack{" "}
					<span className='relative text-primary'>
						SaaS Boilerplate
						<span className='absolute bottom-0.5 left-0 h-2 w-full pl-1 pr-2'>
							<svg
								className='fill-current'
								width='106%'
								height='100%'
								viewBox='0 0 100 7'
								preserveAspectRatio='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M100 2.49998C100 1.50001 100 2.5 100 1.50001C64.2857 -0.240394 17.4603 3.99028 0 6.05927L0 2.05807C17.4603 0.641568 64.2857 0 100 2.49998Z'
								/>
							</svg>
						</span>
					</span>{" "}
					Built on Next.js
				</h1>

				<p className='mx-auto mb-7.5 w-full max-w-[580px] text-lg -tracking-[0.2px] dark:text-gray-5'>
					A full-stack SaaS boilerplate and starter kit comes with all essential
					integrations, pages, components, user/admin dashboards, landing page,
					design source and everything you need to turn your feature-rich SaaS
					startup idea into reality in a day!
				</p>

				<Link
					href='#'
					className='inline-flex items-center gap-4 rounded-full bg-black py-2 pl-7.5 pr-2 font-satoshi font-medium text-white hover:bg-opacity-90 dark:bg-primary'
				>
					<span> Try Demo </span>
					<span className='inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white dark:bg-white dark:text-primary'>
						<svg
							className='fill-current'
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M7.5 5.625C7.15482 5.625 6.875 5.34518 6.875 5C6.875 4.65482 7.15482 4.375 7.5 4.375H15C15.3452 4.375 15.625 4.65482 15.625 5V12.5C15.625 12.8452 15.3452 13.125 15 13.125C14.6548 13.125 14.375 12.8452 14.375 12.5V6.50888L5.44194 15.4419C5.19786 15.686 4.80214 15.686 4.55806 15.4419C4.31398 15.1979 4.31398 14.8021 4.55806 14.5581L13.4911 5.625H7.5Z'
							/>
						</svg>
					</span>
				</Link>
			</div>

			{/* <!-- Hero brands --> */}
			<div className='mx-auto mt-20 w-full max-w-[1170px] px-4 sm:px-8 lg:mt-25 xl:mt-32.5 xl:px-0'>
				<h2 className='text-center font-satoshi text-lg font-medium text-black dark:text-white'>
					Built by the same team behind numerous successful SaaS and digital
					products
				</h2>

				<div className='mt-9 flex flex-wrap items-center justify-center gap-7.5 xl:gap-16'>
					{/* <!-- brand item --> */}
					{brandData?.map((brand, key) => (
						<Link
							key={key}
							href={brand.link}
							aria-label={brand.name}
							className='text-dark-4 duration-300 ease-in-out hover:text-dark-3 dark:hover:text-white'
						>
							{brand.image}
						</Link>
					))}
				</div>
			</div>

			{/* <!-- Hero Bg Shapes --> */}
			<div className='hidden sm:block'>
				<div className='absolute left-0 top-0 -z-1'>
					<Image
						src='/images/hero/hero-shape-01.svg'
						alt='shape'
						width={340}
						height={480}
					/>
				</div>
				<div className='absolute right-0 top-0 -z-1'>
					<Image
						src='/images/hero/hero-shape-02.svg'
						alt='shape'
						width={425}
						height={682}
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
