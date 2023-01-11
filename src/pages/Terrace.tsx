import { Box, Button, Container, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerOverlay, Heading, HStack, Image, Link, Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Stack, Text, useDisclosure, VStack } from "@chakra-ui/react"
import { HashLink } from "react-router-hash-link"
import { NavLink, StyledH2, StyledP, StyledSmall, StyledStrong } from "../styledcomponents/Typograph"
import { FormModal } from "../components/FormModal"

import DropdownArrow from '../svgs/terrace/Dropdownarrow'
import DropdownArrow2 from '../svgs/dropdownarrow'
import ScrollToTopIcon from '../svgs/scrolltotopicon'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";



import { GiHamburgerMenu } from 'react-icons/gi'
import { BiRightArrowCircle } from 'react-icons/bi'
import { RiMapPinLine } from 'react-icons/ri'

import MailIcon from '../svgs/mailicon'
import PhoneIcon from '../svgs/phoneicon'
import WhatsIcon from '../svgs/whatsicon'
import PinIcon from '../svgs/pinicon'
import ClockIcon from '../svgs/clockicon'
import { useEffect, useRef, useState } from "react"


export const Terrace = () => {

    const [isSticky, setIsSticky] = useState(true)

    const localization = useRef<any>(null)
    const stats = useRef<any>(null)
    const residencial = useRef<any>(null)

    const { isOpen, onOpen, onClose } = useDisclosure()

    const { isOpen: isOpenMap, onOpen: onOpenMap, onClose: onCloseMap } = useDisclosure()

    const { isOpen: drawerOpen , onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure()

    const myElement = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            console.log('entry', entry)
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            behavior: 'smooth',
            top: 0
        })
    }

    const scrollToLocalization = () => {
        localization.current.scrollIntoView({
            behavior: 'smooth'
        })
    }

    const scrollToStats = () => {
        stats.current.scrollIntoView({
            behavior: 'smooth'
        })
    }

    const scrollToResidencial = () => {
       residencial.current.scrollIntoView({
        behavior: 'smooth'
       })

       console.log('Teste')
    }

    const scrollToCondominal = () => {
        console.log("Clicked")
       window.location.hash = 'condominal'

       setTimeout(() => {
            history.pushState("", document.title, window.location.pathname + window.location.search)
        }, 600)  
    }


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
                            <Text onClick={scrollToLocalization} color='#FFF' fontFamily='FivoBold' cursor='pointer'>
                                Localização
                            </Text>
                            <Text onClick={scrollToStats} color='#FFF' fontFamily='FivoBold' cursor='pointer'>
                                Características
                            </Text>
                        <Menu>
                            <MenuButton padding={0} margin={0} bg='trasparent' _hover={{bg: 'transparent'}} _active={{bg: 'transparent'}} as={Button} rightIcon={<DropdownArrow />}>
                                <Text color='#FFF' fontFamily='FivoBold'>
                                    Áreas do empreendimento
                                </Text>
                            </MenuButton>
                            <MenuList>
                            <MenuItem to='/terrace#residencial' smooth as={HashLink}>
                            <Text fontFamily='FivoLight'>
                                Residencial
                            </Text>
                            </MenuItem>
                            <MenuItem to='/terrace#condominal' smooth as={HashLink}>
                            <Text fontFamily='FivoLight'>
                                Condominal
                            </Text>
                            </MenuItem>
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

        <Box paddingBlock='70px' bg='#F7FAFC' ref={localization}>
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
                        Localizado no centro da cidade, o Terrace Residence oferece uma nova concepção em moradia, com completa comodidade sofisticação e qualidade de vida que você sempre sonhou.
                        </Text>
                        <Button onClick={onOpenMap} display='flex' fontFamily='FivoBold' variant='unstyled' color='#860A10' fontSize={{sm: '16px', md: '18px'}} marginTop='33px' rightIcon={<BiRightArrowCircle size={30} color='#860A10' />}>
                            Ver localização no mapa
                        </Button>

                        <Box bg='#FFF' boxShadow='0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)' w={{md: '465px'}} h='60px' padding={{sm: '6px 4px', md: '10px 24px'}} borderRadius='10px' marginTop={{sm: '30px', lg: '50px', xl: '140px'}} position={{lg: 'relative'}} left='-130px' display='flex' alignItems='center'>
                            <Box>
                                <RiMapPinLine size={30} color='#860A10'/>
                            </Box>
                            <Text fontSize={{sm: '11px', md: '16px'}} marginLeft='14px' color='#646464' fontFamily='FivoMedium'>
                                Rua Assis Brasil, 281, Centro - Bento Gonçalves
                            </Text>
                        </Box>
                    </Box>
                </Box>
                        <Heading fontSize='36px' color='#860A10' fontFamily='Nevrada' marginTop='80px' ref={stats}>
                            Características
                        </Heading>
                    <Box display='flex' flexDirection={{sm: 'column', lg: 'row'}} justifyContent={{lg: 'space-between'}} marginTop='43px'>
                    <Box w={{lg: '45%', xl: 'auto'}}>
                        <Stack flexWrap={{sm: 'wrap', lg: 'nowrap'}} gap='20px' direction={{sm: 'row', lg: 'column'}} spacing={{lg: '16px'}} alignItems={{sm: 'center', lg: 'start'}} justify='center'>
                        <Box w={{sm: '46%', lg: 'auto'}} display='flex' flexDirection={{sm: 'column', lg: 'row'}} alignItems='center'>
                            <Box w='30px' h={{sm: '40px', lg: 'auto'}}>
                            <Image src='/images/terrace/icons/Solar.png' />
                            </Box>
                            <Text h={{sm: '80px', lg: 'auto'}} fontSize={{sm: '12px', lg: '16px'}} color='#646464' marginLeft={{lg: '14px'}} textAlign={{sm: 'center', lg: 'start'}}>
                                Infraestrutura para energia fotovoltaica
                            </Text>
                        </Box>

                        <Box w={{sm: '46%', lg: 'auto'}} display='flex' flexDirection={{sm: 'column', lg: 'row'}} alignItems='center'>
                            <Box w='30px' h={{sm: '40px', lg: 'auto'}}>
                            <Image src='/images/terrace/icons/EletricCar.png' />
                            </Box>
                            <Text h={{sm: '80px', lg: 'auto'}} fontSize={{sm: '12px', lg: '16px'}} color='#646464' marginLeft={{lg: '14px'}} textAlign={{sm: 'center', lg: 'start'}}>
                                Infraestrutura para alimentação de carro elétrico
                            </Text>
                        </Box>

                        <Box w={{sm: '46%', lg: 'auto'}} display='flex' flexDirection={{sm: 'column', lg: 'row'}} alignItems='center'>
                            <Box w='30px' h={{sm: '40px', lg: 'auto'}}>
                            <Image src='/images/terrace/icons/Localization.png' />
                            </Box>
                            <Text h={{sm: '80px', lg: 'auto'}}  fontSize={{sm: '12px', lg: '16px'}} color='#646464' marginLeft={{lg: '14px'}} textAlign={{sm: 'center', lg: 'start'}}>
                                Excelente localização central
                            </Text>
                        </Box>

                        <Box w={{sm: '46%', lg: 'auto'}} display='flex' flexDirection={{sm: 'column', lg: 'row'}} alignItems='center'>
                            <Box w='30px' h={{sm: '40px', lg: 'auto'}}>
                            <Image src='/images/terrace/icons/Varanda.png' />
                            </Box>
                            <Text h={{sm: '80px', lg: 'auto'}}  fontSize={{sm: '12px', lg: '16px'}} color='#646464' marginLeft={{lg: '14px'}} textAlign={{sm: 'center', lg: 'start'}}>
                                Varanda com a sacada externa
                            </Text>
                        </Box>

                        <Box w={{sm: '46%', lg: 'auto'}} display='flex' flexDirection={{sm: 'column', lg: 'row'}} alignItems='center'>
                            <Box w='30px' h={{sm: '40px', lg: 'auto'}}>
                                <Image src='/images/terrace/icons/church.png' />
                            </Box>
                            <Text h={{sm: '80px', lg: 'auto'}}  fontSize={{sm: '12px', lg: '16px'}} color='#646464' marginLeft={{lg: '14px'}} textAlign={{sm: 'center', lg: 'start'}}>
                                Vista da cidade privilegiada
                            </Text>
                        </Box>

                        <Box w={{sm: '46%', lg: 'auto'}} display='flex' flexDirection={{sm: 'column', lg: 'row'}} alignItems='center'>
                            <Box w='30px' h={{sm: '40px', lg: 'auto'}}>
                            <Image src='/images/terrace/icons/Bed.png' />
                            </Box>
                            <Text h={{sm: '80px', lg: 'auto'}}  fontSize={{sm: '12px', lg: '16px'}} color='#646464' marginLeft={{lg: '14px'}} textAlign={{sm: 'center', lg: 'start'}}>
                                Conforto e a privacidade (Apartamentos com 2 suítes e lavabo)
                            </Text>
                        </Box>

                        <Box w={{sm: '46%', lg: 'auto'}} display='flex' flexDirection={{sm: 'column', lg: 'row'}} alignItems='center'>
                            <Box w='30px' h={{sm: '40px', lg: 'auto'}}>
                            <Image src='/images/terrace/icons/Kitchen.png' />
                            </Box>
                            <Text h={{sm: '80px', lg: 'auto'}}  fontSize={{sm: '12px', lg: '16px'}} color='#646464' marginLeft={{lg: '14px'}} textAlign={{sm: 'center', lg: 'start'}}>
                                Cozinha prática (Churrasqueira com ponto de gás inferior)
                            </Text>
                        </Box>

                        <Box w={{sm: '46%', lg: 'auto'}} display='flex' flexDirection={{sm: 'column', lg: 'row'}} alignItems='center'>
                            <Box w='30px' h={{sm: '40px', lg: 'auto'}}>
                            <Image src='/images/terrace/icons/Garage.png' />
                            </Box>
                            <Text h={{sm: '80px', lg: 'auto'}}  fontSize={{sm: '12px', lg: '16px'}} color='#646464' marginLeft={{lg: '14px'}} textAlign={{sm: 'center', lg: 'start'}}>
                                Box na garagem com possiboilidade de vagas adicionais
                            </Text>
                        </Box>

                        <Box w={{sm: '46%', lg: 'auto'}} display='flex' flexDirection={{sm: 'column', lg: 'row'}} alignItems='center'>
                            <Box w='30px' h={{sm: '40px', lg: 'auto'}}>
                            <Image src='/images/terrace/icons/Gas.png' />
                            </Box>
                            <Text h={{sm: '80px', lg: 'auto'}}  fontSize={{sm: '12px', lg: '16px'}} color='#646464' marginLeft={{lg: '14px'}} textAlign={{sm: 'center', lg: 'start'}}>
                                Medidores individuais de água, luz e gás
                            </Text>
                        </Box>


                        <Box w={{sm: '46%', lg: 'auto'}} display='flex' flexDirection={{sm: 'column', lg: 'row'}} alignItems='center'>
                            <Box w='30px' h={{sm: '40px', lg: 'auto'}}>
                            <Image src='/images/terrace/icons/Lock.png' />
                            </Box>
                            <Text h={{sm: '80px', lg: 'auto'}}  fontSize={{sm: '12px', lg: '16px'}} color='#646464' marginLeft={{lg: '14px'}} textAlign={{sm: 'center', lg: 'start'}}>
                                Fechaduras digitais de acesso aos apartamentos
                            </Text>
                        </Box>

                        <Box w={{sm: '46%', lg: 'auto'}} display='flex' flexDirection={{sm: 'column', lg: 'row'}} alignItems='center'>
                            <Box w='30px' h={{sm: '40px', lg: 'auto'}}>
                            <Image src='/images/terrace/icons/WaiterSplit.png' />
                            </Box>
                            <Text h={{sm: '80px', lg: 'auto'}}  fontSize={{sm: '12px', lg: '16px'}} color='#646464' marginLeft={{lg: '14px'}} textAlign={{sm: 'center', lg: 'start'}}>
                                Esperas (Split e água quente)
                            </Text>
                        </Box>

                        <Box w={{sm: '46%', lg: 'auto'}} display='flex' flexDirection={{sm: 'column', lg: 'row'}} alignItems='center'>
                            <Box w='30px' h={{sm: '40px', lg: 'auto'}}>
                            <Image src='/images/terrace/icons/WaiterCoifa.png' />
                            </Box>
                            <Text h={{sm: '80px', lg: 'auto'}}  fontSize={{sm: '12px', lg: '16px'}} color='#646464' marginLeft={{lg: '14px'}} textAlign={{sm: 'center', lg: 'start'}}>
                                Esperas para saída de coifa
                            </Text>
                        </Box>

                        <Box w={{sm: '46%', lg: 'auto'}} display='flex' flexDirection={{sm: 'column', lg: 'row'}} alignItems='center'>
                            <Box w='30px' h={{sm: '40px', lg: 'auto'}}>
                            <Image src='/images/terrace/icons/Sofa.png' />
                            </Box>
                            <Text h={{sm: '80px', lg: 'auto'}}  fontSize={{sm: '12px', lg: '16px'}} color='#646464' marginLeft={{lg: '14px'}} textAlign={{sm: 'center', lg: 'start'}}>
                                Hall de entrada elevado, com decoração exclusiva e mobiliado
                            </Text>
                        </Box>

                        <Box w={{sm: '46%', lg: 'auto'}} display='flex' flexDirection={{sm: 'column', lg: 'row'}} alignItems='center'>
                            <Box w='30px' h={{sm: '40px', lg: 'auto'}}>
                            <Image src='/images/terrace/icons/Balao.png' />
                            </Box>
                            <Text h={{sm: '80px', lg: 'auto'}}  fontSize={{sm: '12px', lg: '16px'}} color='#646464' marginLeft={{lg: '14px'}} textAlign={{sm: 'center', lg: 'start'}}>
                                Salão de festas (Mobiliado e equipado)
                            </Text>
                        </Box>

                        <Box w={{sm: '46%', lg: 'auto'}} display='flex' flexDirection={{sm: 'column', lg: 'row'}} alignItems='center'>
                            <Box w='30px' h={{sm: '40px', lg: 'auto'}}>
                            <Image src='/images/terrace/icons/Playground.png' />
                            </Box>
                            <Text h={{sm: '80px', lg: 'auto'}}  fontSize={{sm: '12px', lg: '16px'}} color='#646464' marginLeft={{lg: '14px'}} textAlign={{sm: 'center', lg: 'start'}}>
                                Playground externo (com acesso ao salão de festas)
                            </Text>
                        </Box>

                        <Box w={{sm: '46%', lg: 'auto'}} display='flex' flexDirection={{sm: 'column', lg: 'row'}} alignItems='center'>
                            <Box w='30px' h={{sm: '40px', lg: 'auto'}}>
                            <Image src='/images/terrace/icons/Fitness.png' />
                            </Box>
                            <Text h={{sm: '80px', lg: 'auto'}}  fontSize={{sm: '12px', lg: '16px'}} color='#646464' marginLeft={{lg: '14px'}} textAlign={{sm: 'center', lg: 'start'}}>
                                Fitness center (Academia)
                            </Text>
                        </Box>

                        <Box w={{sm: '46%', lg: 'auto'}} display='flex' flexDirection={{sm: 'column', lg: 'row'}} alignItems='center'>
                            <Box w='30px' h={{sm: '40px', lg: 'auto'}}>
                            <Image src='/images/terrace/icons/Pet.png' />
                            </Box>
                            <Text h={{sm: '80px', lg: 'auto'}}  fontSize={{sm: '12px', lg: '16px'}} color='#646464' marginLeft={{lg: '14px'}} textAlign={{sm: 'center', lg: 'start'}}>
                                Espaço pet cercado
                            </Text>
                        </Box>

                        <Box w={{sm: '46%', lg: 'auto'}} display='flex' flexDirection={{sm: 'column', lg: 'row'}} alignItems='center'>
                            <Box w='30px' h={{sm: '40px', lg: 'auto'}}>
                            <Image src='/images/terrace/icons/Porcelanato.png' />
                            </Box>
                            <Text h={{sm: '80px', lg: 'auto'}}  fontSize={{sm: '12px', lg: '16px'}} color='#646464' marginLeft={{lg: '14px'}} textAlign={{sm: 'center', lg: 'start'}}>
                                Porcelanato nas áreas sociais e laminado nas áreas íntimas
                            </Text>
                        </Box>

                        <Box w={{sm: '46%', lg: 'auto'}} display='flex' flexDirection={{sm: 'column', lg: 'row'}} alignItems='center'>
                            <Box w='30px' h={{sm: '40px', lg: 'auto'}}>
                            <Image src='/images/terrace/icons/Texturizada.png' />
                            </Box>
                            <Text h={{sm: '80px', lg: 'auto'}}  fontSize={{sm: '12px', lg: '16px'}} color='#646464' marginLeft={{lg: '14px'}} textAlign={{sm: 'center', lg: 'start'}}>
                                Revestimento externo pastilhada e texturizada
                            </Text>
                        </Box>

                        <Box w={{sm: '46%', lg: 'auto'}} display='flex' flexDirection={{sm: 'column', lg: 'row'}} alignItems='center'>
                            <Box w='30px' h={{sm: '40px', lg: 'auto'}}>
                            <Image src='/images/terrace/icons/Gesso.png' />
                            </Box>
                            <Text h={{sm: '80px', lg: 'auto'}}  fontSize={{sm: '12px', lg: '16px'}} color='#646464' marginLeft={{lg: '14px'}} textAlign={{sm: 'center', lg: 'start'}}>
                                Rebaixo de gesso em todo o teto
                            </Text>
                        </Box>

                        <Box w={{sm: '46%', lg: 'auto'}} display='flex' flexDirection={{sm: 'column', lg: 'row'}} alignItems='center'>
                            <Box w='30px' h={{sm: '40px', lg: 'auto'}}>
                            <Image src='/images/terrace/icons/Massa.png' />
                            </Box>
                            <Text h={{sm: '80px', lg: 'auto'}}  fontSize={{sm: '12px', lg: '16px'}} color='#646464' marginLeft={{lg: '14px'}} textAlign={{sm: 'center', lg: 'start'}}>
                                Massa corrida nas paredes
                            </Text>
                        </Box>
                        </Stack>
                    </Box>

                    <Box position={{sm: 'relative', lg: `${isSticky? 'sticky' : 'relative'}`, xl: 'sticky'}} top='0' flex='none' w={{lg: '45%', xl: 'auto'}} h='max-content'>
                        <Image w={{lg: '100%', xl: '100%'}} src='/images/terrace/image-2.png' />
                        <Box w='190px' h='35px' position='absolute' bottom='0' right={{lg: '0'}} bg='#FFF' display='flex' justifyContent='center' alignItems='center' boxShadow='0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)'>
                            <Text as='span' fontFamily='FivoMedium' color='#860A10'>
                                Fachada Leste
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>

        <Box ref={myElement} h={{sm: '470px', lg: '670px'}} backgroundImage='url(images/terrace/banner-1.png)' display='flex' alignItems='center' backgroundPosition={{sm: '-550px', md: '0px'}} backgroundSize='cover'>
            <Container maxW={{sm: '93%', md: '738px', lg: '960px', xl: '1247px', '2xl' : '1247px'}}>
                <Box>
                    <Heading as='h2' w={{md: '540px'}} color='#FFF' fontFamily='Nevrada' fontSize={{sm: '38px', lg: '48px'}} fontWeight='400' lineHeight='65px'>
                        Conforto e sofisticação para não sair de casa
                    </Heading>
                    <Text marginTop='24px' fontSize='16px' w={{md: '385px'}} as='p' color='#FFF' fontFamily='FivoLight'>
                        Apartamentos planejados para quem deseja viver bem. Ambientes Confortáveis e acolhedores
                    </Text>
                    <Button marginTop='36px' size='lg' variant='outline' color='#FFF' fontSize='16px' _hover={{color: '#000', bg: '#E2E8F0'}} onClick={onOpen}>
                        <Text textTransform='uppercase' fontFamily='FivoRegular' fontWeight='450'>
                            Entrar em contato
                        </Text>
                    </Button>
                </Box>
            </Container>
        </Box>

        <Box paddingBlock={{sm:'60px', lg: '0px'}} h={{lg: '1124px'}} backgroundImage='url(images/terrace/perolado.png)' display='flex' alignItems='center' id='residencial' ref={residencial}>
            <Container maxW={{sm: '93%', md: '738px', lg: '960px', xl: '1247px', '2xl' : '1247px'}}>
                <Box display='flex' flexDirection={{sm: 'column', lg: 'row'}} justifyContent='space-between'>
                    <Box display='flex' flexDirection={{sm: 'column-reverse', lg: 'column'}} alignItems='center'>
                        <Box position='relative'>
                        <Image w={{lg: '90%', xl: 'auto'}} src='images/terrace/image-3.png' />
                        <Box w='190px' h='35px' position='absolute' bottom='0' right={{sm: '0'}} bg='#FFF' display='flex' justifyContent='center' alignItems='center' boxShadow='0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)'>
                            <Text as='span' fontFamily='FivoMedium' color='#860A10'>
                                Fachada Sul / Frontal
                            </Text>
                        </Box>
                        </Box>
                        <Heading display='flex' flexDirection={{sm: 'column', lg: 'row'}} gap={{lg: '10px'}} alignItems='center' as='h2' marginTop='64px' fontFamily='Nevrada' fontSize='36px' color='#860A10' fontWeight='400' lineHeight={{sm: '1px', lg: 'auto'}}>
                            Fachada
                            <Heading as='span' fontFamily='Highlight' fontSize='110px' fontWeight='400' lineHeight={{sm: '110px', lg: 'auto'}}>
                                Externa
                            </Heading>
                            <Heading fontFamily='FivoLight' fontSize='16px' color='#646464' w={{lg: '100px'}} marginLeft={{lg: '20px'}} marginBottom={{sm: '32px', lg: '0px'}}> 
                                Pastilhada e texturizada
                            </Heading>
                        </Heading>
                    </Box>

                    <Box display='flex' flexDirection='column' alignItems='center' marginTop={{sm: '40px', lg: '0px'}}>
                        <Heading as='h2' fontFamily='Highlight' color='#860A10' fontSize='110px' fontWeight='400' lineHeight='110px'>
                            Hall de
                        </Heading>
                        <Heading fontFamily='Nevrada' fontSize='36px' color='#860A10' fontWeight='400'>
                            Entrada
                        </Heading>
                        <Text fontFamily='FivoLight' fontSize='16px' color='#646464' w='160px' textAlign='center' marginBottom={{sm: '32px', lg: '64px'}}>
                            Com decoração exclusiva e mobiliada
                        </Text>
                        <Image w={{lg: '90%', xl: 'auto'}} src='images/terrace/image-4.png' />
                    </Box>
                </Box>
            </Container>
        </Box>

        <Box paddingBlock='90px' bg='#F7FAFC'>
            <Container maxW={{sm: '93%', md: '738px', lg: '960px', xl: '1247px', '2xl' : '1247px'}}>
                <Box>
                    <Heading textAlign='center' marginBottom='80px' fontFamily='Nevrada' color='#860A10' fontSize='36px' fontWeight='400'>
                        Planta baixa
                    </Heading>
                    <Image _hover={{transform: { sm: 'scale(2)', md: 'scale(1)'}}} src='images/terrace/planta-baixa.png' />
                </Box>

                <Stack display={{sm: 'none', lg: 'flex'}} direction='row' align='center' spacing={{lg: '52px', xl: '77px'}} justify='center' marginTop='80px'>
                    <Stack spacing='44px'>
                    <VStack align='start'>
                        <Heading as='h3' h='25px' color='#860A10' fontSize='24px' fontFamily='FivoBold'>Apartamento 01</Heading>
                        <Text as='span' h='25px' color='#860A10' fontSize='20px' fontFamily='FivoLight' display='block'>78,37m² Privativos</Text>
                        <Text as='span' h='25px' color='#860A10' fontSize='20px' fontFamily='FivoLight' display='block'>02 Dormitórios</Text>
                    </VStack>

                    <VStack align='start'>
                        <Heading as='h3' h='25px' color='#860A10' fontSize='24px' fontFamily='FivoBold'>Apartamento 04</Heading>
                        <Text as='span' h='25px' color='#860A10' fontSize='20px' fontFamily='FivoLight' display='block'>103m² Privativos</Text>
                        <Text as='span' h='25px' color='#860A10' fontSize='20px' fontFamily='FivoLight' display='block'>03 Dormitórios</Text>
                    </VStack>
                    </Stack>

                    <Stack spacing='44px'>
                    <VStack align='start'>
                        <Heading as='h3' h='25px' color='#860A10' fontSize='24px' fontFamily='FivoBold'>Apartamento 02</Heading>
                        <Text as='span' h='25px' color='#860A10' fontSize='20px' fontFamily='FivoLight' display='block'>84,63m² Privativos</Text>
                        <Text as='span' h='25px' color='#860A10' fontSize='20px' fontFamily='FivoLight' display='block'>02 Dormitórios</Text>
                    </VStack>

                    <VStack align='start'>
                        <Heading as='h3' h='25px' color='#860A10' fontSize='24px' fontFamily='FivoBold'>Apartamento 05</Heading>
                        <Text as='span' h='25px' color='#860A10' fontSize='20px' fontFamily='FivoLight' display='block'>92,78m² Privativos</Text>
                        <Text as='span' h='25px' color='#860A10' fontSize='20px' fontFamily='FivoLight' display='block'>02 Dormitórios</Text>
                    </VStack>
                    </Stack>

                    <Stack spacing='44px'>
                    <VStack align='start'>
                        <Heading as='h3' h='25px' color='#860A10' fontSize='24px' fontFamily='FivoBold'>Apartamento 03</Heading>
                        <Text as='span' h='25px' color='#860A10' fontSize='20px' fontFamily='FivoLight' display='block'>59,53m² Privativos</Text>
                        <Text as='span' h='25px' color='#860A10' fontSize='20px' fontFamily='FivoLight' display='block'>01 Dormitório</Text>
                    </VStack>

                    <VStack align='start'>
                        <Heading as='h3' h='25px' color='#860A10' fontSize='24px' fontFamily='FivoBold'>Apartamento 06</Heading>
                        <Text as='span' h='25px' color='#860A10' fontSize='20px' fontFamily='FivoLight' display='block'>52,70m² Privativos</Text>
                        <Text as='span' h='25px' color='#860A10' fontSize='20px' fontFamily='FivoLight' display='block'>01 Dormitório</Text>
                    </VStack>
                    </Stack>

                    <Stack spacing='44px'>
                    <VStack align='start'>
                        <Heading as='h3' h='25px' color='#860A10' fontSize='24px' fontFamily='FivoBold'>Apartamento 07</Heading>
                        <Text as='span' h='25px' color='#860A10' fontSize='20px' fontFamily='FivoLight' display='block'>Apartamento 07</Text>
                        <Text as='span' h='25px' color='#860A10' fontSize='20px' fontFamily='FivoLight' display='block'>42,35m² Privativos</Text>
                    </VStack>
                    </Stack>
                </Stack>

                <Stack spacing='32px' display={{sm: 'flex', lg: 'none'}} marginTop='32px'>
                    <VStack align='start'>
                        <Heading as='h3' h='25px' color='#860A10' fontSize='24px' fontFamily='FivoBold'>Apartamento 01</Heading>
                        <Text as='span' h='25px' color='#860A10' fontSize='20px' fontFamily='FivoLight' display='block'>78,37m² Privativos</Text>
                        <Text as='span' h='25px' color='#860A10' fontSize='20px' fontFamily='FivoLight' display='block'>02 Dormitórios</Text>
                    </VStack>

                    <VStack align='start'>
                        <Heading as='h3' h='25px' color='#860A10' fontSize='24px' fontFamily='FivoBold'>Apartamento 02</Heading>
                        <Text as='span' h='25px' color='#860A10' fontSize='20px' fontFamily='FivoLight' display='block'>84,63m² Privativos</Text>
                        <Text as='span' h='25px' color='#860A10' fontSize='20px' fontFamily='FivoLight' display='block'>02 Dormitórios</Text>
                    </VStack>

                    <VStack align='start'>
                        <Heading as='h3' h='25px' color='#860A10' fontSize='24px' fontFamily='FivoBold'>Apartamento 03</Heading>
                        <Text as='span' h='25px' color='#860A10' fontSize='20px' fontFamily='FivoLight' display='block'>103m² Privativos</Text>
                        <Text as='span' h='25px' color='#860A10' fontSize='20px' fontFamily='FivoLight' display='block'>03 Dormitórios</Text>
                    </VStack>

                    <VStack align='start'>
                        <Heading as='h3' h='25px' color='#860A10' fontSize='24px' fontFamily='FivoBold'>Apartamento 04</Heading>
                        <Text as='span' h='25px' color='#860A10' fontSize='20px' fontFamily='FivoLight' display='block'>92,78m² Privativos</Text>
                        <Text as='span' h='25px' color='#860A10' fontSize='20px' fontFamily='FivoLight' display='block'>02 Dormitórios</Text>
                    </VStack>

                    <VStack align='start'>
                        <Heading as='h3' h='25px' color='#860A10' fontSize='24px' fontFamily='FivoBold'>Apartamento 05</Heading>
                        <Text as='span' h='25px' color='#860A10' fontSize='20px' fontFamily='FivoLight' display='block'>92,78m² Privativos</Text>
                        <Text as='span' h='25px' color='#860A10' fontSize='20px' fontFamily='FivoLight' display='block'>02 Dormitórios</Text>
                    </VStack>

                    <VStack align='start'>
                        <Heading as='h3' h='25px' color='#860A10' fontSize='24px' fontFamily='FivoBold'>Apartamento 06</Heading>
                        <Text as='span' h='25px' color='#860A10' fontSize='20px' fontFamily='FivoLight' display='block'>52,70m² Privativos</Text>
                        <Text as='span' h='25px' color='#860A10' fontSize='20px' fontFamily='FivoLight' display='block'>01 Dormitório</Text>
                    </VStack>

                    <VStack align='start'>
                        <Heading as='h3' h='25px' color='#860A10' fontSize='24px' fontFamily='FivoBold'>Apartamento 07</Heading>
                        <Text as='span' h='25px' color='#860A10' fontSize='20px' fontFamily='FivoLight' display='block'>Apartamento 07</Text>
                        <Text as='span' h='25px' color='#860A10' fontSize='20px' fontFamily='FivoLight' display='block'>42,35m² Privativos</Text>
                    </VStack>
                </Stack>

                <Box marginTop='80px'>
                    <Stack direction={{sm: 'column', lg: 'row'}} spacing='8px'>
                    <Box>
                        <Image src='images/terrace/apto1.png' />
                    </Box>
                    <Box>
                        <Image src='images/terrace/apto2.png' />
                    </Box>
                    </Stack>
                    <Stack direction={{sm: 'column', lg: 'row'}} spacing='8px'>
                    <Box>
                        <Image src='images/terrace/apto3.png' />
                    </Box>
                    <Box>
                        <Image src='images/terrace/apto4.png' />
                    </Box>
                    </Stack>
                    <Stack direction={{sm: 'column', lg: 'row'}} justify='center'>
                    <Box>
                        <Image src='images/terrace/apto5.png' />
                    </Box>
                    </Stack>
                </Box>

                <Box marginTop='80px'>
                    <Heading fontFamily='Nevrada' fontWeight='400' fontSize={{sm: '32px', lg: '36px'}} color='#860A10' w={{lg: '700px'}} textAlign='center' mx='auto' marginBottom='32px'>
                        Para famílias que desejam o máximo de qualidade em moradias
                    </Heading>

                        <Swiper
                        breakpoints={{
                            960: {
                                slidesPerView: 2
                            }
                        }}

                        className="terrace-slider"
                        centerInsufficientSlides={true}
                        navigation={true}
                        modules={[Navigation]}
                        spaceBetween={27}
                        slidesPerView={1}
                        initialSlide={0}
                        grabCursor
                        
                        >
                        <SwiperSlide className="terrace-slide">
                          <Box h='40px' display='flex' alignItems='center'>
                            <Image src='images/terrace/icons/BedBig.png' paddingRight='32px'/>
                            <Text fontFamily='FivoMedium' as='span' fontSize='24px' fontWeight='400' color='#860A10'>
                                Quartos
                            </Text>
                          </Box>
                          <Box marginTop='24px'>
                            <Text as='p' fontSize='16px' fontWeight='400' color='#646464' fontFamily='FivoRegular' >
                                Quartos com espaço amplo, ideais para projetos aconchegantes e confortáveis com melhores noites de descanso. Alguns apartamentos contam com suítes, para sua família ter ainda mais bem-estar.
                            </Text>
                          </Box>
                        </SwiperSlide>

                        <SwiperSlide className="terrace-slide">
                        <Box h='40px' display='flex' alignItems='center'>
                            <Image src='images/terrace/icons/KitchenBig.png' paddingRight='32px'/>
                            <Text fontFamily='FivoMedium' as='span' fontSize='24px' fontWeight='400' color='#860A10'>
                                Cozinha
                            </Text>
                          </Box>
                          <Box marginTop='24px'>
                            <Text as='p' fontSize='16px' fontWeight='400' color='#646464' fontFamily='FivoRegular' >
                                Cozinha funcional com espaço prático que possui local para churrasqueira e ponto de gás para bifeira para que você tenha mais tranquilidade na hora de preparar a comida.
                            </Text>
                          </Box>
                        </SwiperSlide>

                        <SwiperSlide className="terrace-slide">
                        <Box display='flex' alignItems='center'>
                            <Image src='images/terrace/icons/Projetos.png' paddingRight='32px'/>
                            <Text fontFamily='FivoMedium' as='span' fontSize='24px' fontWeight='400' color='#860A10'>
                                Projetos personalizados
                            </Text>
                          </Box>
                          <Box marginTop='24px'>
                            <Text as='p' fontSize='16px' fontWeight='400' color='#646464' fontFamily='FivoRegular' >
                                No Terrace Residence, Você pode tornar o ambiente mais pessoal, com possibilidade de alterações no projeto, deixando seu apartamento mais confortável e atrativo para você e sua família.
                            </Text>
                          </Box>
                        </SwiperSlide>

                        <SwiperSlide className="terrace-slide">
                        <Box display='flex' alignItems='center'>
                            <Image src='images/terrace/icons/VarandaBig.png' paddingRight='32px'/>
                            <Text fontFamily='FivoMedium' as='span' fontSize='24px' fontWeight='400' color='#860A10'>
                                Varanda com sacada externa
                            </Text>
                          </Box>
                          <Box marginTop='24px'>
                            <Text as='p' fontSize='16px' fontWeight='400' color='#646464' fontFamily='FivoRegular' >
                                Tomar um chimarrão enquanto o sol nasce ou se põe não tem preço. O apartamento possui sacada externa ligada à sala de jantar.
                            </Text>
                          </Box>
                        </SwiperSlide>

                        <SwiperSlide className="terrace-slide">
                        <Box display='flex' alignItems='center'>
                            <Image src='images/terrace/icons/GarageBig.png' paddingRight='32px'/>
                            <Text fontFamily='FivoMedium' as='span' fontSize='24px' fontWeight='400' color='#860A10'>
                                Garagem
                            </Text>
                          </Box>
                          <Box marginTop='24px'>
                            <Text as='p' fontSize='16px' fontWeight='400' color='#646464' fontFamily='FivoRegular' >
                                Vaga única de box para carros. *Entre em contato para condições de novas vagas.
                            </Text>
                          </Box>
                        </SwiperSlide>
                    </Swiper>
                </Box>

                <Box display='flex' justifyContent='center' marginTop='40px'>
                    <Button bg='#860A10' color='#FFF' borderRadius='2px' fontSize='16px' fontFamily='FivoLight' _hover={{ bg: '#69050a'}} onClick={onOpen}>
                        ENTRAR EM CONTATO
                    </Button>
                </Box>

                <Box marginTop='80px' display='flex' flexDirection={{sm: 'column', md: 'row'}} justifyContent='space-between'>
                    <Box display='flex' flexDirection={{sm: 'column-reverse', md: 'column'}} alignItems='center'>
                        <Image src='images/terrace/image-5.png' />
                        <Box marginBottom={{sm: '32px', md: '0px'}}>
                        <Heading marginTop='64px' display='flex' alignItems='center' gap='10px' fontSize='36px' fontFamily='Nevrada' color='#860A10' lineHeight='40px' fontWeight='400'>
                            Tool <Text position='relative' bottom='20px' as='span' fontSize='110px' lineHeight='40px' color='#860A10' fontWeight='400' fontFamily='Highlight'>Sharing</Text>
                        </Heading>
                        <Text textAlign='center' marginTop='22px' fontSize='16px'  fontFamily='FivoRegular' color='#646464' fontWeight='400'>
                            Ferramentas compartilhadas
                        </Text>
                        </Box>
                    </Box>

                    <Box display='flex' flexDirection='column' alignItems='center' marginTop={{sm: '86px', md: '32px'}}>
                        <Heading fontSize='110px' lineHeight='40px' color='#860A10' fontWeight='400' fontFamily='Highlight'>
                            Bicicletário
                        </Heading>
                        <Text marginBottom='24px' w='120px' textAlign='center' marginTop='32px' fontSize='16px'  fontFamily='FivoRegular' color='#646464' fontWeight='400'>
                            Com suportes verticais
                        </Text>
                        <Image src='images/terrace/image-6.png' />
                    </Box>
                </Box>
            </Container>
        </Box>

        <Box backgroundImage='url(/images/terrace/perolado.png)' paddingBlock={{sm: '32px', lg: '0px'}} h={{lg: '789px'}} display='flex' alignItems='center' id='condominal'>
            <Container maxW={{sm: '93%', md: '738px', lg: '960px', xl: '1247px', '2xl' : '1247px'}}>
                <Box display='flex' flexDirection={{sm: 'column-reverse', lg: 'row'}} justifyContent={{lg: 'space-between'}} alignItems={{lg: 'center'}}>
                    <Box>
                        <Image w={{lg: '90%', xl: 'auto'}} src='/images/terrace/planta-baixa-condominal.png' />
                    </Box>

                    <Box>
                        <Heading display='flex' flexDirection={{sm: 'column', lg: 'row'}} alignItems='center' fontSize='36px' fontWeight='400' fontFamily='Nevrada' lineHeight='40px' color='#860A10'>
                            Área
                            <Heading position='relative' bottom='10px' left='12px' as='span' fontSize='110px' fontWeight='400' fontFamily='Highlight'>
                            Condominal
                            </Heading>
                        </Heading>
                        
                        <Stack justify={{sm: 'center', lg: 'start'}} direction={{sm: 'row', lg: 'column'}} spacing={{lg: '16px'}} flexWrap={{sm: 'wrap', lg: 'nowrap'}}>
                            <Box h={{sm: '140px', lg: 'auto'}} display='flex' flexDirection={{sm: 'column', lg: 'row'}} alignItems='center' gap='12px' w={{sm: '50%', lg: 'auto'}}>
                                <Box w='30px'>
                                <Image src='images/terrace/icons/Gourmet.png' />
                                </Box>
                                <Text textAlign={{sm: 'center', lg: 'start'}} fontSize='16px' color='#646464' fontWeight='400' fontFamily='FivoRegular'>
                                    Gourmet Plus
                                </Text>
                            </Box>

                            <Box h={{sm: '140px', lg: 'auto'}} display='flex' flexDirection={{sm: 'column', lg: 'row'}} alignItems='center' gap='12px' w={{sm: '50%', lg: 'auto'}}>
                                <Box w='30px'>
                                <Image src='images/terrace/icons/Jogos.png' />
                                </Box>
                                <Text textAlign={{sm: 'center', lg: 'start'}} fontSize='16px' color='#646464' fontWeight='400' fontFamily='FivoRegular'>
                                    Sala de jogos
                                </Text>
                            </Box>

                            <Box h={{sm: '140px', lg: 'auto'}} display='flex' flexDirection={{sm: 'column', lg: 'row'}} alignItems='center' gap='12px' w={{sm: '50%', lg: 'auto'}}>
                                <Box w='30px'>
                                <Image src='images/terrace/icons/Gourmet2.png' />
                                </Box>
                                <Text textAlign={{sm: 'center', lg: 'start'}} fontSize='16px' color='#646464' fontWeight='400' fontFamily='FivoRegular'>
                                    Espaço Gourmet
                                </Text>
                            </Box>

                            <Box h={{sm: '140px', lg: 'auto'}} display='flex' flexDirection={{sm: 'column', lg: 'row'}} alignItems='center' gap='12px' w={{sm: '50%', lg: 'auto'}}>
                                <Box w='30px'>
                                <Image src='images/terrace/icons/Fitness.png' />
                                </Box>
                                <Text textAlign={{sm: 'center', lg: 'start'}} fontSize='16px' color='#646464' fontWeight='400' fontFamily='FivoRegular'>
                                    Academia
                                </Text>
                            </Box>

                            <Box h={{sm: '140px', lg: 'auto'}} display='flex' flexDirection={{sm: 'column', lg: 'row'}} alignItems='center' gap='12px' w={{sm: '50%', lg: 'auto'}}>
                                <Box w='30px'>
                                <Image src='images/terrace/icons/Sofa.png' />
                                </Box>
                                <Text textAlign={{sm: 'center', lg: 'start'}} fontSize='16px' color='#646464' fontWeight='400' fontFamily='FivoRegular'>
                                    Living Residencial
                                </Text>
                            </Box>

                            <Box h={{sm: '140px', lg: 'auto'}} display='flex' flexDirection={{sm: 'column', lg: 'row'}} alignItems='center' gap='12px' w={{sm: '50%', lg: 'auto'}}>
                                <Box w='30px'>
                                <Image src='images/terrace/icons/Toy.png' />
                                </Box>
                                <Text textAlign={{sm: 'center', lg: 'start'}} fontSize='16px' color='#646464' fontWeight='400' fontFamily='FivoRegular'>
                                    Brinquedoteca
                                </Text>
                            </Box>

                            <Box h={{sm: '140px', lg: 'auto'}} display='flex' flexDirection={{sm: 'column', lg: 'row'}} alignItems='center' gap='12px' w={{sm: '50%', lg: 'auto'}}>
                                <Box w='30px'>
                                <Image src='images/terrace/icons/Playground.png' />
                                </Box>
                                <Text textAlign={{sm: 'center', lg: 'start'}} fontSize='16px' color='#646464' fontWeight='400' fontFamily='FivoRegular'>
                                    Playground
                                </Text>
                            </Box>

                            <Box h={{sm: '140px', lg: 'auto'}} display='flex' flexDirection={{sm: 'column', lg: 'row'}} alignItems='center' gap='12px' w={{sm: '50%', lg: 'auto'}}>
                                <Box w='30px'>
                                <Image src='images/terrace/icons/Quadra.png' />
                                </Box>
                                <Text textAlign={{sm: 'center', lg: 'start'}} fontSize='16px' color='#646464' fontWeight='400' fontFamily='FivoRegular'>
                                    Mini Quadra Externa
                                </Text>
                            </Box>

                            <Box h={{sm: '140px', lg: 'auto'}} display='flex' flexDirection={{sm: 'column', lg: 'row'}} alignItems='center' gap='12px' w={{sm: '50%', lg: 'auto'}}>
                                <Box w='30px'>
                                <Image src='images/terrace/icons/Pet.png' />
                                </Box>
                                <Text textAlign={{sm: 'center', lg: 'start'}} fontSize='16px' color='#646464' fontWeight='400' fontFamily='FivoRegular'>
                                    Espaço pet
                                </Text>
                            </Box>

                            <Box h={{sm: '140px', lg: 'auto'}} display='flex' flexDirection={{sm: 'column', lg: 'row'}} alignItems='center' gap='12px' w={{sm: '50%', lg: 'auto'}}>
                                <Box w='30px'>
                                <Image src='images/terrace/icons/Convivencia.png' />
                                </Box>
                                <Text textAlign={{sm: 'center', lg: 'start'}} fontSize='16px' color='#646464' fontWeight='400' fontFamily='FivoRegular'>
                                    Área de Convivência Externa
                                </Text>
                            </Box>

                            <Box h={{sm: '140px', lg: 'auto'}} display='flex' flexDirection={{sm: 'column', lg: 'row'}} alignItems='center' gap='12px' w={{sm: '50%', lg: 'auto'}}>
                                <Box w='30px'>
                                <Image src='images/terrace/icons/Fireplace.png' />
                                </Box>
                                <Text textAlign={{sm: 'center', lg: 'start'}} fontSize='16px' color='#646464' fontWeight='400' fontFamily='FivoRegular'>
                                    Fire place (Lareira externa)
                                </Text>
                            </Box>

                            <Box h={{sm: '140px', lg: 'auto'}} display='flex' flexDirection={{sm: 'column', lg: 'row'}} alignItems='center' gap='12px' w={{sm: '50%', lg: 'auto'}}>
                                <Box w='30px'>
                                <Image src='images/terrace/icons/Tool.png' />
                                </Box>
                                <Text textAlign={{sm: 'center', lg: 'start'}} fontSize='16px' color='#646464' fontWeight='400' fontFamily='FivoRegular'>
                                    Tool sharing (Ferramentas compartilhadas)
                                </Text>
                            </Box>

                            <Box h={{sm: '140px', lg: 'auto'}} display='flex' flexDirection={{sm: 'column', lg: 'row'}} alignItems='center' gap='12px' w={{sm: '50%', lg: 'auto'}}>
                                <Box w='30px'>
                                <Image src='images/terrace/icons/Bicicleta.png' />
                                </Box>
                                <Text textAlign={{sm: 'center', lg: 'start'}} fontSize='16px' color='#646464' fontWeight='400' fontFamily='FivoRegular'>
                                    Bicicletário
                                </Text>
                            </Box>
                        </Stack>
                    </Box>
                </Box>
            </Container>
        </Box>

        <Box paddingBlock='90px' bg='#F7FAFC'>
                <Box display='flex' flexDirection={{sm: 'column', lg: 'row'}} justifyContent='space-between'>
                    <Box flex={{xl: 'none'}} marginLeft='auto'>
                        <Image w={{lg: '100%', xl: 'auto'}} src='images/terrace/image-7.png' />
                    </Box>

                    <Box backgroundImage='url(images/terrace/textures/perolado-1.png)' paddingBlock={{sm: '20px', lg: '0px'}} w={{lg: '60%', xl: '784px'}} h={{lg: '278px', xl: '395px'}}>
                        <Box display='flex' alignItems='center' paddingLeft='16px' marginTop={{sm: '40px', lg: '40px', xl: '102px'}}>
                            <Heading as='h2' color='#860A10' fontWeight='400' fontSize='36px' fontFamily='Nevrada' lineHeight='40px'>
                                Salão de
                            </Heading>
                            <Heading marginLeft='10px' marginBottom='7px' as='h2' color='#860A10' fontWeight='400' fontSize='110px' fontFamily='Highlight' lineHeight='40px'>
                                Festas
                            </Heading>
                        </Box>
                        <Box paddingLeft='16px' marginTop={{sm: '24px', lg: '48px'}} paddingRight={{lg: '60px', xl: '120px', '2xl': '352px'}}>
                        <Text as='p' color='#646464' fontSize='16px' fontWeight='400' fontFamily='FivoRegular'>
                            O espaço perfeito para tornar você o melhor <strong>anfitrião</strong> que seus convidados já viram. Espaço para festas moderno conta com cozinha auxiliar completa e bem equipada.
                        </Text>
                        </Box>
                    </Box>
                </Box>

                <Box marginTop='16px' display='flex' flexDirection={{sm: 'column', lg: 'row'}} justifyContent='space-between'>
                    <Box backgroundImage='url(images/terrace/textures/perolado-1.png)' w={{lg: '60%', xl: '784px'}} h={{lg: '278px', xl: '395px'}}>
                        <Box display='flex' alignItems='center' paddingRight='16px' paddingTop={{sm: '60px', lg: 'none'}} marginTop={{lg: '40px', xl: '102px'}} paddingLeft={{sm: '16px', lg: '16px', xl: '132px', '2xl': '355px'}}>
                            <Heading as='h2' color='#860A10' fontWeight='400' fontSize='36px' fontFamily='Nevrada' lineHeight='40px'>
                                Fitness
                            </Heading>
                            <Heading marginLeft='10px' marginBottom='7px' as='h2' color='#860A10' fontWeight='400' fontSize='110px' fontFamily='Highlight' lineHeight='40px'>
                                Center
                            </Heading>
                        </Box>
                        <Box paddingRight='16px' marginTop='48px' paddingBottom={{sm: '32px', lg: '0px'}} paddingLeft={{sm: '16px', lg: '16px', xl: '132px', '2xl': '355px'}}>
                        <Text as='p' color='#646464' fontSize='16px' fontWeight='400' fontFamily='FivoRegular'>
                            O espaço fitness é equipado para um treino <strong>eficiente</strong> a qualquer momento do dia. O espaço minimalista possui os aparelhos essenciais para manter sua saúde.
                        </Text>
                        </Box>
                    </Box>

                    <Box flex={{xl: 'none'}} marginRight='auto'>
                        <Image src='images/terrace/image-8.png' />
                    </Box>
                </Box>

                <Box marginTop='16px' display='flex' flexDirection={{sm: 'column', lg: 'row'}} justifyContent='space-between'>
                    <Box flex={{xl: 'none'}} marginLeft='auto'>
                        <Image src='images/terrace/image-9.png' />
                    </Box>

                    <Box backgroundImage='url(images/terrace/textures/perolado-1.png)' paddingBlock={{sm: '40px', lg: '0px'}} w={{lg: '60%', xl: '784px'}} h={{lg: '278px', xl: '395px'}}>
                        <Box display='flex' alignItems='center' paddingLeft='16px' marginTop={{lg: '40px', xl: '102px'}}>
                            <Heading as='h2' color='#860A10' fontWeight='400' fontSize='36px' fontFamily='Nevrada' lineHeight='40px'>
                                Espaço
                            </Heading>
                            <Heading marginLeft='10px' marginBottom='7px' as='h2' color='#860A10' fontWeight='400' fontSize='110px' fontFamily='Highlight' lineHeight='40px'>
                                Pet
                            </Heading>
                        </Box>
                        <Box paddingLeft='16px' marginTop={{sm: '24px', lg: '24px', xl: '48px'}} paddingRight={{lg: '60px', xl: '120px', '2xl': '352px'}}>
                        <Text as='p' color='#646464' fontSize='16px' fontWeight='400' fontFamily='FivoRegular'>
                        Área externa para que seu pet possa correr e relaxar. Conta com cercado de segurança e pergolado de apoio, para a segurança dos melhores amigos. O Terrace apresenta <strong>conforto</strong> também para seus animais de estimação.
                        </Text>
                        </Box>
                    </Box>
                </Box>

                <Box marginTop='16px' display='flex' flexDirection={{sm: 'column', lg: 'row'}} justifyContent='space-between'>
                    <Box backgroundImage='url(images/terrace/textures/perolado-1.png)' paddingBlock={{sm: '40px', lg: '0px'}} w={{lg: '60%', xl: '784px'}} h={{lg: '278px', xl: '395px'}}>
                        <Box display='flex' flexDirection={{sm: 'column', lg: 'row'}} alignItems={{lg: 'center'}} paddingRight='16px' marginTop={{lg: '40px', xl: '102px'}} paddingLeft={{sm: '16px', lg: '16px', xl: '132px', '2xl': '355px'}}>
                            <Heading marginBottom='7px' as='h2' color='#860A10' fontWeight='400' fontSize='110px' fontFamily='Highlight' lineHeight='40px'>
                                Playground
                            </Heading>
                            <Heading marginLeft='10px' marginTop={{sm: '24px', lg: '0px'}} as='h2' color='#860A10' fontWeight='400' fontSize='36px' fontFamily='Nevrada' lineHeight='40px'>
                                Externo
                            </Heading>
                        </Box>
                        <Box paddingRight='16px' marginTop='48px' paddingLeft={{sm: '16px', lg: '16px', xl: '132px', '2xl': '355px'}}>
                        <Text as='p' color='#646464' fontSize='16px' fontWeight='400' fontFamily='FivoRegular'>
                        Ambiente externo com quadra de futebol e playground completo para crianças se <strong>divertirem</strong> enquanto pais aproveitam a <strong>tranquilidade</strong> e <strong>beleza</strong> do terraço. Possui conexão com Espaço de festas para que todos possam aproveitar grandes <strong>eventos</strong>.
                        </Text>
                        </Box>
                    </Box>

                    <Box flex={{xl: 'none'}} marginRight='auto'>
                        <Image src='images/terrace/image-10.png' />
                    </Box>
                </Box>
        </Box>

        <Box w='100%' h={{sm: '380px', lg: '588px'}} backgroundImage='url(images/terrace/banner-2.png)' display='flex' alignItems='center' backgroundSize='cover' backgroundPosition={{sm: '-300px', lg: '0px'}}>
            <Container maxW={{sm: '93%', md: '738px', lg: '960px', xl: '1247px', '2xl' : '1247px'}}>
                <Box>
                    <Heading as='h2' color='#FFF' fontFamily='Nevrada' fontSize={{sm: '36px', lg: '48px'}} w={{lg: '580px'}}>
                        A Elegância de Bento em um único lugar
                    </Heading>
                </Box>
                <Button marginTop='36px' size='lg' variant='outline' color='#FFF' fontSize='16px' _hover={{color: '#000', bg: '#E2E8F0'}} onClick={onOpen}>
                    <Text textTransform='uppercase' fontFamily='FivoRegular' fontWeight='450'>
                        Entrar em contato
                    </Text>
                </Button>
            </Container>
        </Box>

        <Box paddingTop='80px'>
            <Container maxW={{sm: '93%', md: '738px', lg: '960px', xl: '1247px', '2xl' : '1247px'}}>
                <Box display='flex' flexDirection={{sm: 'column', lg: 'row'}} justifyContent='space-between'>
                    <Box position='relative'>
                        <Image w='100%' src='images/terrace/image-11.png' />
                        <Box paddingBlock='6px' paddingInline='12px' boxShadow='0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)' bg='#FFF' position='absolute' display='flex' justifyContent='center' alignItems='center' bottom='0px' right='0px'>
                            <Text color='#860A10' fontSize='16px' fontWeight='450'>
                                Terraço Fire Place
                            </Text>
                        </Box>
                    </Box>

                    <Box position='relative' marginTop={{sm: '8px', lg: '0px'}}>
                        <Image w='100%' src='images/terrace/image-12.png' />
                        <Box boxShadow='0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)' bg='#FFF' position='absolute' w='156px' h='35px' display='flex' justifyContent='center' alignItems='center' bottom='0px' right='0px'>
                            <Text color='#860A10' fontSize='16px' fontWeight='450'>
                                Quadra Externa
                            </Text>
                        </Box>
                    </Box>
                </Box>

                <Box display='flex' flexDirection={{sm: 'column', lg: 'row'}} justifyContent='space-between' marginTop='8px'>
                    <Box position='relative'>
                        <Image w='100%' src='images/terrace/image-13.png' />
                        <Box boxShadow='0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)' bg='#FFF' position='absolute' w='156px' h='35px' display='flex' justifyContent='center' alignItems='center' bottom='0px' right='0px'>
                            <Text color='#860A10' fontSize='16px' fontWeight='450'>
                                Sala de Reunião
                            </Text>
                        </Box>
                    </Box>

                    <Box position='relative' marginTop={{sm: '8px', lg: '0px'}}>
                        <Image w='100%' src='images/terrace/image-14.png' />
                        <Box paddingBlock='6px' paddingInline='12px' boxShadow='0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)' bg='#FFF' position='absolute' display='flex' justifyContent='center' alignItems='center' bottom='0px' right='0px'>
                            <Text color='#860A10' fontSize='16px' fontWeight='450'>
                                Gourmet Plus
                            </Text>
                        </Box>
                    </Box>
                </Box>

                <Box display='flex' flexDirection={{sm: 'column', lg: 'row'}} justifyContent='space-between' marginTop='8px'>
                    <Box position='relative'>
                        <Image w='100%' src='images/terrace/image-15.png' />
                        <Box paddingBlock='6px' paddingInline='12px' boxShadow='0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)' bg='#FFF' position='absolute' display='flex' justifyContent='center' alignItems='center' bottom='0px' right='0px'>
                            <Text color='#860A10' fontSize='16px' fontWeight='450'>
                                Living Residencial
                            </Text>
                        </Box>
                    </Box>

                    <Box position='relative' marginTop={{sm: '8px', lg: '0px'}}>
                        <Image w='100%' src='images/terrace/image-16.png' />
                        <Box paddingBlock='6px' paddingInline='12px' boxShadow='0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)' bg='#FFF' position='absolute' display='flex' justifyContent='center' alignItems='center' bottom='0px' right='0px'>
                            <Text color='#860A10' fontSize='16px' fontWeight='450'>
                                Salão de Festas Gourmet
                            </Text>
                        </Box>
                    </Box>
                </Box>

                <Box marginTop='80px' flexDirection={{sm: 'column', lg: 'row'}} display='flex' justifyContent='space-between'>
                    <Box>
                        <Image w='100%' h={{lg: '360px', xl: 'auto'}} src='images/terrace/image-17.png' />
                    </Box>

                    <Box backgroundImage='images/terrace/perolado.png' w={{lg: '605px'}} h={{md: '280px', lg: '360px', xl: '419px'}} borderTopRightRadius='5px' borderBottomRightRadius='5px' paddingLeft={{sm: '12px', md: '56px'}} paddingRight={{sm: '12px', md: '0px'}} paddingBottom={{sm: '12px', md: '0px'}} paddingTop='30px'>
                        <Box>
                            <Heading as='h2' color='#860A10' fontFamily='Nevrada' fontWeight='400' fontSize={{sm: '36px', xl: '48px'}} w={{lg: '400px'}}>
                                Planejado em cada detalhe
                            </Heading>

                            <Text marginTop={{lg: '16px', xl: '40px'}} paddingRight={{lg: '12px', xl: '0px'}} as='p' color='#646464' fontSize='16px' fontWeight='400' fontFamily='FivoRegular'>
                                O Terrace Residence é um <strong>empreendimento exclusivo</strong>, com apartamentos confortáveis, ambientes de condomínio modernos e completos e  localização privilegiada.
                            </Text>

                            <Text marginTop={{lg: '12px', xl: '24px'}} paddingRight={{lg: '12px', xl: '0px'}} as='p' color='#646464' fontSize='16px' fontWeight='400' fontFamily='FivoRegular'>
                                Planejado em cada detalhe, é o que de mais <strong>elegante</strong> e <strong>confortável</strong> a engenharia pode oferecer para você.
                            </Text>

                            <Text as='span' display='block' color='#860A10' fontSize='18px' fontWeight='900' fontFamily='FivoBold' marginTop='32px'>
                                Entre em contato com seu corretor
                            </Text>
                        </Box>
                    </Box>
                </Box>

                <Box marginTop={{sm: '80px', lg: '200px'}} w='100%' h='400px' borderRadius='5px' bg='#860A10' display='flex' justifyContent='space-between'>
                    <Box display='flex' w={{lg: '55%'}} flexDirection='column' justifyContent='center' paddingLeft={{sm: '12px', lg: '68px'}} paddingRight={{sm: '12px', lg: '0px'}}>
                        <Heading as='h3' color='#FFF' fontSize={{sm: '32px', lg: '36px'}} fontWeight='450' fontFamily='FivoRegular'>
                            Fique por dentro de atualizações sobre o empreendimento
                        </Heading>
                        <Text w={{lg: '60%'}} marginTop='16px' as='p' color='#FFF' fontSize='16px' fontWeight='400' fontFamily='FivoLight'>
                            Informe seus dados para receber informações exclusivas sobre o Terrace Residence.
                        </Text>
                        <Button onClick={onOpen} marginTop='32px' flex='none' w='202px' h='48px' bg='#E2E8F0' color='#860A10' textTransform='uppercase' borderRadius='2px'>
                            Entrar em contato
                        </Button>
                    </Box>

                    <Box w='45%' position='relative' display={{sm: 'none', lg: 'block'}}>
                        <Image w='443px' h='553px' position='absolute' bottom='0' src='images/terrace/image-18.png'/>
                    </Box>
                </Box>
            </Container>
        </Box>

        <Box w='100%' h='400px' bg='#191919' marginTop='180px' position='relative'>
            <Box position='absolute' right='30%' top='-26px' cursor='pointer'>
                <ScrollToTopIcon onClick={scrollToTop}/>
            </Box>

            <Container maxW={{sm: '93%', md: '738px', lg: '960px', xl: '1247px', '2xl' : '1247px'}}>
                <Box display='flex' justifyContent='space-between' paddingTop={{sm: '60px', md: '150px'}}>
                    <Stack direction={{sm: 'column', md: 'row'}} align='center' spacing='18px'>
                        <Box>
                            <Image flex='none' src='images/terrace/logo-branco.png' />
                        </Box>
                        <Box>
                            <Image flex='none' src='images/terrace/logo-terrace.png' />
                        </Box>
                    </Stack>

                    <Stack direction='row' align='center' spacing='32px'>
                        <Text cursor='pointer' onClick={scrollToLocalization} display={{sm: 'none', xl: 'flex'}} color='#FFF' fontFamily='FivoBold' fontWeight='700'>
                            Localização
                        </Text>

                        <Text cursor='pointer' onClick={scrollToStats} display={{sm: 'none', xl: 'flex'}} color='#FFF' fontFamily='FivoBold' fontWeight='700'>
                            Características
                        </Text>

                        <Menu>
                            <MenuButton display={{sm: 'none', xl: 'flex'}}>
                                <Text color='#FFF' fontFamily='FivoBold' fontWeight='700'>
                                    Áreas do empreendimento
                                </Text>
                            </MenuButton>
                            <MenuList>
                                <HashLink to='/terrace#residencial' smooth>
                                <MenuItem>
                                    Residencial
                                </MenuItem>
                                </HashLink>

                                <HashLink to='/terrace#condominal' smooth>
                                <MenuItem>
                                    Condominal
                                </MenuItem>
                                </HashLink>
                            </MenuList>
                        </Menu>

                        <Button bg='transparent' border='solid 1px #FFF' color='#FFF' borderRadius='4px' fontSize={{sm: '12px', md: '16px'}} fontFamily='FivoRegular' fontWeight='300' onClick={onOpen} _hover={{bg: '#FFF', color: '#000'}}>
                            ENTRAR EM CONTATO
                        </Button>
                    </Stack>
                </Box>

                <Box display='flex' flexDirection={{sm: 'column', md: 'row'}} justifyContent={{sm: 'center', md: 'space-between'}} marginTop={{sm: '60px', md: '120px'}}>
                    <Box>
                        <Text textAlign={{sm: 'center', md: 'start'}} color='#FFF' fontFamily='FivoRegular' fontWeight='400' fontSize='16px'>
                            ©2022 Marini. Todos os direitos reservados
                        </Text>
                    </Box>

                    <Box display='flex' alignItems='center' justifyContent={{sm: 'center', md: 'start'}} gap='10px' marginTop={{sm: '12px', md: '0px'}}>
                        <Text textAlign={{sm: 'center', md: 'start'}} color='#FFF' fontFamily='FivoRegular' fontWeight='400' fontSize='16px'>
                            Desenvolvido por:
                        </Text>
                        <Box>
                        <Image src='images/terrace/logo-eagles.png' />
                        </Box>
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
                <Link as={HashLink} onClick={() => {onDrawerClose(); scrollToLocalization()}} to=''>
                    <Text fontFamily='FivoBold' fontSize='16px'>
                        Localização
                    </Text>
                </Link>
              </Box>

              <Box marginTop={1}>
              <HashLink onClick={() => {onDrawerClose(); scrollToStats()}} smooth to=''>
                <Text fontFamily='FivoBold' fontSize='16px'>
                    Características
                </Text>
              </HashLink>
              </Box>

              <Box>
              <Menu>
                <MenuButton bg='transparent' fontSize='16px' padding={0} margin={0} as={Button} rightIcon={<DropdownArrow2 />} _hover={{ bg: 'none'}} _active={{bg: 'transparent'}}>
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
                    <Link as={HashLink} onClick={onDrawerClose} to='/empreendimentos-entregues'>
                        <NavLink>
                            Condominal
                        </NavLink>
                    </Link>
                    </MenuItem>
                </MenuList>
            </Menu>

                <Box marginTop={0}>
                <Text fontFamily='FivoBold' cursor='pointer' onClick={onOpen} fontSize='16px'>
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
                        <FormModal action='https://submit-form.com/dgUhEJm9' empreendimento='Terrace' colorBg={true}/>
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