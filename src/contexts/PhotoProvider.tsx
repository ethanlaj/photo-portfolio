import React from "react";
import { Photo, UnmappedPhoto } from "../types/Photo";
import PhotoContext from "./PhotoContext";

interface Props {
	photos: UnmappedPhoto[];
	children: React.ReactNode;
}

function src(photo: UnmappedPhoto) {
	return "/" + photo.assignment + "/" + photo.path;
}

const PhotoProvider = ({ photos, children }: Props) => {
	const mappedPhotos: Photo[] = photos.map((photo) => ({
		...photo,
		src: src(photo),
	}));

	return <PhotoContext.Provider value={mappedPhotos}>{children}</PhotoContext.Provider>;
};

export default PhotoProvider;
