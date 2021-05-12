import styled from "styled-components"
// import { Heading2 } from "../../atoms/heading2"
// import { Heading4 } from "../../atoms/heading4"
import { CardTitle } from "../../molecules/cardTitle"
import { CardSub } from "../../molecules/cardSubtitle"
import { Image } from "../../atoms/image"

const StyledDiv = styled.div`
padding: 10px;
>.image {
    width: 100%;
}

@media screen and (hover:hover) {
    >.title {
        display: none;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
    }
    :hover > .title {
        display: flex;
        background-color: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(5px);
    }
}

@media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (orientation: portrait) {
    >.image {
    }
}
`

const ProjectImage = styled(Image)`
height: 25vh;
@media screen and (min-width: 992px) {
    height: 40vh;
}

`

// const styledMobileDiv

export const Project = props => {
    return <StyledDiv {...props} className="relative w-100 w-xmd-50 w-xlg-33">
        <div className="title">
            <CardTitle>{props.title}</CardTitle>
            <CardSub>{props.description}</CardSub>
        </div>
        <ProjectImage src={props.image} className="image" alt={props.alt} />
    </StyledDiv>
}