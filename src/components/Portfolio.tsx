import { Box } from "@chakra-ui/react";
import PhotoPresenter from "./PhotoPresenter";
import photos from "../photos";

const sortOrder = [
	"Compositional Scavenger Hunt",
	"Environmental Portrait",
	"Animal",
	"Photo Walk",
	"Architecture",
	"Artistic Expression",
	"Still Life",
	"Symmetry Challenge",
	"Black and White",
	"Signs Challenge",
	"Natural Frames Challenge",
	"Hands in Frame Challenge",
	"Light Painting",
	"Shutter Priority",
	"Aperture Priority",
]

function Portfolio() {
	const sortedPhotos = photos.sort((a, b) => sortOrder.indexOf(a.assignment) - sortOrder.indexOf(b.assignment));

	return (
		<Box id="portfolio" p={5}>
			<PhotoPresenter photos={sortedPhotos} />
		</Box>
	);
}

export default Portfolio;
