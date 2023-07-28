import { Box, VStack } from "@chakra-ui/react";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import PhotoProvider from "./contexts/PhotoProvider";
import photos from "./photos";

function App() {
	return (
		<Box maxWidth="1200px" margin="0 auto">
			<VStack spacing={10}>
				<PhotoProvider photos={photos}>
					<Header />
					<Portfolio />
				</PhotoProvider>
			</VStack>
		</Box>
	);
}

export default App;
