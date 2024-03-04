import React from "react";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className='relative z-1 mt-auto overflow-hidden bg-black py-17.5 lg:py-22.5 xl:py-27.5'>
			<div className='mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0'>
				{/* <!-- footer menu start --> */}
				<div className='flex flex-wrap gap-10 lg:justify-between xl:flex-nowrap xl:gap-20'>
					<div className='w-full max-w-[275px]'>
						<a href='index.html'>
							<Image
								src='/images/logo/logo-light.svg'
								alt='Logo'
								width={214}
								height={40}
							/>
						</a>
						<p className='mt-5 text-gray-5'>
							© Your SaaS - Demo SaaS website created using SaaSBold
						</p>

						<ul className='mt-11 flex items-center gap-2'>
							<li>
								<a
									href='#'
									aria-label='Twitter Social Link'
									className='flex duration-200 ease-out hover:text-white'
								>
									<svg
										className='fill-current'
										width='32'
										height='32'
										viewBox='0 0 32 32'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path d='M13.063 9L16.558 13.475L20.601 9H23.055L17.696 14.931L24 23H19.062L15.196 18.107L10.771 23H8.316L14.051 16.658L8 9H13.063ZM12.323 10.347H10.866L19.741 21.579H21.101L12.323 10.347Z' />
									</svg>
								</a>
							</li>

							<li>
								<a
									href='#'
									aria-label='Dev Social Link'
									className='flex duration-200 ease-out hover:text-white'
								>
									<svg
										className='fill-current'
										width='32'
										height='32'
										viewBox='0 0 32 32'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path d='M12.29 14.3C12.1722 14.2039 12.026 14.1494 11.874 14.145H11.251V17.872H11.874C12.0261 17.8674 12.1724 17.8125 12.29 17.716C12.3606 17.6615 12.4166 17.5905 12.4533 17.5093C12.4899 17.428 12.5059 17.3389 12.5 17.25V14.762C12.5049 14.6738 12.4884 14.5856 12.4518 14.5052C12.4152 14.4247 12.3597 14.3543 12.29 14.3ZM22.432 8H9.568C8.704 8 8.002 8.7 8 9.564V22.436C8.00106 22.8512 8.16673 23.249 8.46067 23.5422C8.75461 23.8354 9.15283 24 9.568 24H22.432C23.296 24 23.998 23.3 24 22.436V9.564C23.9989 9.14883 23.8333 8.75103 23.5393 8.45784C23.2454 8.16465 22.8472 8 22.432 8ZM13.507 17.257C13.5152 17.4842 13.4758 17.7106 13.3914 17.9216C13.307 18.1327 13.1794 18.3238 13.0168 18.4826C12.8542 18.6415 12.6601 18.7646 12.4471 18.844C12.2342 18.9235 12.0069 18.9575 11.78 18.944H10.123V13.035H11.815C12.0392 13.0265 12.2628 13.0643 12.4718 13.1461C12.6807 13.2279 12.8705 13.352 13.0293 13.5105C13.1882 13.669 13.3125 13.8586 13.3947 14.0674C13.4769 14.2762 13.5151 14.4998 13.507 14.724V17.257ZM17.1 14.09H15.2V15.462H16.363V16.519H15.2V17.89H17.1V18.946H14.883C14.7884 18.9487 14.6943 18.9327 14.6059 18.8989C14.5175 18.8652 14.4367 18.8144 14.3679 18.7493C14.2992 18.6843 14.244 18.6064 14.2054 18.5201C14.1668 18.4337 14.1456 18.3406 14.143 18.246V13.775C14.1382 13.5843 14.2091 13.3994 14.3403 13.2609C14.4715 13.1224 14.6523 13.0415 14.843 13.036H17.1V14.09ZM20.8 18.208C20.329 19.308 19.484 19.088 19.106 18.208L17.734 13.036H18.9L19.958 17.1L21.014 13.038H22.178L20.8 18.208Z' />
									</svg>
								</a>
							</li>

							<li>
								<a
									href='#'
									aria-label='Github Social Link'
									className='flex duration-200 ease-out hover:text-white'
								>
									<svg
										className='fill-current'
										width='32'
										height='32'
										viewBox='0 0 32 32'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path d='M16 8.19995C11.6 8.19995 8 11.8 8 16.2C8 19.7 10.3 22.7 13.5 23.8C13.9 23.9 14 23.6 14 23.4V22C11.8 22.5 11.3 21 11.3 21C10.9 20.1 10.4 19.8 10.4 19.8C9.7 19.3 10.5 19.3 10.5 19.3C11.3 19.4 11.7 20.1 11.7 20.1C12.4 21.4 13.6 21 14 20.8C14.1 20.3 14.3 19.9 14.5 19.7C12.7 19.5 10.9 18.8 10.9 15.7C10.9 14.8 11.2 14.1 11.7 13.6C11.6 13.4 11.3 12.6 11.8 11.5C11.8 11.5 12.5 11.3 14 12.3C14.6 12.1 15.3 12 16 12C16.7 12 17.4 12.1 18 12.3C19.5 11.3 20.2 11.5 20.2 11.5C20.6 12.6 20.4 13.4 20.3 13.6C20.8 14.2 21.1 14.9 21.1 15.7C21.1 18.8 19.2 19.4 17.4 19.6C17.7 20 18 20.5 18 21.2V23.4C18 23.6 18.1 23.9 18.6 23.8C21.8 22.7 24.1 19.7 24.1 16.2C24 11.8 20.4 8.19995 16 8.19995Z' />
									</svg>
								</a>
							</li>
						</ul>
					</div>

					<div className='flex w-full flex-col justify-between gap-10 sm:w-auto sm:flex-row xl:gap-20'>
						<div className='w-full sm:w-auto'>
							<h2 className='mb-5 font-satoshi text-lg font-bold -tracking-[0.2px] text-white'>
								Products
							</h2>

							<ul className='flex flex-col gap-3'>
								<li>
									<a
										className='text-gray-5 duration-200 ease-out hover:text-white'
										href='#'
									>
										Features
									</a>
								</li>
								<li>
									<a
										className='text-gray-5 duration-200 ease-out hover:text-white'
										href='#'
									>
										Integrations
									</a>
								</li>
								<li>
									<a
										className='text-gray-5 duration-200 ease-out hover:text-white'
										href='#'
									>
										Pricing & Plans
									</a>
								</li>
								<li>
									<a
										className='text-gray-5 duration-200 ease-out hover:text-white'
										href='#'
									>
										Changelog
									</a>
								</li>
							</ul>
						</div>

						<div className='w-full sm:w-auto'>
							<h2 className='mb-5 font-satoshi text-lg font-bold -tracking-[0.2px] text-white'>
								Resources
							</h2>

							<ul className='flex flex-col gap-3'>
								<li>
									<a
										className='text-gray-5 duration-200 ease-out hover:text-white'
										href='#'
									>
										Our Blog
									</a>
								</li>
								<li>
									<a
										className='text-gray-5 duration-200 ease-out hover:text-white'
										href='#'
									>
										Heatmaps
									</a>
								</li>
								<li>
									<a
										className='text-gray-5 duration-200 ease-out hover:text-white'
										href='#'
									>
										Affiliate Program
									</a>
								</li>
								<li>
									<a
										className='text-gray-5 duration-200 ease-out hover:text-white'
										href='#'
									>
										Integrations
									</a>
								</li>
							</ul>
						</div>

						<div className='w-full sm:w-auto'>
							<h2 className='mb-5 font-satoshi text-lg font-bold -tracking-[0.2px] text-white'>
								Products
							</h2>

							<ul className='flex flex-col gap-3'>
								<li>
									<a
										className='text-gray-5 duration-200 ease-out hover:text-white'
										href='#'
									>
										Features
									</a>
								</li>
								<li>
									<a
										className='text-gray-5 duration-200 ease-out hover:text-white'
										href='#'
									>
										Integrations
									</a>
								</li>
								<li>
									<a
										className='text-gray-5 duration-200 ease-out hover:text-white'
										href='#'
									>
										Pricing & Plans
									</a>
								</li>
								<li>
									<a
										className='text-gray-5 duration-200 ease-out hover:text-white'
										href='#'
									>
										Changelog
									</a>
								</li>
							</ul>
						</div>

						<div className='w-full sm:w-auto'>
							<h2 className='mb-5 font-satoshi text-lg font-bold -tracking-[0.2px] text-white'>
								Company
							</h2>

							<ul className='flex flex-col gap-3'>
								<li>
									<a
										className='text-gray-5 duration-200 ease-out hover:text-white'
										href='#'
									>
										About Us
									</a>
								</li>
								<li>
									<a
										className='text-gray-5 duration-200 ease-out hover:text-white'
										href='#'
									>
										Our Story
									</a>
								</li>
								<li>
									<a
										className='text-gray-5 duration-200 ease-out hover:text-white'
										href='#'
									>
										Work With Us
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				{/* <!-- footer menu end --> */}
			</div>

			{/* <!-- bg shapes --> */}
			<div className='hidden sm:block'>
				<div className='absolute bottom-0 left-0 -z-1'>
					<Image
						src='/images/footer/footer-grid-01.svg'
						alt='grid'
						width={305}
						height={305}
					/>
				</div>
				<div className='absolute right-0 top-0 -z-1'>
					<Image
						src='/images/footer/footer-grid-02.svg'
						alt='grid'
						width={305}
						height={305}
					/>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
