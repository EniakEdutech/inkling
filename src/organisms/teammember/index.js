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
font-family: 'Montserrat', sans-serif;
text-transform: capitalize;
font-weight: 600;
letter-spacing: 0px;
`

const TeamDesignation = styled(Heading4)`
font-family: 'Montserrat', sans-serif;
text-transform: capitalize;
font-weight: 300;
font-size: 16px;
`

export const TeamMember = props => <div className="col-12 col-md-6 col-xmd-4 col-ipp-6 col-xlg-3">
    <div className="d-flex column r-g-2 col-11 margin-center">
        <TeamImage colour1={props.colour1} colour2={props.colour2}>
            {props.children}
        </TeamImage>
        <div>
            <TeamName>{props.name}</TeamName>
            <TeamDesignation>{props.designation}</TeamDesignation>
        </div>
        <Paragraph>{props.info}</Paragraph>
    </div>
</div>