import styled from "styled-components"
import { Image } from "../../atoms/image"

const StyledDiv = styled.div`
@media screen and (min-width: 1200px) {
    padding: 1em;
}

@media screen and (min-width: 2560px) {
    padding: 3em;
}
`

const StyledImage = styled(Image)`
filter: grayscale(1);

&:hover {
    filter: grayscale(0.1);
}
`

export const Client = props => {
    return <StyledDiv className="w-25 flex align-center center">
        <StyledImage src={props.src} />
    </StyledDiv>
}