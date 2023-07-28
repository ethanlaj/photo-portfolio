import { useContext } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Photo from "./Photo";
import PhotoContext from "../contexts/PhotoContext";
import { usePhotoSelector } from "../hooks/usePhotoSelector";

const PhotoGrid = () => {
	const photos = useContext(PhotoContext);
	const { currentPhotoIndex, selectPhoto } = usePhotoSelector();

	return (
		<Flex wrap="wrap" justify="center" p={1} gap={2}>
			{photos?.map((photo, index) => (
				<Box
					boxSize="80px"
					border={
						currentPhotoIndex === index ? "2px solid teal" : "2px solid transparent"
					}
					onClick={() => selectPhoto(index)}
					key={index}
				>
					<Photo src={photo.src} alt="Photo thumbnail" />
				</Box>
			))}
		</Flex>
	);
};

export default PhotoGrid;
