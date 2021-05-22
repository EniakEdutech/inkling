import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Picture } from '../../atoms/picture'

const StyledDiv = styled.div`
> .title {
    display: flex;
    position: absolute;
    left: 0;
    top: 70%;
}

> .title > h4 {
    background-color: var(--primary-dark-variant);
    color: var(--primary-text);
}
`

export const HomeProject = props => <Link to={props.to} className={props.className}>
    <StyledDiv className="relative h-100">
        {/* <div className="title column">
            <Heading3 className="p-1 p-xmd-half p-ipp-1 p-lg-1">{props.title}</Heading3>
        </div> */}
        <Picture className="w-100" {...props}>
            {props.children}
        </Picture>
    </StyledDiv>
</Link>