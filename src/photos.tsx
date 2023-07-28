import { UnmappedPhoto } from "./types/Photo";

const sortOrder = [
	"Compositional Scavenger Hunt",
	"Environmental Portrait",
	"Pet or Animal",
	"Photo Walk",
	"Architecture",
	"Artistic Expression",
	"Still Life",
	"Symmetry Challenge",
	"Black and White Challenge",
	"Signs Challenge",
	"Natural Frames Challenge",
	"Hands in Frame Challenge",
	"Light Painting",
	"Shutter Priority",
	"Aperture Priority",
];

const photos: UnmappedPhoto[] = [
	{
		name: "Quack in the Park",
		assignment: "Pet or Animal",
		path: "IMG_9857.jpg",
	},
	{
		assignment: "Architecture",
		path: "Lajeunesse-CU-IMG_0705.JPG",
	},
	{
		assignment: "Architecture",
		path: "Lajeunesse-FS-IMG_0671.JPG",
	},
	{
		assignment: "Architecture",
		path: "Lajeunesse-MS-IMG_0726.jpg",
	},
	{
		name: "Journey Through Shades",
		assignment: "Artistic Expression",
		path: "Lajeunesse-IMG_1536.jpg",
	},
	{
		name: "Through the Arches",
		assignment: "Black and White Challenge",
		path: "IMG_1310.JPG",
	},
	{
		assignment: "Composition Scavenger Hunt",
		path: "Lajeunesse-1-IMG_9252.jpeg",
	},
	{
		assignment: "Composition Scavenger Hunt",
		path: "Lajeunesse-2-IMG_9362.jpeg",
	},
	{
		assignment: "Composition Scavenger Hunt",
		path: "Lajeunesse-3-IMG_9233.jpeg",
	},
	{
		assignment: "Composition Scavenger Hunt",
		path: "Lajeunesse-4-IMG_9276.jpeg",
	},
	{
		assignment: "Composition Scavenger Hunt",
		path: "Lajeunesse-6-IMG_9280.jpeg",
	},
	{
		assignment: "Composition Scavenger Hunt",
		path: "Lajeunesse-7-IMG_9290.jpeg",
	},
	{
		assignment: "Composition Scavenger Hunt",
		path: "Lajeunesse-9-IMG_9260.jpeg",
	},
	{
		assignment: "Composition Scavenger Hunt",
		path: "Lajeunesse-10-IMG_9341.jpeg",
	},
	{
		assignment: "Aperture Priority",
		path: "IMG_9792.jpg",
	},
	{
		name: "Resting Rider",
		assignment: "Environmental Portrait",
		path: "IMG_9755.JPG",
	},
	{
		assignment: "Light Painting",
		path: "IMG_2080.jpeg",
	},
	{
		assignment: "Light Painting",
		path: "IMG_2092.jpeg",
	},
	{
		assignment: "Light Painting",
		path: "IMG_2098.jpeg",
	},
	{
		assignment: "Light Painting",
		path: "IMG_2102.jpeg",
	},
	{
		assignment: "Light Painting",
		path: "IMG_2104.jpeg",
	},
	{
		name: "Life From Ashes",
		assignment: "Natural Frames Challenge",
		path: "IMG_1207.JPG",
	},
	{
		name: "Trails of Light: Photography on Green Lane",
		assignment: "Photo Walk",
		path: "Lajeunesse-CU-IMG_9709.JPG",
	},
	{
		name: "Trails of Light: Photography on Green Lane",
		assignment: "Photo Walk",
		path: "Lajeunesse-LS-IMG_9666.JPG",
	},
	{
		name: "Trails of Light: Photography on Green Lane",
		assignment: "Photo Walk",
		path: "Lajeunesse-MS-IMG_9723.JPG",
	},
	{
		assignment: "Shutter Priority",
		path: "IMG_9815.JPG",
	},
	{
		name: "Signs of Transit",
		assignment: "Signs Challenge",
		path: "IMG_1798.JPG",
	},
	{
		name: "Photographer's Passion",
		assignment: "Still Life",
		path: "Lajeunesse-IMG_2456.JPG",
	},
	{
		name: "Nature's Eye: Reflections on Water",
		assignment: "Symmetry Challenge",
		path: "IMG_0934 Lightroom_2.jpg",
	},
	{
		name: "Handful of Life",
		assignment: "Hands in Frame Challenge",
		path: "IMG_2808.JPG"
	}
].sort((a, b) => sortOrder.indexOf(a.assignment) - sortOrder.indexOf(b.assignment));

export default photos;
