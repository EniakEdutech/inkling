import styled, { css } from 'styled-components'
// components
import { Text } from '../../atoms/text'

const StyledContainer = styled.div`
overflow: hidden;
position: relative;
min-height: 25vh;
${props => props.cardType === 'tall' && css`
grid-row: span 2;
min-height: 50vh;
`}
${props => props.cardType === 'large' && css`
min-height: 50vh;
grid-row: span 2;
`}

@media screen and (min-width: 768px) {
    ${props => props.cardType === 'wide' && css`
    grid-column: span 2;
    `}
    ${props => props.cardType === 'large' && css`
    grid-column: span 2;
    `}
}

@media screen and (min-width: 992px) {
    min-height: 40vh;
    ${props => props.cardType === 'tall' && css`
    min-height: 80vh;
    `}
    ${props => props.cardType === 'large' && css`
    min-height: 80vh;
    `}
}

@media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (orientation: portrait) {
    min-height: 25vh;
    ${props => props.cardType === 'tall' && css`
    min-height: 50vh;
    `}
    ${props => props.cardType === 'large' && css`
    min-height: 50vh;
    `}
}

@media screen and (min-width: 2560px) {
    min-height: 20vh;
    ${props => props.cardType === 'tall' && css`
    min-height: 40vh;
    `}
    ${props => props.cardType === 'large' && css`
    min-height: 40vh;
    `}
}

${props => props.nameShow ? css`
&>.title {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--primary-dark-variant);
    color: var(--primary-text);
    z-index: 1;
}
` : css`
&>.title {
    position: absolute;
    bottom: 1.5em;
    left: 0;
    background-color: var(--primary-dark-variant);
    color: var(--primary-text);
    max-width: 60%;
    min-width: 50%;
    z-index: 1;
}

&>.title::before {
    content: '';
    position: absolute;
    left: 100%;
    top: 0;
    bottom: 0;
    border: 25px solid transparent;
}

&>.title::before {
    border-left-color: var(--primary-dark-variant);
}
`}


&>.title>span {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
`

const StyledDiv = styled.div`
position: relative;
background-image: url(${props => props.image});
background-position: center;
background-size: cover;
${props => props.link === '/portfolio/90minapp' && css`background-size: contain`};
width: 100%;
height: 100%;
transition: .5s ease;

&:hover {
    transform: scale(1.2);
}
`

const StyledText = styled(Text)`
font-family: 'Montserrat', sans-serif;
font-size: 15px;
text-transform: capitalize;
`

export const Project = props => <StyledContainer {...props}>
    <div className="title p-1">
        <StyledText>{props.title}</StyledText>
    </div>
    <StyledDiv {...props}>
    </StyledDiv>
</StyledContainer>