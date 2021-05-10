// basically used for important text
// for e.g. previous and next project

import styled from "styled-components";

const StyledStrong = styled.strong``

export const Strong = props => {
    return <StyledStrong {...props}>{props.children}</StyledStrong>
}