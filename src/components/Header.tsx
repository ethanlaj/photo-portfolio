import { Flex, Heading, useColorModeValue } from "@chakra-ui/react";

function Header() {
  const bg = useColorModeValue('teal.400', 'blue.900');
  const color = useColorModeValue('black', 'white');

  return (
    <Flex as="nav" py={4} px={8} bg={bg} color={color} align="center" justify="space-between">
      <Heading size="lg">My Photography Portfolio</Heading>
    </Flex>
  );
}

export default Header;
