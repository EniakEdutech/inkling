import styled, { css } from 'styled-components'

const StyledDiv = styled.div`
min-height: 25vh;
border: 1px solid black;
${props => props.cardType === 'tall' && css`
grid-row: span 2;
`}
${props => props.cardType === 'wide' && css`
grid-column: span 2;
`}
${props => props.cardType === 'large' && css`
grid-column: span 2;
grid-row: span 2;
`}

@media screen and (min-width: 992px) {
    min-height: 40vh;
}

@media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (orientation: portrait) {
    min-height: 25vh;
}
`

export const Project = props => <StyledDiv {...props}>Project</StyledDiv>