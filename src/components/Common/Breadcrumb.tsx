import Link from "next/link";

export default function Breadcrumb({ pageTitle }: { pageTitle: string }) {
	return (
		<section className='relative z-10 overflow-x-clip pb-[70px] pt-[140px]'>
			<div className='container mx-auto w-full max-w-[1170px]'>
				<div className='text-center'>
					<h2 className='mb-4.5 font-satoshi text-3xl font-bold tracking-[-1px] text-dark dark:text-white'>
						{pageTitle}
					</h2>
					<ol className='flex items-center justify-center'>
						<li>
							<Link href='/' className='text-base text-body dark:text-gray-5'>
								Home
							</Link>
						</li>
						<li className='relative text-base text-body before:mx-2 before:inline-block before:px-2 before:content-["/"] dark:text-gray-5'>
							{pageTitle}
						</li>
					</ol>
				</div>
			</div>

			<div className='absolute -right-[125px] top-1/2 -z-10 aspect-square w-full max-w-[250px] -translate-y-1/2 rounded-full bg-[#3FB9FA] opacity-50 blur-[150px]'></div>
		</section>
	);
}
