import styled from "styled-components";

const StyledPara = styled.p`
font-family: 'Work Sans', sans-serif;
line-height: 20px;
`

export const Paragraph = props => {
    return <StyledPara {...props}>{props.children}</StyledPara>
}