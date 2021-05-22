import styled from "styled-components"
import { Image } from "../../atoms/image"

const StyledImage = styled(Image)`
height: 100px;
width: 22vw;
object-fit: contain;
`

export const Client = props => {
    return <StyledImage className="py-1" src={props.src} />
}