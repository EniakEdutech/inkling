import styled from 'styled-components'
// Component
import { Heading2 } from '../../atoms/heading2'
import { Heading4 } from '../../atoms/heading4'
import { Paragraph } from '../../atoms/paragraph'

const TeamImage = styled.picture`
width: 100%;
height: auto;
background: ${props => "linear-gradient(" + props.colour1 + "," + props.colour2 + ")"};
position: relative;

> * {
    width: 100%;
    height: auto;
    position: sticky;
    bottom: 0;
    vertical-align: bottom;
}
`

const TeamName = styled(Heading2)`
text-transform: capitalize;
font-weight: 600;
letter-spacing: 0px;
`

const TeamDesignation = styled(Heading4)`
text-transform: capitalize;
font-weight: 300;
`

const TeamInfo = styled(Paragraph)`
font-family: 'Work Sans', sans-serif;
font-size: 14px;
`

export const TeamMember = props => <div className="w-50 w-md-33 w-xlg-25">
    <div className="flex column r-g-1 w-95">
        <TeamImage colour1={props.colour1} colour2={props.colour2}>
            {props.children}
        </TeamImage>
        <div>
            <TeamName>{props.name}</TeamName>
            <TeamDesignation>{props.designation}</TeamDesignation>
        </div>
        <TeamInfo>{props.info}</TeamInfo>
    </div>
</div>