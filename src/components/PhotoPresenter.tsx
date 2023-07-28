import { Box, Text } from "@chakra-ui/react";
import PresenterArrows from "./PresenterArrows";
import Photo from "./Photo";
import { usePhotoSelector } from "../hooks/usePhotoSelector";

function PhotoPresenter() {
	const { currentPhoto, currentPhotoIndex } = usePhotoSelector();

	return (
		<>
			<Box
				display="flex"
				flexDirection="column"
				justifyContent="center"
				alignItems="center"
				width="100%"
				height="500px"
			>
				<Photo key={currentPhotoIndex} src={currentPhoto.src} alt="Displayed photo" />
			</Box>
			<Box display="flex" flexDirection="column" alignItems="center" rowGap={5}>
				<Box display="flex" flexDirection="column" alignItems="center">
					<Text visibility={currentPhoto.name == null ? "hidden" : "unset"}>
						"{currentPhoto.name}"
					</Text>
					<Text>{currentPhoto.assignment}</Text>
				</Box>
				<PresenterArrows />
			</Box>
		</>
	);
}

export default PhotoPresenter;
