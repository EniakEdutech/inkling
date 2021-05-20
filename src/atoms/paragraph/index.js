import styled from "styled-components";

const StyledPara = styled.p`
font-family: 'Work Sans', sans-serif;
`

export const Paragraph = props => {
    return <StyledPara {...props}>{props.children}</StyledPara>
}