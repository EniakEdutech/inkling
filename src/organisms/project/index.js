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
    &:hover > .title {
        display: flex;
        background-color: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(50px);
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
    return <Link to={props.link} className="relative w-100 w-xmd-50 w-xlg-33">
        <StyledDiv {...props}>
            <div className="title">
                <CardTitle>{props.title}</CardTitle>
                <CardSub>{props.description}</CardSub>
            </div>
            <ProjectImage src={props.image} alt={props.alt} />
        </StyledDiv>
    </Link>
}