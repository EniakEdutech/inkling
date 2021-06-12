import { Heading2 } from '../../atoms/heading2'
import styled from 'styled-components'

const CardTitleHeading = styled(Heading2)`
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;

@media screen and (hover:hover) {
    white-space: unset;
}
`

export const CardTitle = props => {
    return <div className="col-12">
        <CardTitleHeading {...props}>{props.children}</CardTitleHeading>
    </div>
}