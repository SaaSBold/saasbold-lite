export type Price = {
	stripePriceId?: string;
	stripeSubscriptionId?: string;
	stripeCurrentPeriodEnd?: Date;
	stripeCustomerId?: string;
	isSubscribed?: boolean;
	isCanceled?: boolean;
	unit_amount: number;
	nickname: string;
	description: string;
	subtitle: string;
	includes: string[];
	icon: string;
	icon2?: string;
	active?: boolean;
};
