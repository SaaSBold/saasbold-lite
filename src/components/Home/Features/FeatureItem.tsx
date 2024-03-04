import { FeatureItem } from "@/types/featureItem";
import Image from "next/image";
import React from "react";

const FeatureItem = ({ data }: { data: FeatureItem }) => {
	return (
		<div className='rounded-[15px] bg-white p-[35px] shadow-1 hover:shadow-features dark:bg-gray-dark'>
			<Image src={data.icon} alt={data?.title} width={40} height={40} />
			<h3 className='mb-4.5 mt-7.5 font-satoshi text-2xl font-bold text-dark dark:text-white'>
				{data.title}
			</h3>
			<p className='dark:text-gray-5'>{data.description}</p>
		</div>
	);
};

export default FeatureItem;
