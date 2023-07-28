import { Box, Image, Button, VStack, Flex, AspectRatio, HStack } from "@chakra-ui/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import { Photo } from "../types/Photo";

interface Props {
	photos: Photo[];
}

function PhotoPresenter({ photos }: Props) {
	const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

	function showPreviousPhoto() {
		setCurrentPhotoIndex((oldIndex) => {
			if (oldIndex === 0) {
				return photos.length - 1; // Loop back to the last photo
			} else {
				return oldIndex - 1;
			}
		});
	}

	function showNextPhoto() {
		setCurrentPhotoIndex((oldIndex) => {
			if (oldIndex === photos.length - 1) {
				return 0; // Loop back to the first photo
			} else {
				return oldIndex + 1;
			}
		});
	}

	function selectPhoto(index: number) {
		setCurrentPhotoIndex(index);
	}

	function src(photo: Photo) {
		return "/" + photo.assignment + "/" + photo.path;
	}

	return (
		<VStack spacing={4}>
			<VStack>
				<Image
					maxHeight={"500"}
					src={src(photos[currentPhotoIndex])}
					alt="Displayed photo"
				/>
				<HStack>
					<Button onClick={showPreviousPhoto} leftIcon={<FaArrowLeft />} />
					<Button onClick={showNextPhoto} rightIcon={<FaArrowRight />} />
				</HStack>
			</VStack>

			<Flex wrap="wrap" justify="center" p={1} rowGap={2}>
				{photos.map((photo, index) => (
					<Box
						boxSize="80px"
						border={
							currentPhotoIndex === index ? "2px solid teal" : "2px solid transparent"
						}
						onClick={() => selectPhoto(index)}
						key={index}
					>
						<AspectRatio ratio={16 / 9} maxW="80px">
							<Image src={src(photo)} alt={`Photo thumbnail ${index + 1}`} />
						</AspectRatio>
					</Box>
				))}
			</Flex>
		</VStack>
	);
}

export default PhotoPresenter;
