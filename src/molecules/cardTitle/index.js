import { Heading2 } from '../../atoms/heading2'
import styled from 'styled-components'

const CardTitleHeading = styled(Heading2)`
white-space: nowrap; 
overflow: hidden;
text-overflow: ellipsis;

@media screen and (hover:hover) {
    text-align: center;
}
`

export const CardTitle = props => {
    return <div className="w-100">
        <CardTitleHeading>{props.children}</CardTitleHeading>
    </div>
}