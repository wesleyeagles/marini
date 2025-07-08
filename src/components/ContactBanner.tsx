import { Box, Container, useDisclosure } from "@chakra-ui/react";
import StyledButton from "../styledcomponents/Button";
import { StyledContactBanner } from "../styledcomponents/StyledContactBanner";
import { StyledH2, StyledP } from "../styledcomponents/Typograph";
import { ContactModal } from "./ContactModal";

export function ContactBanner() {

    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <StyledContactBanner>
            <Container>
                <Box>
                    <StyledH2 white='true' textAlign='center'>
                        Viva o sonho que você sempre sonhou
                    </StyledH2>
                    <StyledP margin='0 auto' w={{xl: '85%'}} textAlign='center' marginTop='32px' marginBottom='56px'>
                        Nós temos empreendimentos capazes de proporcionar tudo aquilo que você sempre quis.
                    </StyledP>
                    <Box display='flex' flexDirection={{sm: 'column', md: 'row'}} alignItems={{sm: 'center', md: 'start'}} justifyContent={{md: 'center'}}>
                        <StyledButton onClick={onOpen} marginRight={{md: '8px'}} type='button'>
                            entrar em contato
                        </StyledButton>


                        <a href="http://wa.me/5554996257331" target='_blank'>
                        <StyledButton marginLeft={{md: '8px'}} marginTop={{sm: '16px', md: '0'}} white='true' outlined='true'>
                            chame no whatsapp
                        </StyledButton>
                        </a>
                    </Box>
                </Box>
            </Container>

            <ContactModal Open={onOpen} Close={onClose} isModalOpen={isOpen}/>
        </StyledContactBanner>
    )
}