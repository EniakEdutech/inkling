import styled from "styled-components";

const StyledUl = styled.ul``

export const UnorderedList = props => {
    return <StyledUl {...props}>{props.children}</StyledUl>
}