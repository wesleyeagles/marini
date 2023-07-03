import { Box, Container } from "@chakra-ui/react"
import { StyledBannerAndamento } from "../styledcomponents/StyledBannerAndamento"
import { StyledH1 } from "../styledcomponents/Typograph"

export const BannerAndamento = () => {
    return (
        <StyledBannerAndamento>
            <Container maxW={{sm: '93%', md: '738px', lg: '960px', xl: '1247px', '2xl' : '1247px'}}>
                <Box>
                    <StyledH1 w={{lg: '50%'}} secondary>
                        Jardim San Paulo
                    </StyledH1>
                </Box>
            </Container>
        </StyledBannerAndamento>
    )
}