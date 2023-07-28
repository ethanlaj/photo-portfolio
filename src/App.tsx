import { Box, VStack } from "@chakra-ui/react";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <Box maxWidth="1200px" margin="0 auto">
      <VStack spacing={10}>
        <Header />
        <Portfolio />
      </VStack>
    </Box>
  );
}

export default App;
