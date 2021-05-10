import styled from "styled-components"

const StyledListItem = styled.li``

export const ListItem = props => {
    return <StyledListItem {...props}>{props.children}</StyledListItem>
}