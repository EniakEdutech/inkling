import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Strong } from '../../atoms/strong'
import { Text } from '../../atoms/text'

const StyledStrong = styled(Strong)`
text-align: right
`

export const NavButtons = props => {
    return <div className="d-flex space-between">
        <Link to={props.prev} className="d-flex align-center">
            <span>&larr;</span>
            <Strong>previous project</Strong>
        </Link>
        <Link to={props.next} className="d-flex align-center">
            <StyledStrong>next project</StyledStrong>
            <span>&rarr;</span>
        </Link>
    </div>
}
