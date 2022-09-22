import styled from 'styled-components'
import { Box } from '@chakra-ui/react'

export const StyledBanner = styled(Box)`
    width: 100%;
    display: flex;
    height: 580px;

    .banner__image {

        background-image: url(/images/banner-image.png);
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;

        @media screen and (max-width: 960px) {
            background-position: -230px;
        }

        @media screen and (max-width: 768px) {
            width: 100%;
            background-size: cover!important;
            background-position: -150px;
            height: 545px;
            flex: none;
        }
    }

    .banner_gradient {

        background: linear-gradient(180deg, #252525 0%, #000000 100%);
        padding-left: 150px;
        padding-top: 128px;

        @media screen and (max-width: 1280px) {
            padding-left: 60px;
        }

        @media screen and (max-width: 960px) {
            padding-right: 20px;
        }

        @media screen and (max-width: 768px) {
            padding-left: 20px;
            padding-top: 100px;
            padding-bottom: 40px;
        }

    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`