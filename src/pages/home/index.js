import { Button } from '../../atoms/button'
import { Header } from '../../organisms/header'
import { Footer } from '../../organisms/footer'

export const Home = () => {
    return <div className="flex column" style={{ rowGap: "10px" }}>
        <Header />
        <p>Home page</p>
        <Button className="w-100 w-md-50 w-lg-25" primary>Test button</Button>
        <Button className="w-100 w-md-50 w-lg-25" secondary>Test button</Button>
        <Button className="w-100 w-md-50 w-lg-25" helper>Test button</Button>
        <Button className="w-100 w-md-50 w-lg-25" info>Test button</Button>
        <Button className="w-100 w-md-50 w-lg-25" error>Test button</Button>
        <Button className="w-100 w-md-50 w-lg-25" disabled>Test button</Button>
        <Footer />
    </div>
}