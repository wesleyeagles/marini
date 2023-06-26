import { Box, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import "./ZoomImage.scss"

interface IZoomImage {
	src: string;
	w?: any;
	h?: string;
	legend?: string;
    sublegend?: string;
	display?: any;
	size?: any;
	legendWidth?: any;
	legendHeight?: any;
}

const ZoomImage = ({ src, w, legend, sublegend, h, display, size = "3xl", legendWidth, legendHeight }: IZoomImage) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Box onClick={onOpen} w={w} cursor="pointer" position="relative">
				{legend ? (
					<Box position="absolute" display="flex" flexDirection="column" justifyContent="center" background={`url("./images/altos/geometric-square.png")`} backgroundPosition={{md: "right"}} backgroundSize="cover" padding={{md: 6}} paddingRight={8} w={legendWidth} h={legendHeight}>
						<span className="legend">{legend}</span>
                        <span className="sublegend">{sublegend}</span>
					</Box>
				) : null}

				<Image display={display} w="100%" h={h} src={src} />
			</Box>

			<Modal size={size} isCentered isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent p={0}>
					<ModalCloseButton color="white" />
					<ModalBody p={0}>
						<Image w="100%" src={src} />
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ZoomImage;
