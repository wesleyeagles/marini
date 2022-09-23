import { Box, Container } from "@chakra-ui/react"
import { StyledBannerResidenciais } from "../styledcomponents/StyledBannerResidenciais"
import { StyledH1 } from "../styledcomponents/Typograph"

export const BannerResidenciais = () => {
    return (
        <StyledBannerResidenciais>
            <Container maxW={{sm: '93%', md: '738px', lg: '960px', xl: '1247px', '2xl' : '1247px'}}>
                <Box>
                    <StyledH1 w={{lg: '50%'}} secondary>
                        Empreendimentos Residenciais
                    </StyledH1>
                </Box>
            </Container>
        </StyledBannerResidenciais>
    )
}