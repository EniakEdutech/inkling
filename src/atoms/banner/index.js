import { Image } from "../image"
import styled from "styled-components"

const StyledImage = styled(Image)`
object-fit: cover;
max-width: 100vw;
max-height: ${props => props.contain ? 'unset' : '100vh'};;
`

export const Banner = props => {
    return <div className={`d-flex center col-xlg-8 margin-center ${props.className}`}>
        <StyledImage src={props.src} {...props} />
    </div>
}