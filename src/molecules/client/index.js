import styled, { css } from "styled-components"
import { Image } from "../../atoms/image"

const StyledImage = styled(Image)`
max-width: 25vw;
max-height: 10vh;
object-fit: contain;
${props => props.itk && css`
padding: 20px 0;
`}

@media screen and (min-width: 768px) {
    ${props => props.itk && css`
    padding: 30px 0;
    `}
}

@media screen and (min-width: 992px) {
    max-height: 12vh;
    ${props => props.itk && css`
    padding: 20px 0;
    `}
    ${props => props.snapdeal && css`
    padding: 25px 0;
    `}
}

@media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (orientation: portrait) {
    max-height: 8vh;
    ${props => props.itk && css`
    padding: 30px 0;
    `}
}
@media screen and (min-width: 2560px) {
    ${props => props.itk && css`
    padding: 45px 0;
    `}
}
`

export const Client = props => {
    return <StyledImage className="py-1" src={props.src} {...props} />
}