import { Flex, Heading } from "@chakra-ui/react";

function Header() {
	return (
		<Flex
			as="nav"
			w="100%"
			py={4}
			px={{ base: 4, md: 8 }}
			bg="gray.200"
			color="gray.700"
			align="center"
			justify="space-between"
			boxShadow={"sm"}
		>
			<Heading size="lg">Photography by Ethan Lajeunesse</Heading>
		</Flex>
	);
}

export default Header;
