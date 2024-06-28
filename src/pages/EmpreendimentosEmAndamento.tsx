import React, { useRef, useState } from "react";

import { Box, Container, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useDisclosure } from "@chakra-ui/react";
import { BannerAndamento } from "../components/BannerAndamento";
import { Swiper, SwiperSlide } from "swiper/react";
import { Helmet } from "react-helmet";


// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/zoom";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs, Zoom } from "swiper";
import { StyledEmpreendimentosAndamento } from "../styledcomponents/StyledEmpreendimentosAndamento";
import { StyledH2, StyledP, StyledStrong } from "../styledcomponents/Typograph";

import { MapPin } from 'tabler-icons-react';
import StyledButton from "../styledcomponents/Button";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import ImageMagnifier from "../components/ImageMagnifier";

export function EmpreendimentosEmAndamento() {

  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);


  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: isOpen2, onOpen: onOpen2, onClose: onClose2 } = useDisclosure()
  const { isOpen: isOpen3, onOpen: onOpen3, onClose: onClose3 } = useDisclosure()
  const { isOpen: isOpen4, onOpen: onOpen4, onClose: onClose4 } = useDisclosure()
  const { isOpen: isOpen5, onOpen: onOpen5, onClose: onClose5 } = useDisclosure()
  const { isOpen: isOpen6, onOpen: onOpen6, onClose: onClose6 } = useDisclosure()
  const { isOpen: isOpen7, onOpen: onOpen7, onClose: onClose7 } = useDisclosure()
  const { isOpen: isOpen8, onOpen: onOpen8, onClose: onClose8 } = useDisclosure()
  const { isOpen: isOpen9, onOpen: onOpen9, onClose: onClose9 } = useDisclosure()
  const { isOpen: isOpen10, onOpen: onOpen10, onClose: onClose10 } = useDisclosure()
  const { isOpen: isOpen11, onOpen: onOpen11, onClose: onClose11 } = useDisclosure()
  const { isOpen: isOpen12, onOpen: onOpen12, onClose: onClose12 } = useDisclosure()
  const { isOpen: isOpen13, onOpen: onOpen13, onClose: onClose13 } = useDisclosure()

  return (
    <>
      <Helmet>
        {/* charset */}
        <meta charSet="utf-8" />

        {/* url */}
        <meta content="http://www.mariniconstrucoes.com.br/empreendimentos-em-andamento" property="og:url" />
        <link href="http://www.mariniconstrucoes.com.br/empreendimentos-em-andamento" rel="canonical" />

        {/* title */}
        <title>Marini | Empreendimentos em andamento</title>
        <meta content="Marini | Empreendimentos em andamento" property="og:title" />
        <meta content="Marini | Empreendimentos em andamento" property="og:site_name" />

        {/* description */}
        <meta content="Residencial Jardim San Paulo está sendo construído no charmoso Bairro Borgo. O novo empreendimento conta com uma planta funcional e bem dividida de apartamentos que priorizam o bem estar, buscando valorização das unidades com excelentes orientações solares em perfeito contato com a natureza. A fachada busca conectar as torres entre si por elementos geométricos, dando ao empreendimento um caráter de sofisticação e valorização." name="description" />
        <meta content="Residencial Jardim San Paulo está sendo construído no charmoso Bairro Borgo. O novo empreendimento conta com uma planta funcional e bem dividida de apartamentos que priorizam o bem estar, buscando valorização das unidades com excelentes orientações solares em perfeito contato com a natureza. A fachada busca conectar as torres entre si por elementos geométricos, dando ao empreendimento um caráter de sofisticação e valorização." property="og:description" />

        {/* keyword */}
        <meta name='keywords' content='residencial, residencial jardim san paulo, san paulo, jardim san paulo, bairro borgo, novo empreendimento, apartamento san paulo' />

        {/* og type */}
        <meta content="website" property="og:type" />

        {/* og lang */}
        <meta content="pt_BR" property="og:locale" />
      </Helmet>
      <Navbar />
      <div>
        <StyledEmpreendimentosAndamento>
          <BannerAndamento />
          <Box paddingTop='72px' paddingBottom='124px'>
            <Box display='flex' justifyContent='center'>
              <img src="images/jardimsanpaulo-logo.png" alt="" />
            </Box>

            <Box>
              <Container maxW={{ sm: '93%', md: '738px', lg: '960px', xl: '1247px', '2xl': '1247px' }}>
                <Box marginTop='72px' display='flex' flexDirection={{ sm: 'column', lg: 'row' }} justifyContent={{ lg: 'space-between' }}>
                  <Box w={{ sm: '100%', lg: '45%', xl: '40%' }}>
                    <Swiper

                      breakpoints={{
                        768: {
                          centerInsufficientSlides: false,
                          centeredSlides: true
                        }
                      }}
                      spaceBetween={10}
                      navigation={true}
                      thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                      modules={[FreeMode, Navigation, Thumbs]}
                      centeredSlides={true}
                    >
                      <SwiperSlide className="andamento__slide">
                        <img src="images/sanpaulo-image-1.png" />
                      </SwiperSlide>

                      <SwiperSlide className="andamento__slide">
                        <img src="images/sanpaulo-image-2.png" />
                      </SwiperSlide>

                      <SwiperSlide className="andamento__slide">
                        <img src="images/sanpaulo-image-3.png" />
                      </SwiperSlide>

                      <SwiperSlide className="andamento__slide">
                        <img src="images/sanpaulo-image-4.png" />
                      </SwiperSlide>

                      <SwiperSlide className="andamento__slide">
                        <img src="images/sanpaulo-image-5.png" />
                      </SwiperSlide>

                      <SwiperSlide className="andamento__slide">
                        <img src="images/sanpaulo-image-6.png" />
                      </SwiperSlide>

                      <SwiperSlide className="andamento__slide">
                        <img src="images/sanpaulo-image-7.png" />
                      </SwiperSlide>

                      <SwiperSlide className="andamento__slide">
                        <img src="images/sanpaulo-image-8.png" />
                      </SwiperSlide>

                      <SwiperSlide className="andamento__slide">
                        <img src="images/sanpaulo-image-9.png" />
                      </SwiperSlide>

                      <SwiperSlide className="andamento__slide">
                        <img src="images/sanpaulo-image-10.png" />
                      </SwiperSlide>

                      <SwiperSlide className="andamento__slide">
                        <img src="images/sanpaulo-image-11.png" />
                      </SwiperSlide>

                      <SwiperSlide className="andamento__slide">
                        <img src="images/sanpaulo-image-12.png" />
                      </SwiperSlide>

                      <SwiperSlide className="andamento__slide">
                        <img src="images/sanpaulo-image-13.png" />
                      </SwiperSlide>

                      <SwiperSlide className="andamento__slide">
                        <img src="images/sanpaulo-image-14.png" />
                      </SwiperSlide>

                      <SwiperSlide className="andamento__slide">
                        <img src="images/sanpaulo-image-15.png" />
                      </SwiperSlide>

                      <SwiperSlide className="andamento__slide">
                        <img src="images/sanpaulo-image-16.png" />
                      </SwiperSlide>

                      <SwiperSlide className="andamento__slide">
                        <img src="images/sanpaulo-image-17.png" />
                      </SwiperSlide>

                      <SwiperSlide className="andamento__slide">
                        <img src="images/sanpaulo-image-18.png" />
                      </SwiperSlide>
                    </Swiper>

                    <Box marginTop='13px'>
                      <Swiper
                        slidesPerView={3}
                        breakpoints={{
                          960: {
                            slidesPerView: 3
                          },

                          768: {
                            slidesPerView: 5

                          }
                        }}
                        onSwiper={setThumbsSwiper}
                        spaceBetween={20}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                      >
                        <SwiperSlide>
                          <img src="images/sanpaulo-image-thumb-1.png" />
                        </SwiperSlide>

                        <SwiperSlide>
                          <img src="images/sanpaulo-image-thumb-2.png" />
                        </SwiperSlide>

                        <SwiperSlide>
                          <img src="images/sanpaulo-image-thumb-3.png" />
                        </SwiperSlide>

                        <SwiperSlide>
                          <img src="images/sanpaulo-image-thumb-4.png" />
                        </SwiperSlide>

                        <SwiperSlide>
                          <img src="images/sanpaulo-image-thumb-5.png" />
                        </SwiperSlide>

                        <SwiperSlide>
                          <img src="images/sanpaulo-image-thumb-6.png" />
                        </SwiperSlide>

                        <SwiperSlide>
                          <img src="images/sanpaulo-image-thumb-7.png" />
                        </SwiperSlide>

                        <SwiperSlide>
                          <img src="images/sanpaulo-image-thumb-8.png" />
                        </SwiperSlide>

                        <SwiperSlide>
                          <img src="images/sanpaulo-image-thumb-9.png" />
                        </SwiperSlide>

                        <SwiperSlide>
                          <img src="images/sanpaulo-image-thumb-10.png" />
                        </SwiperSlide>

                        <SwiperSlide>
                          <img src="images/sanpaulo-image-thumb-11.png" />
                        </SwiperSlide>

                        <SwiperSlide>
                          <img src="images/sanpaulo-image-thumb-12.png" />
                        </SwiperSlide>

                        <SwiperSlide>
                          <img src="images/sanpaulo-image-thumb-13.png" />
                        </SwiperSlide>

                        <SwiperSlide>
                          <img src="images/sanpaulo-image-thumb-14.png" />
                        </SwiperSlide>

                        <SwiperSlide>
                          <img src="images/sanpaulo-image-thumb-15.png" />
                        </SwiperSlide>

                        <SwiperSlide>
                          <img src="images/sanpaulo-image-thumb-16.png" />
                        </SwiperSlide>

                        <SwiperSlide>
                          <img src="images/sanpaulo-image-thumb-17.png" />
                        </SwiperSlide>

                        <SwiperSlide>
                          <img src="images/sanpaulo-image-thumb-18.png" />
                        </SwiperSlide>
                      </Swiper>
                    </Box>
                  </Box>

                  <Box marginTop={{ sm: '32px', lg: '0' }} w={{ sm: '100%', lg: '53%', xl: '56%' }}>
                    <Box marginBottom='72px'>
                      <StyledP black='true'>
                        Residencial Jardim San Paulo está sendo construído no charmoso Bairro Borgo.
                        O novo empreendimento conta com uma planta funcional e bem dividida de apartamentos que priorizam o bem estar, buscando valorização das unidades com excelentes orientações solares em perfeito contato com a natureza.
                        A fachada busca conectar as torres entre si por elementos geométricos, dando ao empreendimento um caráter de sofisticação e valorização.
                      </StyledP>
                    </Box>

                    <a href="https://www.google.com/maps/place/R.+Marcelino+Champagnat,+540+-+Borgo,+Bento+Gon%C3%A7alves+-+RS,+95700-000/data=!4m2!3m1!1s0x951c24af2f425d1f:0x1edaf1c897ec0d94?sa=X&ved=2ahUKEwjbnIzr06v6AhVKqpUCHcbyARUQ8gF6BAgUEAE" target='_blank'>
                      <Box display='flex' w='100%'>
                        <Box marginRight='8px'>
                          <MapPin />
                        </Box>
                        <Text as='span' w='60%' color='#252525' fontWeight='400'>
                          Rua Marcelino Champagnat, 540 - Bairro Borgo Bento Gonçalves - RS
                        </Text>
                      </Box>
                    </a>

                    <Box marginTop='72px'>
                      <Text>
                        <StyledStrong display='block' margin='0px 4px 0px 0px'>
                          Data de início:
                        </StyledStrong>
                        2021
                      </Text>
                      <Text marginTop='3px'>
                        <StyledStrong display='block' margin='0px 4px 0px 0px'>
                          Data de entrega:
                        </StyledStrong>
                        2024
                      </Text>
                      <Text marginTop='3px'>
                        <StyledStrong display='block' margin='0px 4px 0px 0px'>
                          Área construída:
                        </StyledStrong>
                        13.409,51m²
                      </Text>
                      <Text marginTop='3px'>
                        <StyledStrong display='block' margin='0px 4px 0px 0px'>
                          Alvará de construção:
                        </StyledStrong>
                        119/2020
                      </Text>
                      <Text marginTop='3px'>
                        <StyledStrong display='block' margin='0px 4px 0px 0px'>
                          Registro de Incorporação:
                        </StyledStrong>
                        R10-44.051
                      </Text>
                    </Box>

                    <Box marginTop='88px'>
                      <a href="http://www.jardimsanpaulo.com.br/" target='_'>
                        <StyledButton>
                          conheça o empreendimento
                        </StyledButton>
                      </a>
                    </Box>

                  </Box>
                </Box>
              </Container>
            </Box>
          </Box>

          <Box paddingBottom={20}>
            <Container maxW={{ sm: '93%', md: '738px', lg: '960px', xl: '1247px', '2xl': '1247px' }}>
              <div className="andamento-das-obras-san-paulo">
                <Box>
                  <Text fontWeight='400' fontSize={{ sm: "2.5rem", md: "2.5rem" }} as="h2" color='#000000'>
                    Andamento das obras
                  </Text>

                  <Box marginTop={16}>
                    <Tabs>
                      <TabList className="tablist-altos">
                        <Tab className="tab-altos">Fotos</Tab>
                        <Tab className="tab-altos">Vídeos</Tab>
                      </TabList>

                      <TabPanels className="tabpanels-altos">
                        <TabPanel className="tab-panel-fotos">
                          <ImageMagnifier smallImageUrl="./images/galeria-fotos/sanpaulo/imagem-1.png" largeImageUrl="./images/galeria-fotos/sanpaulo/imagem-large-1.png" />
                          <ImageMagnifier smallImageUrl="./images/galeria-fotos/sanpaulo/imagem-2.png" largeImageUrl="./images/galeria-fotos/sanpaulo/imagem-large-2.png" />
                          <ImageMagnifier smallImageUrl="./images/galeria-fotos/sanpaulo/imagem-3.png" largeImageUrl="./images/galeria-fotos/sanpaulo/imagem-large-3.png" />
                          <ImageMagnifier smallImageUrl="./images/galeria-fotos/sanpaulo/imagem-4.png" largeImageUrl="./images/galeria-fotos/sanpaulo/imagem-large-4.png" />
                          <ImageMagnifier smallImageUrl="./images/galeria-fotos/sanpaulo/imagem-5.png" largeImageUrl="./images/galeria-fotos/sanpaulo/imagem-large-5.png" />
                          <ImageMagnifier smallImageUrl="./images/galeria-fotos/sanpaulo/imagem-6.png" largeImageUrl="./images/galeria-fotos/sanpaulo/imagem-large-6.png" />
                          <ImageMagnifier smallImageUrl="./images/galeria-fotos/sanpaulo/imagem-7.png" largeImageUrl="./images/galeria-fotos/sanpaulo/imagem-large-7.png" />
                          <ImageMagnifier smallImageUrl="./images/galeria-fotos/sanpaulo/imagem-8.png" largeImageUrl="./images/galeria-fotos/sanpaulo/imagem-large-8.png" />
                          <ImageMagnifier smallImageUrl="./images/galeria-fotos/sanpaulo/imagem-9.png" largeImageUrl="./images/galeria-fotos/sanpaulo/imagem-large-9.png" />
                        </TabPanel>

                        <TabPanel className="tab-panel-videos">
                          <div className="video-1">
                            <iframe src="https://www.youtube.com/embed/GeWWHm28JB4" title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                          </div>
                          <div className="video-2">
                            <iframe src="https://youtube.com/embed/qrZC0V5CMvY" title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                          </div>
                          <div className="video-3">
                            <iframe src="https://youtube.com/embed/WUNEV-89j7o" title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                          </div>
                          <div className="video-4">
                            <iframe src="https://youtube.com/embed/VcGUn_ynCLU" title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                          </div>
                        </TabPanel>
                      </TabPanels>
                    </Tabs>
                  </Box>
                </Box>
              </div>
            </Container>
          </Box>
          <Footer />
        </StyledEmpreendimentosAndamento>



        <Modal size='6xl' isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent w='100%' h={{ sm: '350px', 'md': '500px' }}>
            <ModalCloseButton color='#FFF' bgColor='#000' />
            <ModalBody padding={0} w='100%' h='100%'>
              <Image w='100%' h='100%' src='images/obras-big-image-1.png' />
            </ModalBody>
          </ModalContent>
        </Modal>

        <Modal size='6xl' isOpen={isOpen2} onClose={onClose2}>
          <ModalOverlay />
          <ModalContent w='100%' h={{ sm: '350px', 'md': '500px' }}>
            <ModalCloseButton color='#FFF' bgColor='#000' />
            <ModalBody padding={0} w='100%' h='100%'>
              <Image w='100%' h='100%' src='images/obras-big-image-2.png' />
            </ModalBody>
          </ModalContent>
        </Modal>

        <Modal size='6xl' isOpen={isOpen3} onClose={onClose3}>
          <ModalOverlay />
          <ModalContent w='100%' h={{ sm: '350px', 'md': '500px' }}>
            <ModalCloseButton color='#FFF' bgColor='#000' />
            <ModalBody padding={0} w='100%' h='100%'>
              <Image w='100%' h='100%' src='images/obras-big-image-3.png' />
            </ModalBody>
          </ModalContent>
        </Modal>

        <Modal size='6xl' isOpen={isOpen4} onClose={onClose4}>
          <ModalOverlay />
          <ModalContent w='100%' h={{ sm: '350px', 'md': '500px' }}>
            <ModalCloseButton color='#FFF' bgColor='#000' />
            <ModalBody padding={0} w='100%' h='100%'>
              <Image w='100%' h='100%' src='images/obras-big-image-4.png' />
            </ModalBody>
          </ModalContent>
        </Modal>

        <Modal size='6xl' isOpen={isOpen5} onClose={onClose5}>
          <ModalOverlay />
          <ModalContent w='100%' h={{ sm: '350px', 'md': '500px' }}>
            <ModalCloseButton color='#FFF' bgColor='#000' />
            <ModalBody padding={0} w='100%' h='100%'>
              <Image w='100%' h='100%' src='images/obras-big-image-5.png' />
            </ModalBody>
          </ModalContent>
        </Modal>

        <Modal size='6xl' isOpen={isOpen6} onClose={onClose6}>
          <ModalOverlay />
          <ModalContent w='100%' h={{ sm: '350px', 'md': '500px' }}>
            <ModalCloseButton color='#FFF' bgColor='#000' />
            <ModalBody padding={0} w='100%' h='100%'>
              <Image w='100%' h='100%' src='images/obras-big-image-6.png' />
            </ModalBody>
          </ModalContent>
        </Modal>

        <Modal size='6xl' isOpen={isOpen7} onClose={onClose7}>
          <ModalOverlay />
          <ModalContent w='100%' h={{ sm: '350px', 'md': '500px' }}>
            <ModalCloseButton color='#FFF' bgColor='#000' />
            <ModalBody padding={0} w='100%' h='100%'>
              <Image w='100%' h='100%' src='images/obras-big-image-7.png' />
            </ModalBody>
          </ModalContent>
        </Modal>

        <Modal size='6xl' isOpen={isOpen8} onClose={onClose8}>
          <ModalOverlay />
          <ModalContent w='100%' h={{ sm: '350px', 'md': '500px' }}>
            <ModalCloseButton color='#FFF' bgColor='#000' />
            <ModalBody padding={0} w='100%' h='100%'>
              <Image w='100%' h='100%' src='images/obras-big-image-8.png' />
            </ModalBody>
          </ModalContent>
        </Modal>

        <Modal size='6xl' isOpen={isOpen9} onClose={onClose9}>
          <ModalOverlay />
          <ModalContent w='100%' h={{ sm: '350px', 'md': '500px' }}>
            <ModalCloseButton color='#FFF' bgColor='#000' />
            <ModalBody padding={0} w='100%' h='100%'>
              <Image w='100%' h='100%' src='images/obras-big-image-9.png' />
            </ModalBody>
          </ModalContent>
        </Modal>

        <Modal size='6xl' isOpen={isOpen10} onClose={onClose10}>
          <ModalOverlay />
          <ModalContent w='100%' h={{ sm: '350px', 'md': '500px' }}>
            <ModalCloseButton color='#FFF' bgColor='#000' />
            <ModalBody padding={0} w='100%' h='100%'>
              <Image w='100%' h='100%' src='images/obras-big-image-10.png' />
            </ModalBody>
          </ModalContent>
        </Modal>

        <Modal size='6xl' isOpen={isOpen11} onClose={onClose11}>
          <ModalOverlay />
          <ModalContent w='100%' h={{ sm: '350px', 'md': '500px' }}>
            <ModalCloseButton color='#FFF' bgColor='#000' />
            <ModalBody padding={0} w='100%' h='100%'>
              <Image w='100%' h='100%' src='images/obras-big-image-11.png' />
            </ModalBody>
          </ModalContent>
        </Modal>

        <Modal size='6xl' isOpen={isOpen12} onClose={onClose12}>
          <ModalOverlay />
          <ModalContent w='100%' h={{ sm: '350px', 'md': '500px' }}>
            <ModalCloseButton color='#FFF' bgColor='#000' />
            <ModalBody padding={0} w='100%' h='100%'>
              <Image w='100%' h='100%' src='images/obras-big-image-12.png' />
            </ModalBody>
          </ModalContent>
        </Modal>

        <Modal size='6xl' isOpen={isOpen13} onClose={onClose13}>
          <ModalOverlay />
          <ModalContent w='100%' h={{ sm: '350px', 'md': '500px' }}>
            <ModalCloseButton color='#FFF' bgColor='#000' />
            <ModalBody padding={0} w='100%' h='100%'>
              <Image w='100%' h='100%' src='images/obras-big-image-13.png' />
            </ModalBody>
          </ModalContent>
        </Modal>


      </div>
    </>
  )
}