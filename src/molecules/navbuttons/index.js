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


const DesignerDiv = styled.div`
position: sticky;
top: 50%;

&>a {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    padding: 10px;
    background-color: var(--primary-light-variant);
    opacity: 0.3;
}

&>a:hover {
    text-decoration: none;
}

&>a.left {
    left: -30px;
}

&>a.right {
    right: -30px;
}

&>a>span {
    font-size: 50px;
    color: var(--primary-text);
}

@media screen and (min-width: 768px) {
    &>a.left {
        left: 10px;
    }
    
    &>a.right {
        right: 10px;
    }
}
`

export const StickyNavButtons = props => {
    return <DesignerDiv className="d-flex space-between">
        <Link to={props.prev} className="d-flex align-center end md-center absolute left" title="Previous project">
            <Text>&lt;</Text>
        </Link>
        <Link to={props.prev} className="d-flex align-center start md-center absolute right" title="Next project">
            <Text>&gt;</Text>
        </Link>
    </DesignerDiv>
}