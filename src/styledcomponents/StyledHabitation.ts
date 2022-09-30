import { Box } from '@chakra-ui/react'
import styled from 'styled-components'

export const StyledHabitation = styled(Box)`
    display: flex;
    align-items: center;
    height: 540px;

    @media screen and (max-width: 960px) {
        height: 880px;
    }
`