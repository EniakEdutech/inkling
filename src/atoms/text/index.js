import styled from "styled-components";

const StyledSpan = styled.span``

export const Text = props => {
    return <StyledSpan {...props}>{props.children}</StyledSpan>
}