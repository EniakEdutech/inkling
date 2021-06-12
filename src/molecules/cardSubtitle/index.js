import { Heading4 } from '../../atoms/heading4'
import styled from 'styled-components'

const CardSubtitle = styled(Heading4)`
color: var(--primary-light-variant);
white-space: nowrap; 
overflow: hidden;
text-overflow: ellipsis;
@media screen and (hover:hover) {
    color: var(--primary-dark-variant);
    white-space: unset;
}
`

export const CardSub = props => {
    return <div className="col-12">
        <CardSubtitle {...props}>{props.children}</CardSubtitle>
    </div>
}