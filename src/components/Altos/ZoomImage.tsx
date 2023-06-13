import { Box, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react"

interface IZoomImage {
    src: string;
    w?: any;
    h?: string;
    legend?: string;
    display?: any;
}

const ZoomImage = ({src, w, legend, h, display}: IZoomImage) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
        <Box onClick={onOpen} w={w} cursor="pointer">
        <Image display={display} w="100%" h={h} src={src} />
        </Box>

        <Modal size="3xl" isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent p={0}>
                <ModalCloseButton />
                <ModalBody p={0}>
                    <Image w="100%" src={src} />
                </ModalBody>
            </ModalContent>
        </Modal>
        </>
    )
}

export default ZoomImage