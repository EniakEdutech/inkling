import { Link } from 'react-router-dom'

import { Heading2 } from '../../atoms/heading2'
import { Heading4 } from '../../atoms/heading4'
import { Picture } from '../../atoms/picture'

export const HomeProject = props => <Link to={props.to} className={props.className}>
    <div className="relative h-100">
        <div className="title flex column">
            <Heading2 className="flex">{props.title}</Heading2>
            <Heading4 className="flex">{props.description}</Heading4>
        </div>
        <Picture className="w-100" {...props}>
            {props.children}
        </Picture>
    </div>
</Link>