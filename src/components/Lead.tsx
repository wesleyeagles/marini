import { Box, Container, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { StyledLead } from "../styledcomponents/StyledLead";
import { StyledSpan } from "../styledcomponents/Typograph";

import { Mail } from 'tabler-icons-react';
import { StyledInput } from "../styledcomponents/Input";
import StyledButton from "../styledcomponents/Button";

export function Lead() {
    return (
        <StyledLead marginBottom='60px'>
            <Container maxW={{sm: '93%', md: '738px', lg: '960px', xl: '1247px', '2xl' : '1247px'}}>
                <Box display='flex' flexDirection={{sm: 'column', md: 'row'}} alignItems='center' justifyContent={{sm: 'center', md: 'space-between'}} boxShadow='0px 5px 15px 0px #60606015' bg='#FFF' h={{sm: '280px', md: '90px'}} paddingInline={{md: 15, lg: 15, xl: 25}}>
                    <Box display='flex' alignItems='center' marginTop={{sm: '0px', md: '0'}}>
                        <Box display={{sm: 'none', xl: 'block'}} marginRight='10px'>
                        <Mail color='#3E5481' size={25}/>
                        </Box>
                        <StyledSpan>
                            <Text w={{sm: '80%', md: 'auto'}} textAlign={{sm: 'center', md: 'start'}} margin={{sm: '20px auto', md: '0'}}>
                            Cadastre-se e receba as novidades por e-mail
                            </Text>
                        </StyledSpan>
                    </Box>

                    <Box>
                        <form action="">
                            <Stack direction={{sm: 'column', md: 'row'}}>
                            <StyledInput
                            type='email'
                            required
                            w={{md: '280px', lg: '310px', xl: '488px'}}
                            placeholder='Cadastre aqui o seu melhor email:'
                            />
                            <StyledButton type='submit'>
                                enviar
                            </StyledButton>
                            </Stack>
                        </form>
                    </Box>
                </Box>
            </Container>
        </StyledLead>
    )
}