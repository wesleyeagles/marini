import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Text, useDisclosure } from "@chakra-ui/react";
import Logo from "../../icons/Logo";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { Fragment } from "react";

export default function Navbar() {


    const { isOpen, onOpen, onClose } = useDisclosure()

    const isMdSize = window.matchMedia("(max-width: 1024px)").matches

    return (
        <Fragment>
            <Box maxWidth={{ xl: 1280 }} paddingInline={{ base: 5, md: 10, xl: 0 }} marginInline='auto' paddingBlock={4}>
                <Box display='flex' justifyContent='space-between' alignItems='center'>
                    <Link to='/'>
                        <Logo xs='120px' md="150px" />
                    </Link>

                    <nav>
                        <ul>
                            <li>
                                <Text color='#606060' fontFamily='Inter' cursor='pointer' _hover={{ color: '#000' }} >Vale dos vinhedos</Text>
                            </li>
                            <li>
                                <Text color='#606060' fontFamily='Inter' cursor='pointer' _hover={{ color: '#000' }} >Pontos turísticos</Text>
                            </li>
                            <li>
                                <Text color='#606060' fontFamily='Inter' cursor='pointer' _hover={{ color: '#000' }} >Terrace residence</Text>
                            </li>
                            <li>
                                <Text color='#606060' fontFamily='Inter' cursor='pointer' _hover={{ color: '#000' }} >Investimento</Text>
                            </li>
                        </ul>

                        <Button border={'1px solid #60606060'} borderRadius={0} backgroundColor='transparent' _hover={{ backgroundColor: '#000', color: '#fff' }}>
                            <Text fontWeight='medium'>
                                Fale conosco
                            </Text>
                        </Button>

                        <Button onClick={onOpen} display={{ base: 'flex', lg2: 'none' }}>
                            <GiHamburgerMenu size={20} />
                        </Button>
                    </nav>
                </Box>
            </Box>

            {isMdSize && (
                <Drawer id="mobile-menu" isOpen={isOpen} placement='right' onClose={onClose} size='xs'>
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>
                            <Link to='/'>
                                <Logo xs='120px' md="150px" />
                            </Link>
                        </DrawerHeader>
                        <DrawerBody>
                            <nav className="mobile-nav">
                                <ul>
                                    <li>
                                        <Text color='#606060' fontFamily='Inter' cursor='pointer' _hover={{ color: '#000' }} >Vale dos vinhedos</Text>
                                    </li>
                                    <li>
                                        <Text color='#606060' fontFamily='Inter' cursor='pointer' _hover={{ color: '#000' }} >Pontos turísticos</Text>
                                    </li>
                                    <li>
                                        <Text color='#606060' fontFamily='Inter' cursor='pointer' _hover={{ color: '#000' }} >Terrace residence</Text>
                                    </li>
                                    <li>
                                        <Text color='#606060' fontFamily='Inter' cursor='pointer' _hover={{ color: '#000' }} >Investimento</Text>
                                    </li>

                                    <Button border={'1px solid #60606060'} borderRadius={0} backgroundColor='transparent' _hover={{ backgroundColor: '#000', color: '#fff' }}>
                                        <Text fontWeight='medium'>
                                            Fale conosco
                                        </Text>
                                    </Button>
                                </ul>
                            </nav>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            )}
        </Fragment>
    )
}