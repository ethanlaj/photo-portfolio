import { Image } from "@chakra-ui/react";

interface Props {
	src: string;
	alt: string;
}

const Photo = ({ src, alt }: Props) => {
	return (
			<Image
				boxSize="100%"
				objectFit="contain"
				src={src}
				alt={alt}
			/>
	);
};

export default Photo;
