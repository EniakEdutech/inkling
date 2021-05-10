import { Link } from 'react-router-dom'
import { Button } from '../../atoms/button'
import {NavMenu} from '../../molecules/navmenu'

export const Home = () => {
    return <div className="flex column" style={{ rowGap: "10px" }}>
        <NavMenu />
        <p>Home page</p>
        <Link to="/aboutus">About Us</Link>
        <Link to="/portfolio/eniak">Eniak</Link>
        <Button className="w-100 w-md-50 w-lg-25" primary>Test button</Button>
        <Button className="w-100 w-md-50 w-lg-25" helper>Test button</Button>
        <Button className="w-100 w-md-50 w-lg-25" info>Test button</Button>
        <Button className="w-100 w-md-50 w-lg-25" error>Test button</Button>
        <Button className="w-100 w-md-50 w-lg-25" disabled>Test button</Button>
        {/* <Footer /> */}
    </div>
}