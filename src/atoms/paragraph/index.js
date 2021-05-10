import styled from "styled-components";

const StyledPara = styled.p``

export const Paragraph = props => {
    return <StyledPara {...props}>{props.children}</StyledPara>
}