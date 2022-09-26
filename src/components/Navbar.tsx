import { useContext } from "react";
import { Box, Button, Container, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerOverlay, ListItem, Menu, MenuButton, MenuItem, MenuList, UnorderedList, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { NavLink } from "../styledcomponents/Typograph";

import Logo from '../svgs/logo'
import DropdownArrow from '../svgs/dropdownarrow'
import { ContactModal } from "./ContactModal";
import { GiHamburgerMenu } from 'react-icons/gi'

import { Context } from '../App'
import { HashLink } from "react-router-hash-link";


export function Navbar() {

    function removeHash () { 
        setTimeout(() => {
            history.pushState("", document.title, window.location.pathname + window.location.search)
        }, 100)  
    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isOpen: drawerOpen , onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure()

    return (
        <Box>
            <Container maxW={{sm: '93%', md: '738px', lg: '960px', xl: '1247px', '2xl' : '1247px'}}>
                <Box w='100%' h='80px' display='flex' alignItems='center'>
                    <Box flex={1}>
                        <Box w='max-content'>
                        <Link to='/'>
                            <Logo />
                        </Link>
                        </Box>
                    </Box>

                    <Box display={{sm: 'none', lg: 'block'}}>
                        <nav>
                            <UnorderedList display='flex' justifyContent='space-between' alignItems='center'>
                                <ListItem listStyleType='none' marginRight='40px'>
                                    <Link to='/'>
                                        <NavLink>
                                            Página Inicial
                                        </NavLink>
                                    </Link>
                                </ListItem>
                                <ListItem  listStyleType='none'  marginRight='40px'>
                                    <HashLink onClick={removeHash} smooth to='/#sobre'>
                                        <NavLink>
                                            Sobre Nós
                                        </NavLink>
                                    </HashLink>
                                </ListItem>
                                <ListItem  listStyleType='none'  marginRight='40px'>
                                <Menu>
                                    <MenuButton bg='transparent' padding={0} margin={0} as={Button} rightIcon={<DropdownArrow />} _hover={{ bg: 'none'}} _active={{bg: 'transparent'}}>
                                        <NavLink>
                                            Empreendimentos
                                        </NavLink>
                                    </MenuButton>
                                    <MenuList>
                                        <Link to='/empreendimentos-em-andamento'>
                                        <MenuItem>
                                            <NavLink>
                                                Em andamento
                                            </NavLink>
                                        </MenuItem>
                                        </Link>
                                        <Link to='/empreendimentos-residenciais'>
                                        <MenuItem>
                                            <NavLink>
                                                Residenciais
                                            </NavLink>
                                        </MenuItem>
                                        </Link>
                                        <MenuItem disabled>
                                            <NavLink>
                                                Lançamento (Em Breve)
                                            </NavLink>
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                                </ListItem>
                                <ListItem  listStyleType='none'>
                                        <NavLink onClick={onOpen}>
                                            Contato
                                        </NavLink>
                                </ListItem>
                            </UnorderedList>
                        </nav>
                    </Box>

                    <Box display={{sm: 'block', lg: 'none'}} cursor='pointer'>
                        <GiHamburgerMenu size={25} onClick={onDrawerOpen}/>
                    </Box>
                </Box>
                
            </Container>

            <ContactModal Open={onOpen} Close={onClose} isModalOpen={isOpen}/>
            <Drawer
            isOpen={drawerOpen}
            placement='right'
            onClose={onDrawerClose}
            >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton  />
            <DrawerBody marginTop={10}>
              <Box>
                <Link onClick={onDrawerClose} to='/'>
                <NavLink>
                    Página Inicial
                </NavLink>
                </Link>
              </Box>

              <Box marginTop={1}>
              <HashLink onClick={onDrawerClose} smooth to='/#empreendimentos'>
                <NavLink>
                    Sobre Nós
                </NavLink>
              </HashLink>
              </Box>

              <Box>
              <Menu>
                <MenuButton bg='transparent' padding={0} margin={0} as={Button} rightIcon={<DropdownArrow />} _hover={{ bg: 'none'}} _active={{bg: 'transparent'}}>
                    <NavLink>
                        Empreendimentos
                    </NavLink>
                </MenuButton>
                <MenuList>
                    <MenuItem>
                    <Link onClick={onDrawerClose} to='/empreendimentos-em-andamento'>
                        <NavLink>
                            Em andamento
                        </NavLink>
                    </Link>
                    </MenuItem>
                    <MenuItem>
                    <Link onClick={onDrawerClose} to='/empreendimentos-residenciais'>
                        <NavLink>
                            Residenciais
                        </NavLink>
                    </Link>
                    </MenuItem>
                    <MenuItem disabled>
                        <NavLink>
                            Lançamento (Em Breve)
                        </NavLink>
                    </MenuItem>
                </MenuList>
            </Menu>

                <Box marginTop={0}>
                <NavLink onClick={onOpen}>
                    Contato
                </NavLink>
              </Box>
              </Box>
            </DrawerBody>
            <DrawerFooter>
                dqwdqw
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        </Box>
    )
}