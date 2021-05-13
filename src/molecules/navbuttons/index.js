import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Strong } from '../../atoms/strong'

const StyledStrong = styled(Strong)`
text-align: right
`

export const NavButtons = props => {
    return <div className="flex space-between">
        <Link to={props.prev} className="flex align-center pointer">
            <span>&larr;</span>
            <Strong>previous project</Strong>
        </Link>
        <Link to={props.next} className="flex align-center pointer">
            <StyledStrong>next project</StyledStrong>
            <span>&rarr;</span>
        </Link>
    </div>
}