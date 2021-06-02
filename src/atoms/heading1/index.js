import styled from "styled-components"

const StyledH2 = styled.h2`
font-size: 20px;
font-family: 'Montserrat', sans-serif;
font-weight: 400;

@media (min-width: 768px) {
    font-size: 35px;
}

@media (min-width: 1200px) {
    font-size: 32px;
}
`

export const Heading1 = props => {
    return <StyledH2 {...props}>{props.children}</StyledH2>
}

const ProjectStyledH2 = styled(StyledH2)`
@media (min-width: 768px) {
    font-size: 30px;
}
`

export const ProjectHeading1 = props => {
    return <ProjectStyledH2 {...props}>{props.children}</ProjectStyledH2>
}