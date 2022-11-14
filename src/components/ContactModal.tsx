import { Box, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from "@chakra-ui/react"
import { StyledH2, StyledP, StyledSmall, StyledStrong } from "../styledcomponents/Typograph"

import MailIcon from '../svgs/mailicon'
import PhoneIcon from '../svgs/phoneicon'
import WhatsIcon from '../svgs/whatsicon'
import PinIcon from '../svgs/pinicon'
import ClockIcon from '../svgs/clockicon'
import { FormModal } from "./FormModal"

export function ContactModal({Open, Close, isModalOpen}: any) {
    return (
      <>
        <Modal isOpen={isModalOpen} onClose={Close}>
          <ModalOverlay backdropFilter='blur(5px) hue-rotate(90deg)'/>
          <ModalContent maxW={{sm: '90%', lg: '940px', xl: '1040px', '2xl':'1140px'}} h={{lg: '720px'}} overflow='hidden'>
            <ModalBody padding={0} overflow='hidden'>
            <Box display='flex' flexDirection={{sm: 'column', lg: 'row'}}>
                <Box w={{sm: '100%', lg: '50%'}} h={{sm: '480px', lg: '720px'}} className="bg-modal">
                    <Box h='100%' paddingLeft={{sm: '20px', md: '80px', lg: '80px'}} paddingRight={{sm: '20px',  md: '0px'}}>
                        <Box w='300px' marginTop={{sm: '40px', md: '20px', lg: '120px'}}>
                        <StyledH2 white>
                            Informações de contato
                        </StyledH2>
                        </Box>

                        <Box w={{lg: '320px'}} marginTop='50px'>
                            <Box>
                                <Link display='flex' alignItems='center' href='mailto:imoveis@mariniconstrucoes.com.br' isExternal>
                                <Box marginRight='12px'>
                                <MailIcon />
                                </Box>
                                <StyledSmall marginLeft='12px'>
                                    imoveis@mariniconstrucoes.com.br
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
                                Preencha o <StyledStrong color='#3E5481'>formulário abaixo</StyledStrong> e aguarde o retorno de nossos especialistas.
                            </StyledP>
                        </Box>
                        <FormModal />
                    </Box>
                </Box>
            </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }