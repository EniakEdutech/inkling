import { Fragment } from 'react'
// components
import { NavMenu } from '../../molecules/navmenu'
import { Project } from '../../organisms/project'

export const Portfolio = () => {
    return <Fragment>
        <NavMenu />
        <div className="flex wrap w-100 w-md-80 w-xlg-50 margin-center">
            <Project />
            <Project />
            <Project />
            <Project />
        </div>
    </Fragment>
}