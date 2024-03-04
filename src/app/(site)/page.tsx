import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: `Full-Stack SaaS Boilerplate for Next.js - SaaSBold Demo`,
	description: `A full-stack SaaS boilerplate and starter kit comes with all essential integrations, pages, components, user/admin dashboards, landing page, design source and everything you need to turn your feature-rich SaaS startup idea into reality in a day!`,
	openGraph: {
		type: "website",
		title: `Full-Stack SaaS Boilerplate for Next.js - SaaSBold Demo`,
		description: `A full-stack SaaS boilerplate and starter kit comes with all essential integrations, pages, components, user/admin dashboards, landing page, design source and everything you need to turn your feature-rich SaaS startup idea into reality in a day!`,
		images:
			"https://ucarecdn.com/4b0ffd0e-90b0-4a59-b63c-f5ecee0ae575/saasbold.jpg",
	},
	twitter: {
		card: "summary_large_image",
		title: `Full-Stack SaaS Boilerplate for Next.js - SaaSBold Demo`,
		description: `A full-stack SaaS boilerplate and starter kit comes with all essential integrations, pages, components, user/admin dashboards, landing page, design source and everything you need to turn your feature-rich SaaS startup idea into reality in a day!`,
		images:
			"https://ucarecdn.com/4b0ffd0e-90b0-4a59-b63c-f5ecee0ae575/saasbold.jpg",
	},
};

export default function HomePage() {
	return (
		<main>
			<Home />
		</main>
	);
}
