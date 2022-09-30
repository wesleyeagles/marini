import { Box } from '@chakra-ui/react'
import styled from 'styled-components'

export const StyledEmpreendimentos = styled(Box)`
    height: 950px;
    display: flex;
    align-items: center;

    .swiper-button-next {
        background-image: url(images/arrow-right.svg)!important;
        background-repeat: no-repeat;
        background-position: center;
        right: 0;
    }

    .swiper-button-prev {
        background-image: url(images/arrow-right.svg)!important;
        transform: rotate(180deg);
        background-repeat: no-repeat;
        background-position: center;
        left: 0;
    }

    .swiper-button-next::after,
    .swiper-button-prev::after {
        content: '';
    }

    .empreendimentos__slide {

        padding-inline: 10%;
    }

    .empreendimentos__single {
        position: relative;
        

        img {
            transition: 1s;
        }

        &:hover {
            img {
                transform: scale(1.1);
                z-index: 9999;
                position: relative;
            }

            .empreendimentos__title_box {
                opacity: 0;
            }
        }
        
        .empreendimentos__title_box {
            position: absolute;
            z-index: 999;
            left: 50%;
            transform: translateX(-50%);
            width: 250px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #252525;
            transition: 1s;

            .empreendimentos__title {
                color: #F0F0F0;
                font-size: 14px;
                font-weight: 500;
            }

        }

        @media screen and (max-width: 960px) {
            position: relative;
            display: flex;
            justify-content: center;

            &:hover {
            img {
                transform: scale(1);
                z-index: auto;
                position: static;
            }

            .empreendimentos__title_box {
                opacity: 1;
            }
        }
        }

    }

    @media screen and (max-width: 768px) {
        height: 1250px;

        .empreendimentos__single {

            .empreendimentos__title_box {

                width: 180px;

            .empreendimentos__title {
                color: #F0F0F0;
                font-size: 12px;
                font-weight: 500;
            }
        }
        }

        
    }

`