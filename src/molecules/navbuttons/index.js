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
    return <div className="d-flex col-10 col-xlg-6 margin-center my-2 my-xmd-4 my-lg-5">
        <div className="d-flex col-12 space-between">
            <Link to={"/portfolio/" + props.prev} className="d-flex align-baseline c-g-xmd-1">
                <StyledSpan>&larr;</StyledSpan>
                <Strong>{props.pName}</Strong>
            </Link>
            <Link to={"/portfolio/" + props.next} className="d-flex align-baseline c-g-xmd-1">
                <StyledStrong>{props.nName}</StyledStrong>
                <StyledSpan>&rarr;</StyledSpan>
            </Link>
        </div>
    </div>
}