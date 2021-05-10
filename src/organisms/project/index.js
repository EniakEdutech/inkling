import styled from "styled-components"
// import { Heading2 } from "../../atoms/heading2"
// import { Heading4 } from "../../atoms/heading4"
import { CardTitle } from "../../molecules/cardTitle"
import { CardSub } from "../../molecules/cardSubtitle"
import { Image } from "../../atoms/image"

const StyledDiv = styled.div`
padding: 10px;

>.image {
    display: none;
}

@media screen and (min-width: 992px) {}

@media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (orientation: portrait) {
    >.image {
        display: none;
    }
}
`

const ProjectImage = styled(Image)`
height: 25vh;

`

// const styledMobileDiv

export const Project = props => {
    return <StyledDiv {...props} className="relative w-100 w-xmd-50 w-xlg-33">
        {/* <Heading2>Eniak</Heading2>
        <Heading4>Description</Heading4> */}
        <div>
            <CardTitle>Enaik</CardTitle>
            <CardSub>Description</CardSub>
        </div>
        <ProjectImage />
    </StyledDiv>
}