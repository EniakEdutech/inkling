import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Strong } from '../../atoms/strong'

const StyledSpan = styled.span`
line-height: 1px;
`

const StyledStrong = styled(Strong)`
text-align: right
`

export const NavButtons = props => {
    return <div className="d-flex col-12 space-between">
        <Link to={props.prev} className="d-flex align-baseline c-g-xmd-1">
            <StyledSpan>&larr;</StyledSpan>
            <Strong>previous project</Strong>
        </Link>
        <Link to={props.next} className="d-flex align-baseline c-g-xmd-1">
            <StyledStrong>next project</StyledStrong>
            <StyledSpan>&rarr;</StyledSpan>
        </Link>
    </div>
}