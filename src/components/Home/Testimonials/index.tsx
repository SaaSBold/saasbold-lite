import SectionHeader from "@/components/Common/SectionHeader";
import TestimonialItem from "./TestimonialItem";
import testimonialData from "./testmonialsData";
const Testimonials = () => {
	return (
		<section className='relative z-1 overflow-hidden bg-gray-1 py-17.5 dark:bg-black lg:py-22.5 xl:py-27.5'>
			{/* <!-- section title --> */}
			<SectionHeader
				title={"Loved by businesses worldwide."}
				description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum dictum euismod malesuada lacus, non consequat quam'
			/>

			<div className='relative z-1 mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0'>
				<div className='grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-3'>
					{/* <!-- 1st Column --> */}
					{testimonialData?.map((group, key) => {
						return (
							<div key={key} className='flex flex-col gap-7.5'>
								{group?.map((item, key) => (
									<TestimonialItem data={item} key={key} />
								))}
							</div>
						);
					})}
					{/* <div className='flex flex-col gap-7.5'></div> */}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
