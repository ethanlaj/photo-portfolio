export type UnmappedPhoto = {
	name: string;
	assignment: string;
	path: string;
}

export type Photo = UnmappedPhoto & {
	src: string;
}