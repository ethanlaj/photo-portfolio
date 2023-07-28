import { Box } from "@chakra-ui/react";
import PresenterArrows from "./PresenterArrows";
import Photo from "./Photo";
import { usePhotoSelector } from "../hooks/usePhotoSelector";

function PhotoPresenter() {
	const { currentPhoto, currentPhotoIndex } = usePhotoSelector();

	return (
		<>
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				width="100%"
				height="500px"
				backgroundColor="white"
			>
				<Photo key={currentPhotoIndex} src={currentPhoto.src} alt="Displayed photo" />
			</Box>

			<PresenterArrows />
		</>
	);
}

export default PhotoPresenter;
