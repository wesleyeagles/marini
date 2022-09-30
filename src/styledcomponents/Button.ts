import styled, { css } from 'styled-components'
import  { Button } from '@chakra-ui/react'

const StyledButton = styled(Button)`
    background: #3C5F89!important;
    height: 52px!important;
    color: #F0F0F0!important;
    font-size: 14px!important;
    font-weight: 600!important;
    padding-inline-start: 0px!important;
    padding-inline-end: 0px!important;
    padding: 15px 39px!important;
    text-transform: uppercase;
    border-radius: 5px!important;
    line-height: 1.6!important;
    flex: none!important;

    margin-top: ${props => props.marginTop? props.marginTop : '0px'};
    margin-bottom: ${props => props.marginBottom? props.marginBottom : '0px'};
    margin-left: ${props => props.marginLeft? props.marginLeft : '0px'};
    margin-right: ${props => props.marginRight? props.marginRight : '0px'};

    &:hover {
        background: #5686BF!important;
    }

    ${props => props.primary && css`
        background: #5686BF!important;
        color: #F0F0F0!important;

        &:hover {
            background: #3C5F89!important;
            color: #F0F0F0!important;
        }
    `}

    ${props => props.terrace && css`
        background: #860A10!important;

        &:hover {
            background: #860A1080!important;
        }
    `}

    ${props => props.outlined && css`
        background: transparent!important;
        border: solid 1px #3C5F89!important;
        color: #3C5F89!important;

        &:hover {
            background: #3C5F89!important;
            color: #F0F0F0!important;
        }
    `}

    ${props => props.white && css`
        background: transparent!important;
        border: solid 1px #F0F0F0!important;
        color: #F0F0F0!important;

        &:hover {
            background: #F0F0F0!important;
            color: #3C5F89!important;
        }
    `}

    ${props => props.transparent && css`
        background: transparent!important;
        width: max-content;
        padding: 0px!important;
        border: none!important;
        color: #F0F0F0!important;
        text-transform: inherit;

        &:hover {
            background: transparent!important;
            color: #3C5F89!important;
        }
    `}

`

export default StyledButton