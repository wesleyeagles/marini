import { Box, Button, Container, Flex, Image, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";




import logo from '../images/Logo.png'

const Navbar = ({ bgOpacity, sections, scrollToSection, activeSection }: { bgOpacity: number, sections: string[], scrollToSection: (id: string) => void, activeSection: string }) => {

    return (
        <>
            <Box as="nav"
                position="fixed"
                top="0"
                left="0"
                width="100%"
                zIndex="1000"
                transition="background 0.3s ease"
                bg={`rgba(8, 42, 31, ${bgOpacity})`}
                color="white"
                py={4}
                px={6}
            >
                <Container maxW={"container.xl"}>
                    <Flex justify="space-between" align="center">
                        <Box>
                            <Image src={logo} alt="Logo Villagio" />
                        </Box>

                        <Flex sx={{ display: { md: 'flex', base: 'none' }, gap: { lg: '60px', md: '30px' } }}>
                            {sections.map((id) => (
                                <Button
                                    key={id}
                                    variant="link"
                                    onClick={() => scrollToSection(id)}
                                    sx={{ maxWidth: 'max-content', backgroundColor: 'transparent', _hover: { backgroundColor: 'transparent' } }}
                                    color={activeSection === id ? "#FFF" : "#CFCFCF"} // Cor ativa
                                    fontWeight={activeSection === id ? "medium" : "light"}
                                >
                                    {id}
                                </Button>
                            ))}
                            <Button sx={{ color: '#092B20', backgroundColor: '#FFF', paddingBlock: '22px', fontWeight: 'medium', borderRadius: '100px' }}>
                                Contato
                            </Button>
                        </Flex>

                        <Box sx={{ display: { md: 'none', base: 'flex' } }}>
                            <Menu>
                                <MenuButton>
                                    <Button sx={{ color: '#092B20', backgroundColor: '#FFF', fontWeight: 'medium', minWidth: 'max-content' }}>
                                        <GiHamburgerMenu size={20} />
                                    </Button>
                                </MenuButton>
                                <MenuList>
                                    <Flex direction="column" sx={{ alignItems: 'start', p: '12px', gap: '8px' }}>
                                        {sections.map((id) => (
                                            <Button
                                                key={id}
                                                variant="link"
                                                onClick={() => scrollToSection(id)}
                                                sx={{ fontSize: '16px', maxWidth: 'max-content', backgroundColor: 'transparent', _hover: { backgroundColor: 'transparent' } }}
                                                color={activeSection === id ? "#000" : "#606060"} // Cor ativa
                                                fontWeight={activeSection === id ? "medium" : "light"}
                                            >
                                                {id}
                                            </Button>
                                        ))}
                                        <Button sx={{ color: '#FFF', backgroundColor: '#092B20', paddingBlock: '15px', fontWeight: 'medium', borderRadius: '100px', marginTop: '8px' }}>
                                            Contato
                                        </Button>
                                    </Flex>
                                </MenuList>
                            </Menu>
                        </Box>
                    </Flex>
                </Container>
            </Box>

            <Box id="Inicio" height="64px" />
        </>
    );
}

export default Navbar