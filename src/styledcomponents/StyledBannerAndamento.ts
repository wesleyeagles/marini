import { Box } from '@chakra-ui/react'
import styled from 'styled-components'

export const StyledBannerAndamento = styled(Box)`
    width: 100%;
    height: 633px;
    display: flex;
    align-items: center;
    background-position: center;
    background-size: cover;
    background-image: url(images/banner-andamento.png);

    @media screen and (max-width: 1556px) {
        height: 577px;
    }
`