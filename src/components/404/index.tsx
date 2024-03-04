import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
	return (
		<section className='py-17.5 lg:py-22.5 xl:py-27.5 2xl:py-37.5'>
			<div className='mx-auto w-full max-w-[575px] px-4 sm:px-8 xl:px-0'>
				<div className='relative z-1 pt-[187px]'>
					<div className='absolute left-0 top-0 -z-1'>
						<Image
							src='/images/support/grid-404.svg'
							alt='grid'
							width={575}
							height={460}
							className='dark:opacity-20'
						/>
					</div>

					<div className='text-center'>
						<div className='mx-auto mb-10 flex h-22.5 w-full max-w-[90px] items-center justify-center rounded-full border border-stroke bg-white shadow-error'>
							<svg
								width='50'
								height='51'
								viewBox='0 0 50 51'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M24.9998 5.80566C14.3568 5.80566 5.729 14.4335 5.729 25.0765C5.729 35.7195 14.3568 44.3473 24.9998 44.3473C35.6428 44.3473 44.2707 35.7195 44.2707 25.0765C44.2707 14.4335 35.6428 5.80566 24.9998 5.80566ZM2.604 25.0765C2.604 12.7076 12.631 2.68066 24.9998 2.68066C37.3687 2.68066 47.3957 12.7076 47.3957 25.0765C47.3957 37.4454 37.3687 47.4723 24.9998 47.4723C12.631 47.4723 2.604 37.4454 2.604 25.0765ZM17.8194 34.2379C19.8452 32.7363 22.3228 31.8473 24.9998 31.8473C27.6769 31.8473 30.1544 32.7363 32.1803 34.2379C32.8735 34.7518 33.019 35.7303 32.5051 36.4236C31.9912 37.1169 31.0127 37.2623 30.3194 36.7484C28.802 35.6237 26.9705 34.9723 24.9998 34.9723C23.0292 34.9723 21.1977 35.6237 19.6803 36.7484C18.987 37.2623 18.0084 37.1169 17.4946 36.4236C16.9807 35.7303 17.1261 34.7518 17.8194 34.2379Z'
									fill='#0E172B'
								/>
								<path
									d='M33.3332 21.9515C33.3332 23.6774 32.4004 25.0765 31.2498 25.0765C30.0992 25.0765 29.1665 23.6774 29.1665 21.9515C29.1665 20.2256 30.0992 18.8265 31.2498 18.8265C32.4004 18.8265 33.3332 20.2256 33.3332 21.9515Z'
									fill='#0E172B'
								/>
								<path
									d='M20.8332 21.9515C20.8332 23.6774 19.9004 25.0765 18.7498 25.0765C17.5992 25.0765 16.6665 23.6774 16.6665 21.9515C16.6665 20.2256 17.5992 18.8265 18.7498 18.8265C19.9004 18.8265 20.8332 20.2256 20.8332 21.9515Z'
									fill='#0E172B'
								/>
							</svg>
						</div>

						<h1 className='mb-5 font-satoshi text-heading-4 font-bold -tracking-[1.6px] text-black dark:text-white lg:text-heading-2'>
							Page not found
						</h1>

						<p className='mx-auto mb-10 w-full max-w-[355px]'>
							The page you are looking for doesn’t exist. Here are some helpful
							links:
						</p>

						<div className='flex flex-wrap items-center justify-center gap-3'>
							<Link
								href='/'
								className='inline-flex items-center gap-2 rounded-full border border-stroke bg-white px-6 py-3 font-satoshi font-medium text-black duration-200 ease-out hover:bg-gray'
							>
								<svg
									className='fill-current'
									width='21'
									height='21'
									viewBox='0 0 21 21'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M9.27544 4.63472C9.51952 4.8788 9.51952 5.27452 9.27544 5.5186L5.34238 9.45166H17.1668C17.512 9.45166 17.7918 9.73148 17.7918 10.0767C17.7918 10.4218 17.512 10.7017 17.1668 10.7017H5.34238L9.27544 14.6347C9.51952 14.8788 9.51952 15.2745 9.27544 15.5186C9.03136 15.7627 8.63563 15.7627 8.39155 15.5186L3.39155 10.5186C3.14748 10.2745 3.14748 9.8788 3.39155 9.63472L8.39155 4.63472C8.63563 4.39064 9.03136 4.39064 9.27544 4.63472Z'
									/>
								</svg>
								Go back
							</Link>

							<Link
								href='/'
								className='inline-flex rounded-full bg-primary px-7 py-3 font-satoshi font-medium text-white hover:bg-primary-dark'
							>
								Take me home
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NotFound;
