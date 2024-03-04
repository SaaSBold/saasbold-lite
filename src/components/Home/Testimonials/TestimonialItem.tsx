import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const TestimonialItem = ({ data }: { data: Testimonial }) => {
	return (
		<div className='rounded-2xl bg-white p-[35px] shadow-testimonial hover:shadow-testimonial-2 dark:bg-gray-dark'>
			<div className='flex items-center gap-4'>
				<div className='h-15 w-full max-w-[60px] overflow-hidden rounded-full'>
					<Image src={data?.image} alt='author' width={60} height={60} />
				</div>
				<div className='w-full'>
					<h3 className='font-satoshi text-lg font-medium -tracking-[0.2px] text-black dark:text-white'>
						{data?.name}
					</h3>
					<p className='font-medium dark:text-gray-4'>{data?.role}</p>
				</div>
			</div>

			{/* <!-- divider --> */}
			<div className='my-6 h-px w-full bg-stroke dark:bg-stroke-dark'></div>

			<p className='dark:text-gray-5'>“{data?.text},,</p>
		</div>
	);
};

export default TestimonialItem;
