import { Fragment } from 'react'
import styled from 'styled-components'
// components
import { NavMenu } from '../../../molecules/navmenu'
import { Title } from '../../../atoms/title'
import { Heading1 } from '../../../atoms/heading1'
import { Heading4 } from '../../../atoms/heading4'
import { ImportantText } from '../../../atoms/importantText'
import { Paragraph } from '../../../atoms/paragraph'
import { Strong } from '../../../atoms/strong'
import { Image } from '../../../atoms/image'

const StyledNavSection = styled.div`
margin: 0 5px;

@media screen and (min-width: 768px) {
    margin: unset;
}
`

export const Eniak = props => {
    return <Fragment>
        <NavMenu />
        <div class="flex column r-g-1 w-xmd-80 w-xlg-50 margin-center my-5">
            <div className="flex column lg-row">
                <Title className="flex-lg-3">Eniak</Title>
                <Heading1 className="flex-lg-7">Making educational and technological reform.</Heading1>
            </div>
            <div className="flex column lg-row r-g-1">
                <div className="flex-lg-3 flex column r-g-1">
                    <Heading4>Services</Heading4>
                    <ImportantText>Branding, E-mail Marketing, Signage, Print, Stationary, Social.
                    </ImportantText>
                </div>
                <div className="flex-lg-7 flex column r-g-1">
                    <Heading4 className="flex-lg-7">Context</Heading4>
                    <Paragraph className="flex-lg-7">
                        Eniak (Educational network of information and knowledge) works in the EduTech sector creating
                        innovative and unique products/services for greater educational and technological reform. Eniak
                        is a parent company to its pilot product ITK that explores education and technology. Not only is
                        Eniak venturing into improving technological literacy for younger children but also for college
                        children and graduates.
                </Paragraph>
                </div>
            </div>
            <StyledNavSection className="flex w-md-100 space-between margin-center">
                <div className="flex align-center c-g-1">
                    <span>&larr;</span>
                    <Strong>previous project</Strong>
                </div>
                <div className="flex align-center c-g-1">
                    <Strong>next project</Strong>
                    <span>&rarr;</span>
                </div>
            </StyledNavSection>
        </div>
        <div className="w-xlg-66 margin-center">
            <Image src="https://ik.imagekit.io/bizwem110d/inkling/Eniak_project_images/tiny2-01_tOFi8YDp3.png" />
        </div>
        <div class="flex column lg-row w-xmd-80 w-xlg-50 margin-center r-g-1 my-4">
            <Heading1 className="flex-lg-3">A revolutionary way to approach education.</Heading1>
            <div className="flex column flex-lg-7 r-g-1">
                <Heading4>Design Brief</Heading4>
                <Paragraph>Eniak as a parent company needs to encompass all its different components (products and
                services) which together forms a revolutionary way to approach education.
                </Paragraph>
                <Heading4>Design Approach</Heading4>
                <Paragraph>
                    The eniak logo is a representation of something  called a fractal which is the smallest unit
                    of a pattern that when repeated in large numbers always remains the same. The fractal is in
                    perspective to represent momentum. A fractal in motion seemed to represent the different
                    components of eniak and the revolutionary aspect.
                </Paragraph>
            </div>
        </div>
        <div className="w-xlg-66 margin-center">
            <Image src="https://ik.imagekit.io/bizwem110d/inkling/Eniak_project_images/small-01_ZFX3FoFYE.png" />
            <Image src="https://ik.imagekit.io/bizwem110d/inkling/Eniak_project_images/ENIAK_ClWusekxn.png" />
        </div>
    </Fragment>
}