import { useCallback, useContext } from "react";
import { Photo } from "../types/Photo";
import PhotoContext from "../contexts/PhotoContext";
import CurrentIndexContext from "../contexts/CurrentIndexContext";

interface UsePhotoSelector {
	currentPhotoIndex: number;
	currentPhoto: Photo;
	showPreviousPhoto: () => void;
	showNextPhoto: () => void;
	selectPhoto: (index: number) => void;
}

export function usePhotoSelector(): UsePhotoSelector {
	const photos = useContext(PhotoContext);
	if (!photos) {
    throw new Error("usePhotoSelector must be used within a PhotoProvider");
  }
	const currentIndexState = useContext(CurrentIndexContext)
	if (!currentIndexState)
		throw new Error("usePhotoSelector must be used within a CurrentIndexProvider");

	const [currentPhotoIndex, setCurrentPhotoIndex] = currentIndexState;

	const showPreviousPhoto = useCallback(() => {
		setCurrentPhotoIndex((oldIndex) => {
			if (oldIndex === 0) {
				return photos.length - 1; // Loop back to the last photo
			} else {
				return oldIndex - 1;
			}
		});
	}, [photos, setCurrentPhotoIndex]);

	const showNextPhoto = useCallback(() => {
		setCurrentPhotoIndex((oldIndex) => {
			if (oldIndex === photos.length - 1) {
				return 0; // Loop back to the first photo
			} else {
				return oldIndex + 1;
			}
		});
	}, [photos, setCurrentPhotoIndex]);

	const selectPhoto = useCallback((index: number) => {
		setCurrentPhotoIndex(index);
	}, [setCurrentPhotoIndex]);

	return {
		currentPhotoIndex,
		currentPhoto: photos[currentPhotoIndex],
		showPreviousPhoto,
		showNextPhoto,
		selectPhoto,
	};
}