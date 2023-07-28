import { Box, Image, Button, VStack, Flex, HStack } from "@chakra-ui/react";
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
				return photos.length - 1;
			} else {
				return oldIndex - 1;
			}
		});
	}

	function showNextPhoto() {
		setCurrentPhotoIndex((oldIndex) => {
			if (oldIndex === photos.length - 1) {
				return 0;
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
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				width="100%"
				height="500px"
				backgroundColor="white"
			>
				<Image
					boxSize="100%"
					objectFit="contain"
					src={src(photos[currentPhotoIndex])}
					alt="Displayed photo"
				/>
			</Box>

			<HStack>
				<Button onClick={showPreviousPhoto} leftIcon={<FaArrowLeft />} />
				<Button onClick={showNextPhoto} rightIcon={<FaArrowRight />} />
			</HStack>

			<Flex wrap="wrap" justify="center" p={1} gap={2}>
				{photos.map((photo, index) => (
					<Box
						boxSize="80px"
						border={
							currentPhotoIndex === index ? "2px solid teal" : "2px solid transparent"
						}
						onClick={() => selectPhoto(index)}
						key={index}
					>
						<Image
							boxSize="100%"
							objectFit="cover"
							src={src(photo)}
							alt={`Photo thumbnail ${index + 1}`}
						/>
					</Box>
				))}
			</Flex>
		</VStack>
	);
}

export default PhotoPresenter;
