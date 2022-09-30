import { HashLink } from 'react-router-hash-link';
import { Box, Container, Heading } from "@chakra-ui/react";
import StyledButton from "../styledcomponents/Button";
import { StyledH1, StyledP, StyledStrong } from "../styledcomponents/Typograph";

import { HiOutlineArrowRight } from 'react-icons/hi'

export function Header() {

    function removeHash () { 
        setTimeout(() => {
            history.pushState("", document.title, window.location.pathname + window.location.search)
        }, 100)  
    }

    return (
        <Box display='flex' alignItems='center' className="bg-header" h={{sm: '420px', md: '577px', lg: '577px', '2xl': '800px'}}>
            <Container maxW={{sm: '93%', md: '738px', lg: '960px', xl: '1247px', '2xl' : '1247px'}}>
                <Box>
                    <Box w={{lg: '570px', '2xl': '590px'}}>
                    <StyledH1>
                        Especialistas em construções de alta qualidade
                    </StyledH1>
                    </Box>
                    <Box marginTop={{sm: '15px', md:'30px'}} w={{md: '410px', lg: '410px', '2xl': '447px'}}>
                        <StyledP>
                            O que construímos vai muito além de concreto, <StyledStrong color='#FFF'>construímos confiança</StyledStrong> com nossos clientes.
                        </StyledP>
                    </Box>

                    <Box marginTop={{sm: '30px', '2xl': '55px'}}>
                        <HashLink onClick={removeHash} smooth to='#empreendimentos'>
                        <StyledButton outlined='true' white='true' rightIcon={<HiOutlineArrowRight size={19}/>}>  
                            VER EMPREENDIMENTOS
                        </StyledButton>
                        </HashLink>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}