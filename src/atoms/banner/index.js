import { Image } from "../image"

export const Banner = props => {
    return <div className="col-xlg-8 margin-center">
        <Image src={props.src} />
    </div>
}