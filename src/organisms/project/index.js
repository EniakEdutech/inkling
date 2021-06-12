import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
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
    min-height: 30vh;
    ${props => props.cardType === 'tall' && css`
    min-height: 60vh;
    `}
    ${props => props.cardType === 'large' && css`
    min-height: 60vh;
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
&>a>.title {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--primary-dark-variant);
    color: var(--primary-text);
    z-index: 1;
}
` : css`
&>a>.title {
    position: absolute;
    bottom: 1.5em;
    left: 0;
    background-color: var(--primary-dark-variant);
    color: var(--primary-text);
    max-width: 60%;
    min-width: 50%;
    z-index: 1;
}

&>a>.title::before {
    content: '';
    position: absolute;
    left: 100%;
    top: 0;
    bottom: 0;
    border: 25px solid transparent;
}

&>a>.title::before {
    border-left-color: var(--primary-dark-variant);
}
`}


&>a>.title>span {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: block;
}
`

const BackgroundText = styled(Text)`
z-index: -1;
position: absolute;
top: 0;
`

const StyledDiv = styled.div`
position: relative;
background-image: url(${props => props.image});
background-position: center;
background-size: ${props => props.bSize};
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
    <BackgroundText>{props.alt} project image</BackgroundText>
    <Link to={"/portfolio/" + props.link}>
        <div className="title p-1">
            <StyledText>{props.title}</StyledText>
        </div>
        <StyledDiv {...props}>
        </StyledDiv>
    </Link>
</StyledContainer>