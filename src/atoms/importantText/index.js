import styled from "styled-components"

const StyledBold = styled.b``

export const ImportantText = props => {
    return <StyledBold {...props}>{props.children}</StyledBold>
}