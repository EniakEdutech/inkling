import styled from "styled-components";

const StyledPara = styled.p`
font-family: 'Work Sans', sans-serif;
line-height: 20px;
`

export const Paragraph = props => {
    return <StyledPara {...props}>{props.children}</StyledPara>
}

const ProjectPara = styled(StyledPara)`
font-size: 13px;
`

export const ProjectParagraph = props => {
    return <ProjectPara {...props}>{props.children}</ProjectPara>
}