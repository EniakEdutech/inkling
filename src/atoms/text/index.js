import styled from "styled-components";

const StyledSpan = styled.span`
font-family: 'Work Sans', sans-serif;
`

export const Text = props => {
    return <StyledSpan {...props}>{props.children}</StyledSpan>
}

const StyledProjectSpan = styled(StyledSpan)`
font-size: 16px;
line-height: 22px;
`

export const ProjectText = props => {
    return <StyledProjectSpan {...props}>{props.children}</StyledProjectSpan>
}