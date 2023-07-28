import { Box, VStack } from "@chakra-ui/react";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import PhotoProvider from "./contexts/PhotoProvider";
import photos from "./photos";

function App() {
	return (
		<Box bg="gray.50">
			<Header />
			<Box maxWidth="1200px" margin="0 auto">
				<VStack spacing={1}>
					<PhotoProvider photos={photos}>
						<Portfolio />
					</PhotoProvider>
				</VStack>
			</Box>
		</Box>
	);
}

export default App;
