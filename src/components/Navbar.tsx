import { useContext, useState } from "react";
import {
	Box,
	Button,
	Container,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerOverlay,
	Image,
	ListItem,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	UnorderedList,
	useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { NavLink } from "../styledcomponents/Typograph";

import Logo from "../svgs/logo";
import DropdownArrow from "../svgs/dropdownarrow";
import { ContactModal } from "./ContactModal";
import { GiHamburgerMenu } from "react-icons/gi";

import { Context } from "../App";
import { HashLink } from "react-router-hash-link";

export function Navbar() {
	function removeHash() {
		setTimeout(() => {
			history.pushState("", document.title, window.location.pathname + window.location.search);
		}, 100);
	}

	const [submenuOpen, setSubmenuOpen] = useState<boolean>(false);

	const openSubmenu = () => {
		if (!submenuOpen) {
			setSubmenuOpen(true);
		}
	};

	const closeSubmenu = () => {
		if (submenuOpen) {
			setSubmenuOpen(false);
		}
	};

	const toggleSubmenu = () => {
		setSubmenuOpen(!submenuOpen);
	};

	const { isOpen, onOpen, onClose } = useDisclosure();
	const { isOpen: drawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure();

	return (
		<Box>
			<Container maxW={{ sm: "93%", md: "738px", lg: "960px", xl: "1247px", "2xl": "1247px" }}>
				<Box w="100%" h="80px" display="flex" alignItems="center">
					<Box flex={1}>
						<Box w="max-content">
							<Link to="/">
								<Image w="150px" src="images/LOGO MARINI CONSTRUÇÕES HORIZONTAL.png" />
							</Link>
						</Box>
					</Box>

					<Box display={{ sm: "none", lg: "block" }}>
						<nav>
							<UnorderedList display="flex" justifyContent="space-between" alignItems="center">
								<ListItem listStyleType="none" marginRight="40px">
									<Link to="/">
										<NavLink>Página Inicial</NavLink>
									</Link>
								</ListItem>
								<ListItem listStyleType="none" marginRight="40px">
									<HashLink onClick={removeHash} smooth to="/#sobre">
										<NavLink>Sobre Nós</NavLink>
									</HashLink>
								</ListItem>
								<ListItem listStyleType="none" marginRight="40px">
									<Menu>
										<MenuButton bg="transparent" padding={0} margin={0} as={Button} rightIcon={<DropdownArrow />} _hover={{ bg: "none" }} _active={{ bg: "transparent" }}>
											<NavLink>Empreendimentos</NavLink>
										</MenuButton>
										<MenuList zIndex="9999">
											<Menu isOpen={submenuOpen} placement="right-end" onClose={closeSubmenu}>
												<MenuButton as={MenuItem} onClick={toggleSubmenu}>
													Em Andamento
												</MenuButton>
												<MenuList marginTop="28px">
													<Link to="/terrace">
														<MenuItem>
															<NavLink>Terrace</NavLink>
														</MenuItem>
													</Link>
													<Link to="/san-paulo">
														<MenuItem>
															<NavLink>San Paulo</NavLink>
														</MenuItem>
													</Link>
												</MenuList>
											</Menu>
											<Link to="/empreendimentos-entregues">
												<MenuItem>
													<NavLink>Entregues</NavLink>
												</MenuItem>
											</Link>
											<Link to="/altos-do-borgo">
												<MenuItem disabled>
													<NavLink>Lançamento</NavLink>
												</MenuItem>
											</Link>
										</MenuList>
									</Menu>
								</ListItem>
								<ListItem listStyleType="none">
									<NavLink onClick={onOpen}>Contato</NavLink>
								</ListItem>
							</UnorderedList>
						</nav>
					</Box>

					<Box display={{ sm: "block", lg: "none" }} cursor="pointer">
						<GiHamburgerMenu size={25} onClick={onDrawerOpen} />
					</Box>
				</Box>
			</Container>

			<ContactModal Open={onOpen} Close={onClose} isModalOpen={isOpen} />
			<Drawer isOpen={drawerOpen} placement="right" onClose={onDrawerClose}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerBody marginTop={10}>
						<Box>
							<Link onClick={onDrawerClose} to="/">
								<NavLink>Página Inicial</NavLink>
							</Link>
						</Box>

						<Box marginTop={1}>
							<HashLink onClick={onDrawerClose} smooth to="/#empreendimentos">
								<NavLink>Sobre Nós</NavLink>
							</HashLink>
						</Box>

						<Box>
							<Menu>
								<MenuButton bg="transparent" padding={0} margin={0} as={Button} rightIcon={<DropdownArrow />} _hover={{ bg: "none" }} _active={{ bg: "transparent" }}>
									<NavLink>Empreendimentos</NavLink>
								</MenuButton>
								<MenuList>
									<MenuItem>
										<Link onClick={onDrawerClose} to="/empreendimentos-em-andamento">
											<NavLink>Em andamento</NavLink>
										</Link>
									</MenuItem>
									<MenuItem>
										<Link onClick={onDrawerClose} to="/empreendimentos-residenciais">
											<NavLink>Residenciais</NavLink>
										</Link>
									</MenuItem>
									<MenuItem disabled>
										<NavLink>Lançamento (Em Breve)</NavLink>
									</MenuItem>
								</MenuList>
							</Menu>

							<Box marginTop={0}>
								<NavLink onClick={onOpen}>Contato</NavLink>
							</Box>
						</Box>
					</DrawerBody>
					<DrawerFooter>dqwdqw</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</Box>
	);
}
