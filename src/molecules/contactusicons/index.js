import styled from "styled-components"
// statics
import mailIcon from '../../assets/mail.png'
import mailIconx2 from '../../assets/mailx2.png'
import callIcon from '../../assets/call.png'
import callIconx2 from '../../assets/callx2.png'
// components
import { Picture } from "../../atoms/picture"

const StyledIcon = styled(Picture)`
width: 20px;
margin-top: 10px;

> * {
    width: 20px;
}

@media screen and (min-width: 992px) {
    margin-top: 0px;
    position: sticky;
    right: 0;
}
`

export const MailIcon = props => <StyledIcon {...props}>
<source srcSet={mailIcon}></source>
<source srcSet={mailIconx2} media="(min-width: 992px)"></source>
<img src={mailIcon} alt="mail" title="email us at" />
</StyledIcon>

export const CallIcon = props => <StyledIcon {...props}>
<source srcSet={callIcon}></source>
<source srcSet={callIconx2} media="(min-width: 992px)"></source>
<img src={callIcon} alt="call" title="call us at" />
</StyledIcon>