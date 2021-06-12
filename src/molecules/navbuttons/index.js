import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Strong } from '../../atoms/strong'

const StyledSpan = styled.span`
line-height: 1px;
`

const StyledLink = styled(Link)`
text-align: right
`

export const NavButtons = props => {
    return <div className="d-flex col-10 col-xlg-6 margin-center my-2 my-xmd-3 my-xlg-5">
        <div className="d-flex col-12 space-between">
            <div className="d-flex align-baseline c-g-xmd-1">
                <StyledSpan>&larr;</StyledSpan>
                <Link to={"/portfolio/" + props.prev}>
                    <Strong>{props.pName}</Strong>
                </Link>
            </div>
            <div className="d-flex align-baseline c-g-xmd-1">
                <StyledLink to={"/portfolio/" + props.next} className="">
                    <Strong>{props.nName}</Strong>
                </StyledLink>
                <StyledSpan>&rarr;</StyledSpan>
            </div>
        </div>
    </div>
}