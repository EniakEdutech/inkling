import styled, { css } from "styled-components"
import { Image } from "../../atoms/image"

const StyledImage = styled(Image)`
max-width: 25vw;
max-height: 5vh;
object-fit: contain;
${props => props.small && css`
max-height: 3vh;
`}

@media screen and (min-width: 992px) {
    max-height: 10vh;
    ${props => props.small && css`
    max-height: 5vh;
    `}
}

@media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (orientation: portrait) {
    max-height: 5vh;
    ${props => props.small && css`
    max-height: 3vh;
    `}
}
@media screen and (min-width: 2560px) {
    max-height: 5vh;
    ${props => props.small && css`
    max-height: 3vh;
    `}
}
`

export const Client = props => {
    return <StyledImage src={props.src} {...props} />
}