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
text-align: center;
text-transform: uppercase;
font-size: 15px;
letter-spacing: 2px;
font-weight: 500;
`

const ServicesBody = styled(Paragraph)`
text-align: center;
`

export const Service = props => <div className="w-50 w-xmd-33 w-lg-25 px-xlg-2">
    <div class="flex column align-center r-g-1 w-95">
        <ServicesIcon>
            {props.children}
        </ServicesIcon>
        <ServicesHeading>{props.heading}</ServicesHeading>
        <ServicesBody>{props.body}</ServicesBody>
    </div>
</div>