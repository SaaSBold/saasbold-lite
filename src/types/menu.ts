export type Menu = {
	id: number;
	title: string;
	newTab?: boolean;
	path?: string;
	submenu?: Submenu[];
};

export type Submenu = {
	id: number;
	title: string;
	newTab?: boolean;
	path: string;
};
