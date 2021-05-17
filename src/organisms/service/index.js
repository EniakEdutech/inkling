import styled from 'styled-components'
// Components
import { ImportantText } from '../../atoms/importantText'
import { Paragraph } from '../../atoms/paragraph'

const ServicesIcon = styled.picture`
width: 50px;

> * {
    width: 50px;
}

@media screen and (min-width: 992px) {
    width: 80px;

    > * {
        width: 80px;
    }
}
`

const ServicesHeading = styled(ImportantText)`
text-align: center;
text-transform: uppercase;
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