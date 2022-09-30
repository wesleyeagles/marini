import { Box, Button, Container, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerOverlay, Heading, HStack, Image, Link, Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, useDisclosure, VStack } from "@chakra-ui/react"
import { HashLink } from "react-router-hash-link"
import { NavLink, StyledH2, StyledP, StyledSmall, StyledStrong } from "../styledcomponents/Typograph"
import { FormModal } from "../components/FormModal"

import DropdownArrow from '../svgs/terrace/Dropdownarrow'
import DropdownArrow2 from '../svgs/dropdownarrow'

import Solar from '../svgs/terrace/Solar'
import EletricCar from '../svgs/terrace/EletricCar'
import Localization from '../svgs/terrace/Localization'

import { GiHamburgerMenu } from 'react-icons/gi'
import { BiRightArrowCircle } from 'react-icons/bi'
import { RiMapPinLine } from 'react-icons/ri'

import MailIcon from '../svgs/mailicon'
import PhoneIcon from '../svgs/phoneicon'
import WhatsIcon from '../svgs/whatsicon'
import PinIcon from '../svgs/pinicon'
import ClockIcon from '../svgs/clockicon'


export const Terrace = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const { isOpen: isOpenMap, onOpen: onOpenMap, onClose: onCloseMap } = useDisclosure()

    const { isOpen: drawerOpen , onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure()

    return (
        <>
        <Box w='100%' position='absolute'>
        <Container maxW={{sm: '93%', md: '738px', lg: '960px', xl: '1247px', '2xl' : '1247px'}}>
            <Box display='flex' justifyContent='space-between' paddingTop='27px' alignItems='center'>
                <Box>
                    <Image src='/images/terrace/logo-terrace.png' alt='terrace-logo' />
                </Box>

                <Box display={{sm: 'none', xl: 'block'}}>
                    <HStack spacing='36px'>
                        <Link to='' as={HashLink}>
                            <Text color='#FFF' fontFamily='FivoBold'>
                                Localização
                            </Text>
                        </Link>
                        <Link to='' as={HashLink}>
                            <Text color='#FFF' fontFamily='FivoBold'>
                                Características
                            </Text>
                        </Link>
                        <Menu>
                            <MenuButton padding={0} margin={0} bg='trasparent' _hover={{bg: 'transparent'}} _active={{bg: 'transparent'}} as={Button} rightIcon={<DropdownArrow />}>
                                <Text color='#FFF' fontFamily='FivoBold'>
                                    Áreas do empreendimento
                                </Text>
                            </MenuButton>
                            <MenuList>
                            <Link to='' as={HashLink}>
                            <MenuItem>
                            <Text fontFamily='FivoLight'>
                                Residencial
                            </Text>
                            </MenuItem>
                            </Link>
                            <Link to='' as={HashLink}>
                            <MenuItem>
                            <Text fontFamily='FivoLight'>
                                Condomial
                            </Text>
                            </MenuItem>
                            </Link>
                            </MenuList>
                        </Menu>
                        <Button size='lg' variant='outline' color='#FFF' fontSize='16px' _hover={{color: '#000', bg: '#E2E8F0'}} onClick={onOpen}>
                            <Text textTransform='uppercase' fontFamily='FivoRegular' fontWeight='450'>
                                Entrar em contato
                            </Text>
                        </Button>
                    </HStack>
                </Box>

                <Box display={{sm: 'block', xl: 'none'}} cursor='pointer'>
                    <GiHamburgerMenu color='#FFF' size={30} onClick={onDrawerOpen}/>
                </Box>
            </Box>
        </Container>
        </Box>
        <Box backgroundImage='/images/terrace/bg-terrace.png' backgroundPosition='center' backgroundSize='cover' h={{sm:'65vh', md: '100vh'}}>
            <Box h='100%' display='flex' justifyContent='center' alignItems='flex-end'>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 27.4416L35.3125 17.1292L38.2583 20.075L25 33.3333L11.7416 20.075L14.6875 17.1292L25 27.4416Z" fill="#E2E8F0"/>
            </svg>
            </Box>
        </Box>

        <Box paddingBlock='70px'>
            <Container maxW={{sm: '93%', md: '738px', lg: '960px', xl: '1247px', '2xl' : '1247px'}}>
                <Heading as='h2' textTransform='uppercase' fontSize={{sm: '38px', md: '48px'}} fontFamily='Nevrada' color='#860A10' textAlign='center' lineHeight={{sm: '0.90', md: '0.55'}}>
                            Terrace Residence
                        <Text display='block' as='span' textTransform='initial' fontFamily='Highlight' fontSize={{sm: '68px', md: '115px'}} color='#860A10' textAlign='center' fontWeight='400'>
                            Planejado em cada detalhe
                        </Text>
                </Heading>

                <Box display='flex' justifyContent={{lg: 'space-between'}} marginTop={{sm: '30px', md: '90px'}} flexDirection={{sm: 'column', lg: 'row'}}>
                    <Box w={{lg: '50%', xl: 'auto'}} position='relative' h='max-content'>
                        <Image src='/images/terrace/image-1.png' />
                        <Box w='190px' h='35px' position='absolute' bottom='0' bg='#FFF' display='flex' justifyContent='center' alignItems='center' boxShadow='0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)'>
                            <Text as='span' fontFamily='FivoMedium' color='#860A10'>
                                Fachada Sul / Leste
                            </Text>
                        </Box>
                    </Box>

                    <Box w={{lg: '45%', xl: '52%'}} marginTop={{sm: '40px', lg: '50px', xl: '100px'}}>
                        <Heading w={{lg: '400px', xl: '500px'}} as='h2' fontFamily='Nevrada' color='#860A10' fontSize={{sm: '36px', md: '40px'}} lineHeight='65px'>
                            Localizado no centro da cidade
                        </Heading>
                        <Text fontSize={{sm: '15px', md: '16px'}} fontFamily='FivoRegular' as='p' color='#646464' marginTop='24px'>
                            O Terrace Residence encontra-se na melhor região de Bento Gonçalves para dispor aos seus moradores mais <Text fontFamily='FivoBold' as='strong'>praticidade</Text> e <Text fontFamily='FivoBold' as='strong'>tranquilidade.</Text>
                        </Text>
                        <Text fontSize={{sm: '15px', md: '16px'}} fontFamily='FivoRegular' as='p' color='#646464' marginTop='24px'>
                        Localizado no Centro de Bento Gonsalves , o Terrace Residence oferece uma nova concepção em moradia, com completa comodidade <Text fontFamily='FivoBold' as='strong'>sofisticação</Text> e <Text fontFamily='FivoBold' as='strong'>qualidade de vida</Text> que você sempre sonhou. 
                        </Text>
                        <Button onClick={onOpenMap} display='flex' fontFamily='FivoBold' variant='unstyled' color='#860A10' fontSize={{sm: '16px', md: '18px'}} marginTop='33px' rightIcon={<BiRightArrowCircle size={30} color='#860A10' />}>
                            Ver localização no mapa
                        </Button>

                        <Box bg='#FFF' boxShadow='0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)' w={{md: '465px'}} h='60px' padding={{sm: '6px 4px', md: '10px 24px'}} borderRadius='10px' marginTop={{sm: '30px', lg: '50px', xl: '140px'}} position={{lg: 'relative'}} left='-130px' display='flex' alignItems='center'>
                            <Box>
                                <RiMapPinLine size={30} color='#860A10'/>
                            </Box>
                            <Text fontSize={{sm: '11px', md: '16px'}} marginLeft='14px' color='#646464' fontFamily='FivoMedium'>
                                Rua Assis Brasil, 281, Centro - Bento Golçalves
                            </Text>
                        </Box>
                    </Box>
                </Box>

                <Box display='flex' justifyContent='space-between' marginTop='80px'>
                    <Box>
                        <Heading fontSize='36px' color='#860A10' fontFamily='Nevrada'>
                            Características
                        </Heading>
                        <VStack spacing='16px' alignItems='start'>

                        <Box display='flex' alignItems='center'>
                            <Box>
                                <Solar />
                            </Box>
                            <Text fontSize='16px' color='#646464' marginLeft='14px'>
                                Infraestrutura para energia fotovoltaica
                            </Text>
                        </Box>

                        <Box display='flex' alignItems='center'>
                            <Box>
                                <EletricCar />
                            </Box>
                            <Text fontSize='16px' color='#646464' marginLeft='14px'>
                                Infraestrutura para alimentação de carro elétrico
                            </Text>
                        </Box>

                        <Box display='flex' alignItems='center'>
                            <Box>
                                <Localization />
                            </Box>
                            <Text fontSize='16px' color='#646464' marginLeft='14px'>
                                Excelente localização central
                            </Text>
                        </Box>
                        </VStack>
                    </Box>
                </Box>
            </Container>
        </Box>

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
                <Link as={HashLink} onClick={onDrawerClose} to=''>
                    <Text fontFamily='FivoBold'>
                        Localização
                    </Text>
                </Link>
              </Box>

              <Box marginTop={1}>
              <HashLink onClick={onDrawerClose} smooth to=''>
                <Text fontFamily='FivoBold'>
                    Características
                </Text>
              </HashLink>
              </Box>

              <Box>
              <Menu>
                <MenuButton bg='transparent' padding={0} margin={0} as={Button} rightIcon={<DropdownArrow2 />} _hover={{ bg: 'none'}} _active={{bg: 'transparent'}}>
                    <Text fontSize='16px'>
                        Áreas do empreendimento
                    </Text>
                </MenuButton>
                <MenuList>
                    <MenuItem>
                    <Link as={HashLink} onClick={onDrawerClose} to='/empreendimentos-em-andamento'>
                        <NavLink>
                            Residencial
                        </NavLink>
                    </Link>
                    </MenuItem>
                    <MenuItem>
                    <Link as={HashLink} onClick={onDrawerClose} to='/empreendimentos-residenciais'>
                        <NavLink>
                            Condomial
                        </NavLink>
                    </Link>
                    </MenuItem>
                </MenuList>
            </Menu>

                <Box marginTop={0}>
                <Text fontFamily='FivoBold' cursor='pointer' onClick={onOpen}>
                    Entrar em contato
                </Text>
              </Box>
              </Box>
            </DrawerBody>
            <DrawerFooter>
                dqwdqw
            </DrawerFooter>
          </DrawerContent>
        </Drawer>


        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay backdropFilter='blur(5px) hue-rotate(90deg)'/>
          <ModalContent maxW={{sm: '90%', lg: '940px', xl: '1040px', '2xl':'1140px'}} h={{lg: '720px'}} overflow='hidden'>
            <ModalBody padding={0} overflow='hidden'>
            <Box display='flex' flexDirection={{sm: 'column', lg: 'row'}}>
                <Box w={{sm: '100%', lg: '50%'}} h={{sm: '480px', lg: '720px'}} backgroundImage='/images/terrace/bg-modal.png' backgroundSize='cover' backgroundPosition='center center'>
                    <Box h='100%' paddingLeft={{sm: '20px', md: '80px', lg: '80px'}} paddingRight={{sm: '20px',  md: '0px'}}>
                        <Box w='300px' marginTop={{sm: '40px', md: '20px', lg: '120px'}}>
                        <StyledH2 white>
                            Informações de contato
                        </StyledH2>
                        </Box>

                        <Box w={{lg: '320px'}} marginTop='50px'>
                            <Box>
                                <Link display='flex' alignItems='center' href='mailto:imoveis@mariniconstruções.com.br' isExternal>
                                <Box marginRight='12px'>
                                <MailIcon />
                                </Box>
                                <StyledSmall marginLeft='12px'>
                                    imoveis@mariniconstruções.com.br
                                </StyledSmall>
                                </Link>
                            </Box>

                            <Box marginTop='22px' w='max-content'>
                                <Link display='flex' alignItems='center' href='tel:555434522244' isExternal>
                                <Box marginRight='12px'>
                                <PhoneIcon />
                                </Box>
                                <StyledSmall marginLeft='12px'>
                                    54 3452.2244
                                </StyledSmall>
                                </Link>
                            </Box>

                            <Box marginTop='22px' w='max-content'>
                                <Link display='flex' alignItems='center' href='https://wa.me/5554999106006' isExternal>
                                <Box marginRight='12px'>
                                <WhatsIcon />
                                </Box>
                                <StyledSmall marginLeft='12px'>
                                    54 99910.6006
                                </StyledSmall>
                                </Link>
                            </Box>

                            <Box marginTop='22px'>
                                <Link display='flex' href='https://www.google.com/maps/place/R.+Fernandes+Vi%C3%AAira,+146+-+Cidade+Alta,+Bento+Gon%C3%A7alves+-+RS,+95700-000/@-29.172232,-51.5185428,17z/data=!3m1!4b1!4m5!3m4!1s0x951c3cb39197ce8f:0xefc4cf54df6c6d50!8m2!3d-29.172232!4d-51.5185428' isExternal>
                                <Box marginTop={1} marginRight='12px'>
                                <PinIcon />
                                </Box>
                                <StyledSmall marginLeft='12px'>
                                    R. Fernandes Viêira, 146 - Sala 03 - Cidade Alta, Bento Gonçalves - RS, 95700-372
                                </StyledSmall>
                                </Link>
                            </Box>
                        </Box>

                        <Box marginTop='32px'>
                            <StyledP>
                                <StyledStrong color='#F0F0F0'>
                                    Funcionamento
                                </StyledStrong>
                            </StyledP>

                            <Box marginTop='24px' w='max-content' display='flex'>
                                <Box marginRight='12px'>
                                <ClockIcon />
                                </Box>
                                <StyledSmall marginLeft='12px'>
                                    08h às 11:30h, 13h às 17h de seg. a sexta
                                </StyledSmall>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box w={{sm: '100%', lg: '50%'}} h={{sm: '670px', md: '720px'}} paddingLeft={{sm: '20px', md: '70px', lg: '0px'}} paddingRight={{sm: '20px',  md: '0px'}}>
                    <Box className="close-btn">
                        <ModalCloseButton border='2px' borderColor={{sm: '#FFF', lg: '#3E5481'}} color={{sm: '#FFF', lg: '#3E5481'}}/>
                    </Box>

                    <Box paddingLeft={{sm: '0px', md: '60px', lg: '60px', xl: '90px'}} marginTop={{sm: '30px', md: '78px'}} w={{sm: '100%', md: '80%', lg: '420px', xl: '455px'}}>
                        <StyledH2>
                            Entre em contato
                        </StyledH2>
                        <Box marginTop='33px'>
                            <StyledP black='true'>
                                Preencha o <StyledStrong color='#860A10'>formulário abaixo</StyledStrong> e aguarde o retorno de nossos especialistas.
                            </StyledP>
                        </Box>
                        <FormModal colorBg={true}/>
                    </Box>
                </Box>
            </Box>
            </ModalBody>
          </ModalContent>
        </Modal>

        <Modal size={{sm: 'sm', md: '2xl', lg: '4xl'}} isOpen={isOpenMap} onClose={onCloseMap}>
          <ModalOverlay backdropFilter='blur(5px) hue-rotate(90deg)'/>
          <ModalContent h='600px' borderRadius='10px' overflow='hidden'>
            <ModalBody  padding={0} overflow='hidden'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3484.0178006087467!2d-51.51697048440189!3d-29.164147697851448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951c23532a4a2fad%3A0x65741826bf2e211!2sR.%20Assis%20Brasil%2C%20281%20-%20Centro%2C%20Bento%20Gon%C3%A7alves%20-%20RS%2C%2095700-028!5e0!3m2!1spt-BR!2sbr!4v1664474769349!5m2!1spt-BR!2sbr" width="100%" height="100%"></iframe>
            </ModalBody>
          </ModalContent>
        </Modal>
        </>
    )
}