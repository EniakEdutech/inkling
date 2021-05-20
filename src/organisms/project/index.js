import styled from "styled-components"
import { Link } from 'react-router-dom'
// components
import { CardTitle } from "../../molecules/cardTitle"
import { CardSub } from "../../molecules/cardSubtitle"
import { Image } from "../../atoms/image"

const StyledDiv = styled.div`
padding: 2px;
@media screen and (hover:hover) {
    >.title {
        row-gap: 1em;
        width: 0;
        top: 0;
        right: 0;
        left: 100%;
        bottom: 0;
        background-color: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(15px);
        transition: .5s ease;
        overflow: hidden;
        position: absolute;
    }
    &:hover > .title {
        width: 100%;
        left: 0;
        padding-left: 5em;
        padding-top: 5em;
    }
}
`

const StyledCardTitle = styled(CardTitle)`
font-weight: 700;
letter-spacing: 1px;
`

const ProjectImage = styled(Image)`
height: 25vh;
@media screen and (min-width: 992px) {
    height: 40vh;
}
@media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (orientation: portrait) {
    height: 25vh;
}
@media only screen and (min-width: 2560px) {
    height: 20vh;
}
`

export const Project = props => {
    return <Link to={props.link} className="relative w-100 w-xmd-50 w-xlg-33">
        <StyledDiv {...props} className="relative">
            <div className="title flex column">
                <StyledCardTitle className="flex">{props.title}</StyledCardTitle>
                <CardSub className="flex">{props.description}</CardSub>
            </div>
            <ProjectImage src={props.image} alt={props.alt} />
        </StyledDiv>
    </Link>
}