import { Heading2 } from '../../atoms/heading2'
import styled from 'styled-components'

const CardTitleDiv = styled.div`
white-space: nowrap; 
overflow: hidden;
text-overflow: ellipsis; 
`

export const CardTitle = props => {
    return <CardTitleDiv>
        <Heading2>{props.children}</Heading2>
    </CardTitleDiv>
}