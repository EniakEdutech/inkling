import styled from "styled-components"
import { Image } from "../../atoms/image"

const StyledImage = styled(Image)`
@media screen and (hover:hover) {
    filter: grayscale(1);
    &:hover {
        filter: grayscale(0);
    }
}
`

export const Client = props => {
    return <div className="w-50 w-md-33 w-lg-25 py-1 px-1 flex align-center center">
        <StyledImage src={props.src} />
    </div>
}