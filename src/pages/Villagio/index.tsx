import { Box, Button, Container, Divider, Flex, FormControl, FormErrorMessage, Grid, GridItem, Heading, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Text, useDisclosure } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import Marquee from "react-fast-marquee";
import { ReactNode, useEffect, useState } from "react";
import { FaAward, FaBed, FaBell, FaCarSide, FaHospital, FaMapMarkerAlt, FaRegBuilding, FaStar, FaWind } from "react-icons/fa"
import { BsBackpackFill, BsDropletFill } from "react-icons/bs";
import { TbBread, TbCar, TbDisabled, TbElevatorFilled, TbGlassChampagne, TbHammer, TbLeaf, TbMapPin, TbNote, TbSeedingFilled } from "react-icons/tb"
import { MdInsertPhoto, MdLocalGasStation, MdOutlineShoppingBag, MdOutlineShoppingCart, MdOutlineWbSunny } from "react-icons/md"

import banner from './images/banner.webp'
import fachadalateral from './images/fachada-lateral.webp'
import hall from './images/hall-de-entrada.webp'
import salao from './images/salao-de-festas.webp'
import sacadas from './images/sacadas.webp'
import ramos from './images/ramos.webp'
import ramos2 from './images/ramos-2.webp'
import ramos3 from './images/ramos-3.webp'
import rooftop from './images/rooftop-privativo.webp'
import pedras from './images/pedras.webp'
import apto01living from './images/apto1-living.webp'
import apto01cozinha from './images/apto1-cozinha.webp'
import apto01dormitorio from './images/apto1-dormitorio.webp'
import apto02living from './images/apto2-living.webp'
import apto04living from './images/apto4-living.webp'
import apto04dormitorio from './images/apto4-dormitorio.webp'
import rooftoptour from './images/rooftop-tour.webp'
import localizacao from './images/localizacao.webp'
import fachadafrontal from './images/fachadafrontal.webp'
import fachadafrontal2 from './images/fachada-frontal.webp'
import compass from './images/compass.png'
import estrutura from './images/estrutura.png'
import logogrande from './images/logo-grande.png'
import logomarini from './images/losgomaruaini 1.png'
import logocaixa from './images/logo-caixa.png'
import logovila from './images/logo-vila.png'
import eagles from './images/eagles.png'
import marquee1 from './images/marquee1.png'
import marquee2 from './images/marquee2.png'
import marquee3 from './images/marquee3.png'
import marquee4 from './images/marquee4.png'
import marquee5 from './images/marquee5.png'
import marquee6 from './images/marquee6.png'
import marquee7 from './images/marquee7.png'
import marquee8 from './images/marquee8.png'
import marquee9 from './images/marquee9.png'
import marquee10 from './images/marquee10.png'
import marquee11 from './images/marquee11.png'
import marquee12 from './images/marquee12.png'
import marquee13 from './images/marquee13.png'
import marquee14 from './images/marquee14.png'
import marquee15 from './images/marquee15.png'
import marquee16 from './images/marquee16.png'
import marquee17 from './images/marquee17.png'
import marquee18 from './images/marquee18.png'
import marquee19 from './images/marquee19.png'
import marquee20 from './images/marquee20.png'
import marquee21 from './images/marquee21.png'
import marquee22 from './images/marquee22.png'
import modalbanner from './images/modal-banner.png'
import modallogo from './images/logo-banner.png'
import { GiHamburgerMenu, GiPill } from "react-icons/gi";
import { BiBaguette } from "react-icons/bi";
import ImageMagnifier from "./components/ImageMagnifier";
import { Link } from "react-router-dom";
import { Controller, Form, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormspark } from "@formspark/use-formspark";
import { toast, ToastContainer } from "react-toastify";


const sections = ["Inicio", "Tour", "Localização"];

const marquees = [
    {
        label: 'hall de entrada',
        image: marquee1
    },
    {
        label: 'salão de festas',
        image: marquee2
    },
    {
        label: 'rooftop',
        image: marquee3
    },
    {
        label: 'rooftop',
        image: marquee4
    },
    {
        label: 'rooftop',
        image: marquee5
    },
    {
        label: 'rooftop',
        image: marquee6
    },
    {
        label: 'aptos 01 - living',
        image: marquee7
    },
    {
        label: 'aptos 01 - cozinha',
        image: marquee8
    },
    {
        label: 'aptos 01 - quarto 01',
        image: marquee9
    },
    {
        label: 'aptos 01 - quarto 02',
        image: marquee10
    },
    {
        label: 'aptos 01 - banheiro',
        image: marquee11
    },
    {
        label: 'aptos 01 - sacada',
        image: marquee12
    },
    {
        label: 'aptos 02 - living',
        image: marquee13
    },
    {
        label: 'aptos 02 - living',
        image: marquee14
    },
    {
        label: 'aptos 02 - quarto',
        image: marquee15
    },
    {
        label: 'aptos 04 - living',
        image: marquee16
    },
    {
        label: 'aptos 04 - quarto 01',
        image: marquee17
    },
    {
        label: 'aptos 04 - quarto 02',
        image: marquee18
    },
    {
        label: 'aptos 07 - living',
        image: marquee19
    },
    {
        label: 'aptos 07 - living',
        image: marquee20
    },
    {
        label: 'aptos 07 - sacada',
        image: marquee21
    },
    {
        label: 'aptos 07 - quarto 01',
        image: marquee22
    },
]

const schema = z.object({
    Nome: z.string({
        required_error: 'Por favor, insira seu nome.'
    }).trim().min(3, "Por favor, insira seu nome completo."),
    Email: z.string({
        required_error: 'Por favor, insira um e-mail válido.'
    }).email({
        message: 'Por favor, insira um e-mail válido.'
    }),
    Telefone: z.string({
        required_error: 'Por favor, insira seu telefone.'
    }).min(14, "Por favor, insira um telefone válido.")
        .max(15, "Por favor, insira um telefone válido.")
        .regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, "Por favor, insira um telefone válido."),
    Mensagem: z.string({
        required_error: 'Por favor, insira sua mensagem.'
    }).trim().min(10, "Por favor, insira uma mensagem com pelo menos 10 caracteres."),
})

const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");

    if (numbers.length <= 10) {
        return numbers.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3");
    } else {
        return numbers.replace(/^(\d{2})(\d{5})(\d{0,4})$/, "($1) $2-$3");
    }
};



const Villagio = () => {
    const [bgOpacity, setBgOpacity] = useState(1);
    const [activeSection, setActiveSection] = useState("");

    const [submit, submitting] = useFormspark({
        formId: '3LX6KIGLO',
    })

    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
        mode: 'onSubmit'
    })

    const onSubmit = async (data: any) => {
        await submit(data).then(() => {
            toast.success('Formulário enviado com sucesso!', {
                isLoading: false,
                theme: 'colored',
                autoClose: 3500
            })

            reset()

            onClose()
        }).catch(() => {
            toast.error('Ocorreu um erro ao enviar o formulário.', {
                isLoading: false,
                theme: 'colored',
                autoClose: 3500
            })
        })
      };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .map((entry) => entry.target.id);

                if (visibleSections.length > 0) {
                    setActiveSection(visibleSections[0]); // Pega a primeira seção visível
                }
            },
            { threshold: 0.6 } // Define quanto da seção precisa estar visível (60%)
        );

        sections.forEach((id) => {
            const section = document.getElementById(id);
            if (section) {
                setActiveSection(section.id);
                observer.observe(section)
            };
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            setActiveSection(id);

            section.scrollIntoView({ behavior: "smooth" });
        }
    };



    useEffect(() => {
        const handleScroll = () => {
            setBgOpacity(window.scrollY > 0 ? 0.9 : 1);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <ToastContainer />
            <Box sx={{ fontFamily: "Lexend", fontWeight: '800' }}>
                <Box as="header">
                    <Navbar bgOpacity={bgOpacity} sections={sections} scrollToSection={scrollToSection} activeSection={activeSection} onOpen={onOpen} />
                    <Box bgImage={banner} bgPosition='center' bgRepeat='no-repeat' bgSize='cover' sx={{ paddingBlock: '60px' }}>
                        <Container maxW={"container.xl"}>
                            <Grid templateColumns='repeat(12, 1fr)' justifyContent='space-between'>
                                <GridItem colSpan={{ base: 12, md: 8, lg: 6 }}>
                                    <Heading as='h1' fontFamily='Lexend Giga' size={{ base: 'xl' }} sx={{ color: '#FFF', textTransform: 'uppercase', fontWeight: 'medium', marginTop: '60px' }}>Um novo marco <br /> para viver com <br /> estilo e conforto</Heading>
                                    <Text as='p' sx={{ color: '#CFCFCF', fontWeight: 'light', marginTop: '26px' }}>
                                        O Villaggio Di Borgo combina design moderno e
                                        funcionalidade em uma localização privilegiada.
                                    </Text>
                                    <Flex gap='10px' sx={{ marginBlock: '48px' }}>
                                        <Button onClick={onOpen} sx={{ color: '#092B20', backgroundColor: '#FFF', paddingBlock: '22px', fontWeight: 'medium', borderRadius: '100px' }}>Contato</Button>
                                        <Button sx={{ color: '#FFF', backgroundColor: 'transparent', paddingBlock: '22px', fontWeight: 'medium', borderRadius: '100px', border: '1px solid #FFF', _hover: { backgroundColor: '#FFF', color: '#092B20' } }} key='Tour' onClick={() => scrollToSection('Tour')}>Tour</Button>
                                    </Flex>
                                    <Box sx={{ width: 'max-content' }}>
                                        <Popover closeOnBlur={false} placement="right">
                                            <PopoverTrigger>
                                                <Flex gap='4px' sx={{ cursor: 'pointer' }}>
                                                    <Box sx={{ marginTop: '2px' }}><FaMapMarkerAlt color="#FFF" /></Box>
                                                    <Text sx={{ color: '#FFF', fontWeight: 'light', fontSize: '12px' }}>
                                                        R. São Paulo, 685 Bairro Borgo
                                                        |
                                                        Bento Gonçalves/RS
                                                    </Text>
                                                </Flex>
                                            </PopoverTrigger>
                                            <PopoverContent display={{ base: 'none', md: 'block' }} width={{ base: '300px', lg: '550px' }} sx={{ padding: 0 }}>
                                                <PopoverArrow />
                                                <PopoverCloseButton />
                                                <PopoverBody sx={{ height: '500px', padding: 0 }}>
                                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3484.1957783959615!2d-51.5145121235873!3d-29.15890249078132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951c235450ecf385%3A0x67f52708bb05bbac!2sR.%20S%C3%A3o%20Paulo%2C%20685%20-%20Borgo%2C%20Bento%20Gon%C3%A7alves%20-%20RS%2C%2095705-420!5e0!3m2!1spt-BR!2sbr!4v1740844158426!5m2!1spt-BR!2sbr" width='100%' height='100%'></iframe>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                    </Box>
                                </GridItem>
                                <GridItem display={{ base: 'none', lg: 'block' }} colSpan={6} sx={{ marginLeft: 'auto' }}>
                                    <Image src={fachadalateral} alt="Fachada lateral" />
                                    <Flex sx={{ justifyContent: 'flex-end', marginTop: '10px' }}>
                                        <Text as='span' sx={{ color: '#FFF', fontSize: '14px' }}>• Fachada Frontal</Text>
                                    </Flex>
                                </GridItem>
                            </Grid>

                            <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} justifyContent='space-between' gap='24px' sx={{ marginTop: '60px' }}>
                                <GridItem colSpan={1}>
                                    <Box>
                                        <Image width='100%' src={hall} alt="Hall de entrada" />
                                        <Text as='span' sx={{ display: 'block', color: '#FFF', fontSize: '14px', marginTop: '12px' }}>• Hall de Entrada</Text>
                                    </Box>
                                </GridItem>
                                <GridItem colSpan={1}>
                                    <Box>
                                        <Image width='100%' src={salao} alt="Salão de Festas" />
                                        <Text as='span' sx={{ display: 'block', color: '#FFF', fontSize: '14px', marginTop: '12px' }}>• Salão de Festas</Text>
                                    </Box>
                                </GridItem>
                                <GridItem colSpan={{ base: 1, md: 2, lg: 1 }}>
                                    <Box>
                                        <Image width='100%' src={sacadas} alt="Sacadas" />
                                        <Text as='span' sx={{ display: 'block', color: '#FFF', fontSize: '14px', marginTop: '12px' }}>• Aptos 01 - Sacada</Text>
                                    </Box>
                                </GridItem>
                            </Grid>
                        </Container>
                    </Box>
                </Box>
                <Box sx={{ backgroundColor: '#EADED5', position: 'relative' }}>
                    <Image display={{ base: 'none', 'xl': 'block' }} sx={{ objectFit: 'cover', position: 'absolute', right: 0, bottom: 0 }} width='350px' src={ramos} alt="Ramos" />
                    <Container maxW={"container.xl"}>
                        <Flex gap={{ base: 0, 'lg': '60px' }} sx={{ paddingBlock: '60px' }} paddingRight={{ lg: '180px', '2xl': '180px' }}>
                            <Divider height={{ lg: '450px', xl: '380px', '2xl': '365px' }} sx={{ width: '7px', backgroundColor: '#000000', opacity: 1 }} orientation='vertical' />
                            <Box>
                                <Flex sx={{ backgroundColor: '#FFFFFF80', padding: '10px 16px', borderRadius: '100px', alignItems: 'center', gap: '10px', width: 'max-content', marginBottom: '32px' }}>
                                    <FaStar size='16px' />
                                    <Text sx={{ fontSize: '14px', lineHeight: '16px', marginTop: '2px', fontWeight: 'medium' }}>
                                        DESTAQUES
                                    </Text>
                                </Flex>
                                <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)' }} sx={{ marginTop: '20px', gap: '32px' }}>
                                    <GridItem>
                                        <DestaqueIcon icon={<FaBed />} text="Apartamentos com dois dormitórios (com ou sem suíte) e um dormitório" />
                                    </GridItem>
                                    <GridItem>
                                        <DestaqueIcon icon={<TbDisabled />} text="Acessibilidade: apartamentos adaptados para PNE" />
                                    </GridItem>
                                    <GridItem>
                                        <DestaqueIcon icon={<TbSeedingFilled />} text="Captação de água da chuva para jardim " />
                                    </GridItem>
                                    <GridItem>
                                        <DestaqueIcon icon={<FaAward />} text="Certificação de Qualidade Conformidade (PBQPH Nível A)" />
                                    </GridItem>
                                    <GridItem>
                                        <DestaqueIcon icon={<TbElevatorFilled />} text="Dois elevadores" />
                                    </GridItem>
                                    <GridItem>
                                        <DestaqueIcon icon={<BsDropletFill />} text="Medidores individuais de água e gás" />
                                    </GridItem>
                                    <GridItem>
                                        <DestaqueIcon icon={<FaBell />} text="Interfone com porteiro eletrônico" />
                                    </GridItem>
                                    <GridItem>
                                        <DestaqueIcon icon={<TbHammer />} text="Rebaixo de gesso em todo o ambiente" />
                                    </GridItem>
                                </Grid>
                            </Box>
                        </Flex>
                    </Container>
                </Box>

                <Grid templateColumns={{ base: 'repeat(12, 1fr)', lg: 'repeat(12, 1fr)', '2xl': 'repeat(2, 1fr)' }}>
                    <GridItem colSpan={{ base: 0, md: 4, lg: 5, '2xl': 1 }} bgImage={rooftop} bgRepeat='no-repeat' bgSize='cover' bgPosition='center' />
                    <GridItem position="relative" _after={{
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        bg: { base: "rgba(0, 0, 0, 0.8)", md: "rgba(0, 0, 0, 0.0)" }, // Máscara escura
                        zIndex: 0, // Fica atrás do conteúdo
                    }} bgImage={{ base: rooftop, md: 'none' }} bgRepeat='no-repeat' bgSize='cover' bgPosition='center' colSpan={{ base: 12, md: 8, lg: 7, '2xl': 1 }} sx={{ backgroundColor: '#131812' }} paddingLeft={{ base: '16px', md: '60px' }} paddingBlock={{ base: '100px' }} paddingRight={{ base: '48px', '2xl': '300px' }}>
                        <Flex position='relative' zIndex={1} sx={{ backgroundColor: '#1D241B', padding: '10px 16px', borderRadius: '100px', alignItems: 'center', gap: '10px', width: 'max-content', marginBottom: '32px' }}>
                            <TbLeaf color="#FFF" size='16px' />
                            <Text sx={{ color: '#FFF', fontSize: '14px', lineHeight: '16px', marginTop: '2px', fontWeight: 'medium' }}>
                                LAZER
                            </Text>
                        </Flex>
                        <Heading position='relative' zIndex={1} sx={{ color: '#FFF', fontWeight: 'medium', textTransform: 'uppercase' }}>
                            <Text as='span' sx={{ color: '#3A7D67' }}>Rooftop</Text> {''}
                            Privativo e<br /> Panorâmico
                        </Heading>

                        <Text position='relative' zIndex={1} as='p' sx={{ color: '#CFCFCF', marginTop: '32px', fontWeight: 'light' }}>Rooftop na cobertura, que oferece momentos de lazer ao ar livre, contemplar a vista panorâmica do bairro e desfrutar de privacidade.</Text>

                        <Button onClick={onOpen} position='relative' zIndex={1} sx={{ color: '#092B20', backgroundColor: '#FFF', paddingBlock: '24px', fontWeight: 'medium', borderRadius: '100px', marginTop: '48px', fontSize: '18px' }}>Contato</Button>
                    </GridItem>
                </Grid>

                <Box sx={{ backgroundColor: '#EADED5', position: 'relative', paddingBottom: '120px' }} id='Tour'>
                    <Image display={{ base: 'none', '2xl': 'block' }} sx={{ objectFit: 'cover', position: 'absolute', left: 0, top: 540 }} width='160px' src={ramos2} alt="Ramos" />
                    <Container maxW={"container.xl"}>
                        <Flex gap={{ base: 0, 'lg': '60px' }} sx={{ paddingBlock: '60px' }}>
                            <Divider height={{ lg: '200px' }} sx={{ width: '7px', backgroundColor: '#000000', opacity: 1 }} orientation='vertical' />
                            <Box>
                                <Flex sx={{ backgroundColor: '#FFFFFF80', padding: '10px 16px', borderRadius: '100px', alignItems: 'center', gap: '10px', width: 'max-content', marginBottom: '32px' }}>
                                    <MdInsertPhoto size='16px' />
                                    <Text sx={{ fontSize: '14px', lineHeight: '16px', marginTop: '2px', fontWeight: 'medium' }}>
                                        TOUR
                                    </Text>
                                </Flex>
                                <Heading sx={{ fontSize: '24px', color: '#131812', fontWeight: 'medium', textTransform: 'uppercase', letterSpacing: '4px' }}>Conhecendo os Ambientes</Heading>
                                <Text sx={{ color: '#13181295', fontWeight: 'light', marginTop: '32px' }}>No Villaggio di Borgo, conforto e elegância se encontram em espaços integrados e cuidadosamente planejados, com um design contemporâneo que atende às necessidades do dia a dia.</Text>
                            </Box>
                        </Flex>

                        <Grid gridTemplateColumns='repeat(12, 1fr)' gap='6px' position='relative'>
                            <Image display={{ base: 'none', '2xl': 'block' }} sx={{ objectFit: 'cover', position: 'absolute', right: -100, bottom: -100 }} width='360px' src={pedras} alt="Ramos" />
                            <GridItem colSpan={{ base: 12, lg: 7 }} bgImage={apto01living} bgRepeat='no-repeat' bgPos='center' bgSize='cover' height={{ base: '400px', md: '500px', lg: '400px' }}>
                                <Text sx={{ bgColor: '#092B20', color: '#FFF', fontWeight: 'regular', paddingBlock: '12px', paddingInline: '16px', width: 'max-content', borderRadius: '100px', marginTop: '24px', marginLeft: '24px' }}>• Aptos 01 - Living</Text>
                            </GridItem>
                            <GridItem colSpan={{ base: 12, lg: 5 }} bgImage={apto01cozinha} bgRepeat='no-repeat' bgPos='center' bgSize='cover' height={{ base: '400px', md: '500px', lg: '400px' }}>
                                <Text sx={{ bgColor: '#092B20', color: '#FFF', fontWeight: 'regular', paddingBlock: '12px', paddingInline: '16px', width: 'max-content', borderRadius: '100px', marginTop: '24px', marginLeft: '24px' }}>• Aptos 01 - Cozinha</Text>
                            </GridItem>
                            <GridItem colSpan={{ base: 12, lg: 5 }} bgImage={apto01dormitorio} bgRepeat='no-repeat' bgPos='center' bgSize='cover' height={{ base: '400px', md: '500px', lg: '400px' }}>
                                <Text sx={{ bgColor: '#092B20', color: '#FFF', fontWeight: 'regular', paddingBlock: '12px', paddingInline: '16px', width: 'max-content', borderRadius: '100px', marginTop: '24px', marginLeft: '24px' }}>• Aptos 01 - Dormitório 2</Text>
                            </GridItem>
                            <GridItem colSpan={{ base: 12, lg: 7 }} bgImage={apto02living} bgRepeat='no-repeat' bgPos='center' bgSize='cover' height={{ base: '400px', md: '500px', lg: '400px' }}>
                                <Text sx={{ bgColor: '#092B20', color: '#FFF', fontWeight: 'regular', paddingBlock: '12px', paddingInline: '16px', width: 'max-content', borderRadius: '100px', marginTop: '24px', marginLeft: '24px' }}>• Aptos 02 - Living</Text>
                            </GridItem>
                            <GridItem colSpan={{ base: 12, lg: 7 }} bgImage={apto04living} bgRepeat='no-repeat' bgPos='center' bgSize='cover' height={{ base: '400px', md: '500px', lg: '400px' }}>
                                <Text sx={{ bgColor: '#092B20', color: '#FFF', fontWeight: 'regular', paddingBlock: '12px', paddingInline: '16px', width: 'max-content', borderRadius: '100px', marginTop: '24px', marginLeft: '24px' }}>• Aptos 04 - Living</Text>
                            </GridItem>
                            <GridItem colSpan={{ base: 12, lg: 5 }} bgImage={apto04dormitorio} bgRepeat='no-repeat' bgPos='center' bgSize='cover' height={{ base: '400px', md: '500px', lg: '400px' }}>
                                <Text sx={{ bgColor: '#092B20', color: '#FFF', fontWeight: 'regular', paddingBlock: '12px', paddingInline: '16px', width: 'max-content', borderRadius: '100px', marginTop: '24px', marginLeft: '24px' }}>• Aptos 04 - Dormitório</Text>
                            </GridItem>
                            <GridItem colSpan={12} bgImage={rooftoptour} bgRepeat='no-repeat' bgPos={{ md: 'center' }} bgSize='cover' height={{ base: '400px', md: '500px', lg: '400px' }}>
                                <Text sx={{ bgColor: '#092B20', color: '#FFF', fontWeight: 'regular', paddingBlock: '12px', paddingInline: '16px', width: 'max-content', borderRadius: '100px', marginTop: '24px', marginLeft: '24px' }}>• Rooftop</Text>
                            </GridItem>
                        </Grid>
                    </Container>

                    <Box sx={{ paddingTop: '200px', paddingBottom: '150px', position: 'relative' }}>
                        <Image display={{ base: 'none', '2xl': 'block' }} sx={{ objectFit: 'cover', position: 'absolute', right: 0, top: 180 }} width='320px' src={ramos3} alt="Ramos" />
                        <Container maxW={"container.xl"}>
                            <Heading sx={{ fontSize: '24px', color: '#131812', fontWeight: 'medium', textTransform: 'uppercase', letterSpacing: '4px', textAlign: 'center' }}>Espaço Pensado para o seu Bem-Estar</Heading>
                            <Text maxWidth={{ lg: '800px' }} sx={{ marginInline: 'auto', color: '#13181295', fontWeight: 'light', marginTop: '32px', textAlign: 'center' }}>A harmonia do design e a funcionalidade criam o ambiente ideal para o seu descanso e bem-estar. Um espaço pensado para acolher, renovar e proporcionar momentos únicos.</Text>

                            <Box>

                            </Box>
                        </Container>
                    </Box>

                    <Box display={{ base: 'none', md: 'block' }}>
                        <Marquee pauseOnHover gradient gradientColor="" autoFill>
                            {marquees.map((marquee, index) => (
                                <Box key={marquee.label + ' - ' + index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginInline: '10px' }}>
                                    <Image src={marquee.image} alt={marquee.label} />
                                    <Text sx={{ marginTop: '48px', textTransform: 'uppercase' }}>{marquee.label}</Text>
                                </Box>
                            ))}
                        </Marquee>
                    </Box>

                    <Box display={{ base: 'block', md: 'none' }}>
                        <Marquee pauseOnHover gradient gradientWidth='40px' gradientColor="" autoFill>
                            {marquees.map((marquee, index) => (
                                <Box key={marquee.label + ' - ' + index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginInline: '10px' }}>
                                    <Image sx={{ height: '200px' }} src={marquee.image} alt={marquee.label} />
                                    <Text sx={{ marginTop: '48px', textTransform: 'uppercase' }}>{marquee.label}</Text>
                                </Box>
                            ))}
                        </Marquee>
                    </Box>
                </Box>

                <Box sx={{ backgroundColor: '#05412A' }}>
                    <Container maxW={"container.xl"}>
                        <Flex gap={{ base: 0, 'lg': '60px' }} sx={{ paddingBlock: '100px' }}>
                            <Divider height={{ lg: '630px', xl: '630px', '2xl': '630px' }} sx={{ width: '3px', backgroundColor: '#B5BFBC', opacity: 1 }} orientation='vertical' />
                            <Box>
                                <Flex sx={{ backgroundColor: '#FFFFFF30', padding: '10px 16px', borderRadius: '100px', alignItems: 'center', gap: '10px', width: 'max-content', marginBottom: '32px' }}>
                                    <FaStar color="#FFF" size='16px' />
                                    <Text sx={{ fontSize: '14px', lineHeight: '16px', marginTop: '2px', fontWeight: 'medium', color: '#FFF' }}>
                                        DESTAQUES
                                    </Text>
                                </Flex>
                                <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} sx={{ marginTop: '20px', gap: '32px' }}>
                                    <GridItem>
                                        <Box height={{ base: '265px' }} paddingInline={{ base: '35px' }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#092B20', borderRadius: '5px' }}>
                                            <Box sx={{ border: 'solid 1px #FFFFFF32', padding: '16px', maxWidth: 'max-content', borderRadius: '100px' }}>
                                                <FaCarSide color="#FFF" size='32px' />
                                            </Box>
                                            <Text as='span' sx={{ display: 'block', color: '#FFF', fontWeight: 'bold', fontSize: '18px', marginTop: '20px', marginBottom: '12px' }}>Vagas Cobertas</Text>
                                            <Text as='p' sx={{ color: '#FFFFFF70', fontWeight: 'light', fontSize: '12px' }}>Proteção e comodidade para seu veículo</Text>
                                        </Box>
                                    </GridItem>
                                    <GridItem>
                                        <Box height={{ base: '265px' }} paddingInline={{ base: '35px' }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#092B20', borderRadius: '5px' }}>
                                            <Box sx={{ border: 'solid 1px #FFFFFF32', padding: '16px', maxWidth: 'max-content', borderRadius: '100px' }}>
                                                <MdOutlineWbSunny color="#FFF" size='32px' />
                                            </Box>
                                            <Text as='span' sx={{ display: 'block', color: '#FFF', fontWeight: 'bold', fontSize: '18px', marginTop: '20px', marginBottom: '12px' }}>Sacadas Abertas</Text>
                                            <Text as='p' sx={{ color: '#FFFFFF70', fontWeight: 'light', fontSize: '12px' }}>Amplitude e liberdade ao ar livre</Text>
                                        </Box>
                                    </GridItem>
                                    <GridItem>
                                        <Box height={{ base: '265px' }} paddingInline={{ base: '35px' }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#092B20', borderRadius: '5px' }}>
                                            <Box sx={{ border: 'solid 1px #FFFFFF32', padding: '16px', maxWidth: 'max-content', borderRadius: '100px' }}>
                                                <FaRegBuilding color="#FFF" size='32px' />
                                            </Box>
                                            <Text as='span' sx={{ display: 'block', color: '#FFF', fontWeight: 'bold', fontSize: '18px', marginTop: '20px', marginBottom: '12px' }}>Rooftop</Text>
                                            <Text as='p' sx={{ color: '#FFFFFF70', fontWeight: 'light', fontSize: '12px' }}>Vista no alto para lazer e momentos únicos</Text>
                                        </Box>
                                    </GridItem>
                                    <GridItem>
                                        <Box height={{ base: '265px' }} paddingInline={{ base: '35px' }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#092B20', borderRadius: '5px' }}>
                                            <Box sx={{ border: 'solid 1px #FFFFFF32', padding: '16px', maxWidth: 'max-content', borderRadius: '100px' }}>
                                                <TbGlassChampagne color="#FFF" size='32px' />
                                            </Box>
                                            <Text as='span' sx={{ display: 'block', color: '#FFF', fontWeight: 'bold', fontSize: '18px', marginTop: '20px', marginBottom: '12px' }}>Salão de Festas</Text>
                                            <Text as='p' sx={{ color: '#FFFFFF70', fontWeight: 'light', fontSize: '12px' }}>Espaço ideal para suas celebrações</Text>
                                        </Box>
                                    </GridItem>
                                    <GridItem>
                                        <Box height={{ base: '265px' }} paddingInline={{ base: '35px' }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#092B20', borderRadius: '5px' }}>
                                            <Box sx={{ border: 'solid 1px #FFFFFF32', padding: '16px', maxWidth: 'max-content', borderRadius: '100px' }}>
                                                <FaWind color="#FFF" size='32px' />
                                            </Box>
                                            <Text as='span' sx={{ display: 'block', color: '#FFF', fontWeight: 'bold', fontSize: '18px', marginTop: '20px', marginBottom: '12px' }}>Água quente e Split </Text>
                                            <Text as='p' sx={{ color: '#FFFFFF70', fontWeight: 'light', fontSize: '12px' }}>Espera de água quente e Split: consulte as opções</Text>
                                        </Box>
                                    </GridItem>
                                    <GridItem>
                                        <Box height={{ base: '265px' }} paddingInline={{ base: '35px' }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#092B20', borderRadius: '5px' }}>
                                            <Box sx={{ border: 'solid 1px #FFFFFF32', padding: '16px', maxWidth: 'max-content', borderRadius: '100px' }}>
                                                <GiHamburgerMenu color="#FFF" size='32px' />
                                            </Box>
                                            <Text as='span' sx={{ display: 'block', color: '#FFF', fontWeight: 'bold', fontSize: '18px', marginTop: '20px', marginBottom: '12px' }}>Persianas</Text>
                                            <Text as='p' sx={{ color: '#FFFFFF70', fontWeight: 'light', fontSize: '12px' }}>Esquadrias em alumínio com persianas nos dormitórios</Text>
                                        </Box>
                                    </GridItem>
                                </Grid>
                            </Box>
                        </Flex>
                    </Container>
                </Box>

                <Grid position={{ base: 'relative' }} id='Localização' templateColumns={{ base: 'repeat(12, 1fr)', lg: 'repeat(12, 1fr)', '2xl': 'repeat(2, 1fr)' }}>
                    <GridItem position="relative" bgSize='cover' bgPosition='center' colSpan={{ base: 12, md: 12, lg: 7, '2xl': 2 }} sx={{ backgroundColor: '#131812' }} paddingBlock={{ base: '100px' }} paddingRight={{ base: '60px', md: '100px', '2xl': '80px' }}>
                        <Container maxW={"container.xl"} paddingRight={{ base: '0', lg: '200px', '2xl': '730px' }} paddingLeft={{ '2xl': '60px' }}>
                            <Flex position='relative' zIndex={1} sx={{ backgroundColor: '#1D241B', padding: '10px 16px', borderRadius: '100px', alignItems: 'center', gap: '10px', width: 'max-content', marginBottom: '32px' }}>
                                <TbMapPin color="#FFF" size='16px' />
                                <Text sx={{ color: '#FFF', fontSize: '14px', lineHeight: '16px', marginTop: '2px', fontWeight: 'medium' }}>
                                    LOCALIZAÇÃO
                                </Text>
                            </Flex>
                            <Heading position='relative' zIndex={1} sx={{ color: '#FFF', fontWeight: 'medium', textTransform: 'uppercase' }}>
                                <Text as='span' sx={{ color: '#3A7D67' }}>Localização estratégica,</Text> {''}
                                Próximo ao centro
                            </Heading>

                            <Text position='relative' zIndex={1} as='p' sx={{ color: '#CFCFCF', marginTop: '32px', fontWeight: 'light' }}>Situado em Bento Gonçalves, a cidade dos vinhedos, o Villaggio Di Borgo reflete toda a essência da região, com o charme único que só a Serra Gaúcha oferece.</Text>
                            <Text position='relative' zIndex={1} as='p' sx={{ color: '#CFCFCF', marginTop: '32px', fontWeight: 'light' }}>R. São Paulo, 685 Bairro Borgo</Text>
                            <Text position='relative' zIndex={1} as='p' sx={{ color: '#CFCFCF', fontWeight: 'light' }}>Bento Gonçalves/RS</Text>
                            <Button onClick={onOpen} position='relative' zIndex={1} sx={{ color: '#092B20', backgroundColor: '#FFF', paddingBlock: '24px', fontWeight: 'medium', borderRadius: '100px', marginTop: '48px', fontSize: '18px' }}>Contato</Button>
                        </Container>
                    </GridItem>
                    <GridItem display={{ base: 'none', lg: 'block' }} width={{ lg: '50vw' }} height='100%' right={0} position={{ base: 'absolute' }} colSpan={{ base: 0, md: 4, lg: 5, '2xl': 1 }} bgImage={localizacao} bgRepeat='no-repeat' bgSize='cover' bgPosition='center' />
                </Grid>

                <Box bgColor='#EADED5' paddingBlock={{ base: '100px', lg: '160px' }}>
                    <Container maxW={"container.xl"}>
                        <Flex sx={{ paddingBlock: '100px', justifyContent: 'space-between' }}>
                            <Image display={{ base: 'none', lg: 'block' }} src={fachadafrontal} alt="Fachada da Frente" />
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
                                <Heading sx={{ fontSize: '24px', color: '#131812', fontWeight: 'medium', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '60px' }}>Distâncias para Comodidades</Heading>
                                <Box width={{ base: '100%', lg: '390px', xl: '480px' }} sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #00000040', paddingBlock: '10px', marginTop: '32px' }}>
                                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}><BiBaguette size='32px' color='#131812' /> <Text sx={{ fontWeight: 'medium' }}>Padaria</Text></Box>
                                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}><TbCar size='32px' color='#131812' /> <Text sx={{ fontWeight: 'medium' }}>1 min</Text></Box>
                                </Box>

                                <Box width={{ base: '100%', lg: '390px', xl: '480px' }} sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #00000040', paddingBlock: '10px', marginTop: '32px' }}>
                                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}><MdOutlineShoppingCart size='32px' color='#131812' /> <Text sx={{ fontWeight: 'medium' }}>Mercado</Text></Box>
                                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}><TbCar size='32px' color='#131812' /> <Text sx={{ fontWeight: 'medium' }}>2 min</Text></Box>
                                </Box>

                                <Box width={{ base: '100%', lg: '390px', xl: '480px' }} sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #00000040', paddingBlock: '10px', marginTop: '32px' }}>
                                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}><MdLocalGasStation size='32px' color='#131812' /> <Text sx={{ fontWeight: 'medium' }}>Posto de Gasolina</Text></Box>
                                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}><TbCar size='32px' color='#131812' /> <Text sx={{ fontWeight: 'medium' }}>3 min</Text></Box>
                                </Box>

                                <Box width={{ base: '100%', lg: '390px', xl: '480px' }} sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #00000040', paddingBlock: '10px', marginTop: '32px' }}>
                                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}><GiPill size='32px' color='#131812' /> <Text sx={{ fontWeight: 'medium' }}>Farmácia</Text></Box>
                                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}><TbCar size='32px' color='#131812' /> <Text sx={{ fontWeight: 'medium' }}>4 min</Text></Box>
                                </Box>

                                <Box width={{ base: '100%', lg: '390px', xl: '480px' }} sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #00000040', paddingBlock: '10px', marginTop: '32px' }}>
                                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}><FaHospital size='32px' color='#131812' /> <Text sx={{ fontWeight: 'medium' }}>Hospital</Text></Box>
                                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}><TbCar size='32px' color='#131812' /> <Text sx={{ fontWeight: 'medium' }}>6 min</Text></Box>
                                </Box>

                                <Box width={{ base: '100%', lg: '390px', xl: '480px' }} sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #00000040', paddingBlock: '10px', marginTop: '32px' }}>
                                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}><BsBackpackFill size='32px' color='#131812' /> <Text sx={{ fontWeight: 'medium' }}>Escola/Creche</Text></Box>
                                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}><TbCar size='32px' color='#131812' /> <Text sx={{ fontWeight: 'medium' }}>3 min</Text></Box>
                                </Box>

                                <Box width={{ base: '100%', lg: '390px', xl: '480px' }} sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #00000040', paddingBlock: '10px', marginTop: '32px' }}>
                                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}><MdOutlineShoppingBag size='32px' color='#131812' /> <Text sx={{ fontWeight: 'medium' }}>Shooping</Text></Box>
                                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}><TbCar size='32px' color='#131812' /> <Text sx={{ fontWeight: 'medium' }}>7 min</Text></Box>
                                </Box>
                            </Box>
                        </Flex>

                        <Box sx={{ marginTop: '100px' }}>
                            <Flex sx={{ backgroundColor: '#FFFFFF80', padding: '10px 16px', borderRadius: '100px', alignItems: 'center', gap: '10px', width: 'max-content', marginBottom: '32px' }}>
                                <TbHammer size='16px' />
                                <Text sx={{ fontSize: '14px', lineHeight: '16px', marginTop: '2px', fontWeight: 'medium' }}>
                                    ESTRUTURA
                                </Text>
                            </Flex>
                            <Heading sx={{ fontSize: '24px', color: '#131812', fontWeight: 'medium', textTransform: 'uppercase', letterSpacing: '4px' }}>Planejamento inteligente de luz e espaço</Heading>
                            <Text sx={{ color: '#13181295', fontWeight: 'light', marginTop: '32px' }}>O projeto arquitetônico foi cuidadosamente planejado para aproveitar ao máximo a luz natural nas áreas mais reservadas, garantindo conforto e bem-estar em cada detalhe.</Text>

                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end', gap: '8px', marginTop: '32px' }}>
                                <Image src={compass} alt='Rosa dos Ventos' />
                                <ImageMagnifier src={estrutura} />
                            </Box>
                        </Box>

                        <Box sx={{ marginTop: '100px' }}>
                            <Heading sx={{ fontSize: '24px', color: '#131812', fontWeight: 'medium', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '40px' }}>um total de 98 aptos</Heading>
                            <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(3, 1fr)' }} gap={{ base: '32px', md: '32px' }}>
                                <GridItem sx={{ padding: '30px', border: '1px solid #C9B9AD', borderRadius: '12px' }}>
                                    <Text sx={{ fontWeight: 'medium', marginBottom: '60px' }}>APTOS 01</Text>
                                    <Text sx={{ fontSize: '32px', fontWeight: 'bold' }}>73,91m²</Text>
                                    <Text>2 Dormitórios (1 com suíte)</Text>
                                </GridItem>

                                <GridItem sx={{ padding: '30px', border: '1px solid #C9B9AD', borderRadius: '12px' }}>
                                    <Text sx={{ fontWeight: 'medium', marginBottom: '60px' }}>APTOS 02</Text>
                                    <Text sx={{ fontSize: '32px', fontWeight: 'bold' }}>32,89m²</Text>
                                    <Text>1 Dormitório</Text>
                                </GridItem>

                                <GridItem sx={{ padding: '30px', border: '1px solid #C9B9AD', borderRadius: '12px' }}>
                                    <Text sx={{ fontWeight: 'medium', marginBottom: '60px' }}>APTOS 03</Text>
                                    <Text sx={{ fontSize: '32px', fontWeight: 'bold' }}>32,66m²</Text>
                                    <Text>1 Dormitório</Text>
                                </GridItem>

                                <GridItem sx={{ padding: '30px', border: '1px solid #C9B9AD', borderRadius: '12px' }}>
                                    <Text sx={{ fontWeight: 'medium', marginBottom: '60px' }}>APTOS 04</Text>
                                    <Text sx={{ fontSize: '32px', fontWeight: 'bold' }}>46,35m²</Text>
                                    <Text>2 Dormitório</Text>
                                </GridItem>

                                <GridItem sx={{ padding: '30px', border: '1px solid #C9B9AD', borderRadius: '12px' }}>
                                    <Text sx={{ fontWeight: 'medium', marginBottom: '60px' }}>APTOS 05</Text>
                                    <Text sx={{ fontSize: '32px', fontWeight: 'bold' }}>46,03m²</Text>
                                    <Text>2 Dormitório</Text>
                                </GridItem>

                                <GridItem sx={{ padding: '30px', border: '1px solid #C9B9AD', borderRadius: '12px' }}>
                                    <Text sx={{ fontWeight: 'medium', marginBottom: '60px' }}>APTOS 06</Text>
                                    <Text sx={{ fontSize: '32px', fontWeight: 'bold' }}>44,32m²</Text>
                                    <Text>1 Dormitório</Text>
                                </GridItem>

                                <GridItem sx={{ padding: '30px', border: '1px solid #C9B9AD', borderRadius: '12px' }}>
                                    <Text sx={{ fontWeight: 'medium', marginBottom: '60px' }}>APTOS 07</Text>
                                    <Text sx={{ fontSize: '32px', fontWeight: 'bold' }}>66,18m²</Text>
                                    <Text>2 Dormitórios (1 com suíte)</Text>
                                </GridItem>
                            </Grid>
                        </Box>

                        <Box sx={{ marginTop: '100px' }}>
                            <Flex sx={{ justifyContent: 'space-between' }}>
                                <Box maxWidth={{ base: '100%', lg: '40%' }}>
                                    <Flex sx={{ backgroundColor: '#FFFFFF80', padding: '10px 16px', borderRadius: '100px', alignItems: 'center', gap: '10px', width: 'max-content', marginBottom: '32px' }}>
                                        <TbNote size='16px' />
                                        <Text sx={{ fontSize: '14px', lineHeight: '16px', marginTop: '2px', fontWeight: 'medium' }}>
                                            NOTA
                                        </Text>
                                    </Flex>
                                    <Heading sx={{ fontSize: '24px', color: '#131812', fontWeight: 'medium', textTransform: 'uppercase', letterSpacing: '4px' }}>CONSULTE SEU CORRETOR DE CONFIANÇA</Heading>
                                    <Text as='p' sx={{ color: '#131812', marginTop: '32px', fontWeight: 'light' }}>Todas as imagens deste material tem caráter meramente ilustrativo por se tratar de bem a ser construído. </Text>
                                    <Text as='p' sx={{ color: '#131812', marginTop: '32px', fontWeight: 'light' }}>Os móveis, equipamentos e utensílios domésticos presentes no apartamento decorado e plantas baixas não fazem parte do contrato de aquisição. As áreas de lazer serão entregues conforme memorial descritivo. Os materiais e cores poderão sofrer alterações sem aviso prévio em função da disponibilidade dos mesmos no mercado.  </Text>
                                    <Text as='p' sx={{ color: '#131812', marginTop: '32px', fontWeight: 'light' }}>A assinatura do contrato de financiamento bancário depende de aprovação do crédito do cliente pela construtora e pelo agente financeiro. As condições ora indicadas poderão sofrer alterações sem prévia comunicação ou anuência dos interessados. </Text>
                                </Box>

                                <Image display={{ base: 'none', lg: 'block' }} src={fachadafrontal2} alt='Fachada da Frente' />
                            </Flex>
                        </Box>
                    </Container>
                </Box>

                <Box sx={{ backgroundColor: '#092B20', padding: '60px 0' }}>
                    <Container maxW={'container.xl'}>
                        <Flex flexDirection={{ base: 'column', lg: 'row' }} sx={{ justifyContent: 'center', alignItems: 'center' }} gap={{ base: '80px' }}>
                            <Image src={logogrande} alt='Logo Villagio' />
                            <Image src={logomarini} alt='Logo Marini' />
                            <Image width={{ lg: '10%' }} src={logocaixa} alt='Logo Caixa' />
                        </Flex>
                    </Container>
                </Box>

                <Box as='footer' sx={{ backgroundColor: '#131812' }}>
                    <Container maxW={'container.xl'}>
                        <Flex flexDirection={{ base: 'column', lg: 'row' }} sx={{ justifyContent: 'space-between', paddingBlock: '100px' }}>
                            <Box>
                                <Text sx={{ color: '#FFF', marginBottom: '12px', fontSize: '18px', fontWeight: 'medium', textTransform: 'uppercase' }}>marini construções</Text>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
                                    <a href="https://www.instagram.com/mariniconstrucoes/" target='_blank' >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.99805 0C3.13905 0 0 3.14195 0 7.00195V17.002C0 20.861 3.14195 24 7.00195 24H17.002C20.861 24 24 20.858 24 16.998V6.99805C24 3.13905 20.858 0 16.998 0H6.99805ZM19 4C19.552 4 20 4.448 20 5C20 5.552 19.552 6 19 6C18.448 6 18 5.552 18 5C18 4.448 18.448 4 19 4ZM12 6C15.309 6 18 8.691 18 12C18 15.309 15.309 18 12 18C8.691 18 6 15.309 6 12C6 8.691 8.691 6 12 6ZM12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8Z" fill="white" />
                                        </svg>
                                    </a>

                                    <a href='https://www.facebook.com/mariniconstrucoes' target='_blank'>
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.0008 1.7998C7.71078 1.7998 1.80078 7.70981 1.80078 14.9998C1.80078 21.6178 6.67578 27.082 13.028 28.0366V18.4984H9.76218V15.0286H13.028V12.7198C13.028 8.89721 14.8904 7.219 18.0674 7.219C19.589 7.219 20.3936 7.3318 20.7746 7.3834V10.4122H18.6074C17.2586 10.4122 16.7876 11.6908 16.7876 13.132V15.0286H20.7404L20.204 18.4984H16.7876V28.0648C23.2304 27.1906 28.2008 21.682 28.2008 14.9998C28.2008 7.70981 22.2908 1.7998 15.0008 1.7998Z" fill="white" />
                                        </svg>
                                    </a>
                                    <Text sx={{ fontWeight: 'light', color: '#FFF' }}>@mariniconstrucoes</Text>
                                </Box>
                                <Image src={logovila} alt='Logo Vila Felice' />
                            </Box>

                            <Box marginTop={{ base: '80px', lg: 0 }} sx={{ maxWidth: '500px' }}>
                                <Text sx={{ color: '#FFF', marginBottom: '22px', fontSize: '18px', fontWeight: 'medium', textTransform: 'uppercase' }}>CONTATO</Text>
                                <Flex>
                                    <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_930_173)">
                                            <path d="M20.6654 6.90723V15.5835C20.6654 16.2849 20.3974 16.9599 19.9162 17.4702C19.435 17.9806 18.7769 18.2877 18.0767 18.3289L17.9154 18.3335H5.08203C4.38059 18.3335 3.70564 18.0655 3.19529 17.5843C2.68494 17.1031 2.37777 16.445 2.33661 15.7448L2.33203 15.5835V6.90723L10.9899 12.6795L11.0963 12.74C11.2216 12.8012 11.3592 12.833 11.4987 12.833C11.6382 12.833 11.7758 12.8012 11.9011 12.74L12.0074 12.6795L20.6654 6.90723Z" fill="#CFCFCF" />
                                            <path d="M17.9176 3.66699C18.9076 3.66699 19.7757 4.18949 20.2597 4.97508L11.5009 10.8142L2.74219 4.97508C2.97202 4.60178 3.2878 4.28886 3.66317 4.06243C4.03854 3.83599 4.46262 3.70261 4.90002 3.67341L5.08427 3.66699H17.9176Z" fill="#CFCFCF" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_930_173">
                                                <rect width="22" height="22" fill="white" transform="translate(0.5)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <Text sx={{ color: '#FFF', marginLeft: '12px', fontWeight: 'light' }}>imoveis@mariniconstruções.com.br</Text>
                                </Flex>
                                <Flex sx={{ marginBlock: '20px' }}>
                                    <Box>
                                        <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_930_179)">
                                                <path d="M8.7487 2.75C8.91304 2.74995 9.07437 2.79409 9.2158 2.87779C9.35724 2.96149 9.47357 3.08167 9.55261 3.22575L9.59936 3.32658L11.4327 7.90992C11.5065 8.09431 11.5185 8.2977 11.4667 8.48948C11.415 8.68125 11.3024 8.85102 11.1458 8.97325L11.0541 9.03558L9.51961 9.95592L9.57736 10.0503C10.3077 11.2099 11.2888 12.191 12.4484 12.9213L12.5419 12.9782L13.4631 11.4455C13.5652 11.2751 13.7199 11.1424 13.9039 11.0675C14.0879 10.9926 14.2913 10.9796 14.4834 11.0303L14.5888 11.066L19.1721 12.8993C19.3247 12.9602 19.4582 13.061 19.5585 13.1911C19.6588 13.3213 19.7223 13.476 19.7423 13.6391L19.7487 13.75V17.4167C19.7487 18.9356 18.5176 20.1667 16.9437 20.1648C9.07961 19.6873 2.81053 13.4182 2.33203 5.5C2.33199 4.79856 2.6 4.12361 3.08121 3.61326C3.56242 3.10291 4.22046 2.79573 4.9207 2.75458L5.08203 2.75H8.7487Z" fill="#CFCFCF" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_930_179">
                                                    <rect width="22" height="22" fill="white" transform="translate(0.5)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </Box>
                                    <Text sx={{ color: '#FFF', marginLeft: '12px', fontWeight: 'light' }}>54 3452.2244</Text>
                                </Flex>
                                <Flex>
                                    <Box>
                                        <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_930_184)">
                                                <path d="M17.3337 4.24939C18.8484 5.76385 19.7146 7.808 19.7493 9.94961C19.7841 12.0912 18.9845 14.1624 17.5198 15.7251L17.3337 15.9176L13.4443 19.8061C12.9508 20.2993 12.2883 20.5865 11.5909 20.6095C10.8936 20.6325 10.2136 20.3895 9.68872 19.9299L9.55672 19.8061L5.66638 15.9167C4.1192 14.3695 3.25 12.2711 3.25 10.0831C3.25 7.89501 4.1192 5.79658 5.66638 4.24939C7.21357 2.70221 9.312 1.83301 11.5001 1.83301C13.6881 1.83301 15.7865 2.70221 17.3337 4.24939ZM11.5001 7.33306C11.1389 7.33306 10.7813 7.40419 10.4477 7.54239C10.114 7.68059 9.81087 7.88315 9.55551 8.13851C9.30015 8.39388 9.09758 8.69703 8.95938 9.03068C8.82118 9.36432 8.75005 9.72192 8.75005 10.0831C8.75005 10.4442 8.82118 10.8018 8.95938 11.1354C9.09758 11.4691 9.30015 11.7722 9.55551 12.0276C9.81087 12.283 10.114 12.4855 10.4477 12.6237C10.7813 12.7619 11.1389 12.8331 11.5001 12.8331C12.2294 12.8331 12.9289 12.5433 13.4446 12.0276C13.9603 11.5119 14.2501 10.8124 14.2501 10.0831C14.2501 9.35371 13.9603 8.65424 13.4446 8.13851C12.9289 7.62279 12.2294 7.33306 11.5001 7.33306Z" fill="#CFCFCF" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_930_184">
                                                    <rect width="22" height="22" fill="white" transform="translate(0.5)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </Box>
                                    <Text sx={{ color: '#FFF', marginLeft: '12px', fontWeight: 'light' }}>R. São Paulo, 685 Bairro Borgo Bento Gonçalves/RS</Text>
                                </Flex>
                            </Box>

                            <Flex marginTop={{ base: '80px', lg: 0 }} sx={{ flexDirection: 'column', gap: '16px' }}>
                                <Text sx={{ fontSize: '18px', color: '#FFF', fontWeight: 'medium' }}>NAVEGAR</Text>
                                <Text onClick={() => scrollToSection('Inicio')} sx={{ color: '#FFF', fontWeight: 'light', cursor: 'pointer' }}>Início</Text>
                                <Text onClick={() => scrollToSection('Tour')} sx={{ color: '#FFF', fontWeight: 'light', cursor: 'pointer' }}>Tour</Text>
                                <Text onClick={() => scrollToSection('Localização')} sx={{ color: '#FFF', fontWeight: 'light', cursor: 'pointer' }}>Localização</Text>
                                <Button onClick={onOpen} sx={{ width: 'max-content', color: '#FFF', backgroundColor: 'transparent', paddingBlock: '22px', fontWeight: 'medium', borderRadius: '100px', border: '1px solid #FFF', _hover: { backgroundColor: '#FFF', color: '#092B20' } }} >Contato</Button>
                            </Flex>
                        </Flex>

                        <Flex flexDirection={{ base: 'column', lg: 'row' }} gap={{ base: '40px', lg: '0' }} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text sx={{ color: '#FFF', fontWeight: 'light' }}>©2025 Marini. Todos os direitos reservados</Text>
                            <Text sx={{ color: '#FFF', fontWeight: 'light' }}>Número de incorporação: R2-106.865</Text>
                            <Flex sx={{ alignItems: 'center', gap: '12px' }}>
                                <Text sx={{ color: '#FFF', fontWeight: 'light' }}>Site desenvolvido por:</Text>
                                <a href="https://www.eaglesx.com/" target="_blank">
                                <Image src={eagles} alt='Eagles Logo' />
                                </a>
                            </Flex>
                        </Flex>
                    </Container>
                </Box>
            </Box>
            {isOpen && <Modal size='5xl' isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent sx={{ backgroundColor: '#EADED5' }}>
                    <ModalCloseButton />
                    <ModalBody sx={{ padding: 0 }}>
                        <Grid gridTemplateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}>
                            <GridItem sx={{ padding: '120px', display: 'flex', alignItems: 'center' }} bgImage={modalbanner}>
                                <Image src={modallogo} />
                            </GridItem>
                            <GridItem sx={{ paddingBlock: '120px', paddingInline: '80px' }}>
                                <Heading sx={{ fontSize: '24px', color: '#131812', fontWeight: 'medium', textTransform: 'uppercase', letterSpacing: '4px' }}>entre em contato</Heading>
                                <Text sx={{ color: '#092B20', fontWeight: 'light', marginTop: '24px', marginBottom: '40px' }}>
                                    Preencha o <Text as='span' sx={{ fontWeight: 'bold' }}>formulário abaixo</Text> e nossa equipe retornará seu contato
                                </Text>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '16px'}}>
                                    <Controller control={control} name="Nome" render={({ field, fieldState }) => (
                                        <FormControl>
                                            <Input {...field} paddingBlock={5} borderRadius={0} borderColor={fieldState.error?.message ? '#D32F2F' : '#13181250'} type='text' placeholder='Nome' />
                                            <Text sx={{ color: '#D32F2F', fontSize: '14px' }}>{fieldState.error?.message}</Text>
                                        </FormControl>
                                    )} />

                                    <Controller control={control} name="Email" render={({ field, fieldState }) => (
                                        <FormControl>
                                            <Input {...field} paddingBlock={5} borderRadius={0}  borderColor={fieldState.error?.message ? '#D32F2F' : '#13181250'}  type='text'  placeholder='E-mail' />
                                            <Text sx={{ color: '#D32F2F', fontSize: '14px' }}>{fieldState.error?.message}</Text>
                                        </FormControl>
                                    )} />

                                    <Controller defaultValue='' control={control} name="Telefone" render={({ field, fieldState }) => (
                                        <FormControl>
                                            <Input {...field} paddingBlock={5} borderRadius={0}  borderColor={fieldState.error?.message ? '#D32F2F' : '#13181250'}  type="text" placeholder='Telefone' maxLength={15} value={formatPhone(field.value)} onChange={(e) => field.onChange(formatPhone(e.target.value))} isInvalid={!!errors.telefone} />
                                            <Text sx={{ color: '#D32F2F', fontSize: '14px' }}>{fieldState.error?.message}</Text>
                                        </FormControl>
                                    )} />

                                    <Controller control={control} name="Mensagem" render={({ field, fieldState }) => (
                                        <FormControl>
                                            <Input {...field} borderRadius={0}  borderColor={fieldState.error?.message ? '#D32F2F' : '#13181250'}  as='textarea' placeholder='Escreva sua mensagem' />
                                            <Text sx={{ color: '#D32F2F', fontSize: '14px' }}>{fieldState.error?.message}</Text>
                                        </FormControl>
                                    )} />

                                    <Button disabled={submitting} sx={{ marginTop: '16px', backgroundColor: '#05412A', color: '#FFF', paddingInline: '36px', paddingBlock: '25px', _hover: { bgColor: '#06982B' }}} type="submit">ENVIAR</Button>
                                    </Box>
                                </form>
                            </GridItem>
                        </Grid>
                    </ModalBody>
                </ModalContent>
            </Modal> }
        </>
    )
}

const DestaqueIcon = ({ icon, text }: { icon: ReactNode, text: string }) => {
    return (
        <Flex sx={{ alignItems: 'center', gap: '12px' }}>
            <Box sx={{ backgroundColor: '#523018', padding: '12px', borderRadius: '100px', color: '#FFF', fontSize: '22px' }}>{icon}</Box>
            <Text sx={{ fontSize: '18px', fontWeight: '300' }}>{text}</Text>
        </Flex>
    )
}

export default Villagio 