import styled, { css } from "styled-components"
// statics
import mailIcon from '../../assets/mail.png'
import mailIconx2 from '../../assets/mailx2.png'
import callIcon from '../../assets/call.png'
import callIconx2 from '../../assets/callx2.png'
// Component
import { Heading1 } from "../../atoms/heading1"
import { Anchor } from '../../atoms/anchor'
import { Picture } from "../../atoms/picture"

const StyledContainer = styled.div`
min-height: var(--small-screen-100vh);
background-image: url(${props => props.background});
background-size: cover;
background-attachment: fixed;
background-position: center;
@media screen and (min-width: 768px) {
    min-height: var(--tablet-screen-100vh);
}

@media screen and (min-width: 992px) {
    min-height: var(--small-desktop-screen-100vh);
}

@media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (orientation: portrait) {
    min-height: var(--ipadpro-screen-100vh);
}

@media screen and (min-width: 2560x) {
    min-height: var( --extra-large-screen-100vh);
}
`

const StyledParent = styled.div`
background-color: var(--primary-dark-variant);
color: var(--primary-text);
box-shadow: 5px 5px 10px 0px var(--primary-light-variant);
border-radius: 5px;
`

const StyledDivMobile = styled.div`
@media screen and (min-width: 992px) {
    display: none;
}
`

const StyledDivDesktop = styled.div`
@media screen and (max-width: 991.98px) {
    display: none;
}
`

const StyledHeading1 = styled(Heading1)`
position: relative;

&:before {
    content: "";
    position: absolute;
    left: 15%;
    bottom: -5px;
    height: 1px;
    width: 70%;
    border-bottom: 1px solid var(--primary-lightest-variant);
}

@media screen and (min-width: 992px) {
    &:before {
        left: 10%;
        width: 40%;
    }
}
`

const StyledVertialDiv = styled.div`
border-left: 1px solid var(--primary-lightest-variant);
height: 30px;
${props => props.long && css`
height: 60px;
`}
${props => props.full && css`
height: 150px;
`}
margin-top: 5px;
`

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

const StyledLinkDiv = styled.div`
position: relative;

&:before {
content: "";
position: absolute;
left: -2em;
bottom: 0px;
height: 1px;
width: 40%;
border-bottom: 1px solid var(--primary-lightest-variant);
}
`

const MailIcon = props => <StyledIcon {...props}>
    <source srcSet={mailIcon}></source>
    <source srcSet={mailIconx2} media="(min-width: 992px)"></source>
    <img src={mailIcon} alt="mail" title="email us at" />
</StyledIcon>

const CallIcon = props => <StyledIcon {...props}>
    <source srcSet={callIcon}></source>
    <source srcSet={callIconx2} media="(min-width: 992px)"></source>
    <img src={callIcon} alt="call" title="call us at" />
</StyledIcon>

export const ContactUs = props => {
    return <StyledContainer className="flex center align-center" background="https://ik.imagekit.io/bizwem110d/inkling/home-background_HK4W1i-Jg.png">
        <StyledParent className="flex column center align-center w-75 w-md-50 w-xmd-66 w-lg-50 w-xlg-33 py-2 py-lg-4 py-xlg-5">
            <StyledHeading1 className="w-xmd-80 self-start">Contact Us</StyledHeading1>
            <StyledDivMobile className="flex column center align-center">
                <StyledVertialDiv></StyledVertialDiv>
                <div className="flex center align-center column">
                    <MailIcon />
                    <Anchor href="mailto:inklingbyeniak@gmail.com">inklingbyeniak@gmail.com</Anchor>
                </div>
                <StyledVertialDiv long></StyledVertialDiv>
                <div className="flex center align-center column">
                    <CallIcon />
                    <Anchor href="tel:+917900897894">+91 79008-97894</Anchor>
                    <Anchor href="tel:+917900134918">+91 79001-34918</Anchor>
                </div>
            </StyledDivMobile>
            <StyledDivDesktop className="flex c-g-2 center w-xmd-100">
                <div className="flex column r-g-1 align-end flex-xmd-1 py-xmd-2">
                    <MailIcon />
                    <CallIcon />
                </div>
                <StyledVertialDiv full />
                <StyledLinkDiv className="flex column r-g-1 flex-xmd-1 py-xmd-2">
                    <Anchor href="mailto:inklingbyeniak@gmail.com">inklingbyeniak@gmail.com</Anchor>
                    <div className="flex column">
                        <Anchor href="tel:+917900897894">+91 79008-97894</Anchor>
                        <Anchor href="tel:+917900134918">+91 79001-34918</Anchor>
                    </div>
                </StyledLinkDiv>
            </StyledDivDesktop>
        </StyledParent>
    </StyledContainer>
}