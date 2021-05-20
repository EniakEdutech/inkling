import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Heading2 } from '../../atoms/heading2'
import { Heading4 } from '../../atoms/heading4'
import { Picture } from '../../atoms/picture'

const StyledDiv = styled.div`
> .title {
    display: none;
}
@media screen and (hover:hover) {
    > .title {
        display: flex;
        position: absolute;
        bottom: 0;
        left: 100%;
        right: 0;
        overflow: hidden;
        width: 0;
        height: 100%;
        transition: .5s ease;
    }

    &:hover > .title {
        backdrop-filter: blur(15px);
        width: 100%;
        left: 0;
    }
    
    > .title > div {
        padding: 5px;
        background-color: var(--primary-text);
        color: var(--primary-dark-variant);
        font-size: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        white-space: nowrap;
    }
}
`

export const HomeProject = props => <Link to={props.to} className={props.className}>
    <StyledDiv className="relative h-100">
        <div className="title column">
            <div className="flex column align-center">
                <Heading2 className="flex" {...props}>{props.title}</Heading2>
                {props.description && <Heading4 className="flex" {...props}>{props.description}</Heading4>}
            </div>
        </div>
        <Picture className="w-100" {...props}>
            {props.children}
        </Picture>
    </StyledDiv>
</Link>