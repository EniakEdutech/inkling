import styled from "styled-components"

const StyledH5 = styled.h5`
font-size: 16px;

@media (min-width: 768px) {
    font-size: 21px;
}

@media (min-width: 1200px) {
    font-size: 19px;
}
`

export const Heading4 = props => {
    return <StyledH5 {...props}>{props.children}</StyledH5>
}

const ProjectStyledH5 = styled(StyledH5)`
font-weight: 600;
letter-spacing: 1px;
`

export const ProjectHeading4 = props => {
    return <ProjectStyledH5 {...props}>{props.children}</ProjectStyledH5>
}