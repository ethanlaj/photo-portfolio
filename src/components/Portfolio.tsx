import { Box, VStack } from "@chakra-ui/react";
import PhotoPresenter from "./PhotoPresenter";
import PhotoGrid from "./PhotoGrid";
import CurrentIndexProvider from "../contexts/CurrentIndexProvider";

function Portfolio() {
	return (
		<Box id="portfolio" p={5}>
			<VStack spacing={4}>
				<CurrentIndexProvider>
					<PhotoPresenter />
					<PhotoGrid />
				</CurrentIndexProvider>
			</VStack>
		</Box>
	);
}

export default Portfolio;
