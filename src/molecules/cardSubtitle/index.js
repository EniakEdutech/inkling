import { Heading4 } from '../../atoms/heading4'
import styled from 'styled-components'

const CardSubTitleDiv = styled.div`
white-space: nowrap; 
overflow: hidden;
text-overflow: ellipsis; 
`

const CardSubtitle = styled(Heading4)`
color: var(--primary-light-variant);
`

export const CardSub = props => {
    return <CardSubTitleDiv>
        <CardSubtitle>{props.children}</CardSubtitle>
    </CardSubTitleDiv>
}