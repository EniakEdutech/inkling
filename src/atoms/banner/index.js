import { Image } from "../image"

export const Banner = props => {
    return <div className="w-xlg-66 margin-center">
        <Image src={props.src} />
    </div>
}