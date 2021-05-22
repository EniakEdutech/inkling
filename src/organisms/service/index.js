import styled from 'styled-components'
// Components
import { ImportantText } from '../../atoms/importantText'
import { Paragraph } from '../../atoms/paragraph'
import { Picture } from '../../atoms/picture'

const ServicesIcon = styled(Picture)`
width: auto;
height: 50px;

> * {
    height: 100%;
}

@media screen and (min-width: 992px) {
    height: 80px;

    > * {
        height: 100%;
    }
}
`

const ServicesHeading = styled(ImportantText)`
font-family: 'Montserrat',sans-serif;
text-align: center;
text-transform: capitalize;
font-size: 25px;
font-weight: 700;
`

const ServicesBody = styled(Paragraph)`
font-size: 14px;
line-height: 22px;
`

export const Service = props => <div className="w-100 w-xmd-33 margin-center px-md-1">
    <div class="flex column align-start r-g-2">
        <ServicesIcon>
            <img src={props.src} alt={props.alt} title={props.title} />
        </ServicesIcon>
        <div className="flex column align-start r-g-1">
            <ServicesHeading>{props.heading}</ServicesHeading>
            <ServicesBody>{props.body}</ServicesBody>
        </div>
        {props.children}
    </div>
</div>