import { Image } from "../image"
import styled, { css } from "styled-components"

const StyledImage = styled(Image)`
object-fit: ${props => props.contain ? 'contain' : 'cover'};
max-width: 100vw;
max-height: 100vh;
`

export const Banner = props => {
    return <div className={`d-flex center col-xlg-8 margin-center ${props.className}`}>
        <StyledImage src={props.src} {...props} />
    </div>
}