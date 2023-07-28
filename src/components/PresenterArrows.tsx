import { Button, HStack } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { usePhotoSelector } from "../hooks/usePhotoSelector";

const PresenterArrows = () => {
	const { showPreviousPhoto, showNextPhoto } = usePhotoSelector();

	return (
		<HStack>
			<Button onClick={showPreviousPhoto} leftIcon={<FaArrowLeft />} />
			<Button onClick={showNextPhoto} rightIcon={<FaArrowRight />} />
		</HStack>
	);
};

export default PresenterArrows;
