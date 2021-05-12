import { Heading4 } from '../../atoms/heading4'
import styled from 'styled-components'

const CardSubtitle = styled(Heading4)`
color: var(--primary-light-variant);
white-space: nowrap; 
overflow: hidden;
text-overflow: ellipsis;
@media screen and (hover:hover) {
    text-align: center;
}
`

export const CardSub = props => {
    return <div className="w-100">
        <CardSubtitle>{props.children}</CardSubtitle>
    </div>
}