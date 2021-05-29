import { Fragment } from 'react'
// special component
import ScrollToTopOnMount from '../../../atoms/scrollToTop'
// components
import { NavButtons } from '../../../molecules/navbuttons'
import { Title } from '../../../atoms/title'
import { Heading1 } from '../../../atoms/heading1'
import { ProjectHeading4 } from '../../../atoms/heading4'
import { ImportantText } from '../../../atoms/importantText'
import { ProjectParagraph } from '../../../atoms/paragraph'
import { Banner } from '../../../atoms/banner'
import { UnorderedList } from '../../../atoms/unorderedList'
import { ListItem } from '../../../atoms/listItem'

export const Klm = props => {
    return <Fragment>
        <ScrollToTopOnMount />
        <div className="d-flex column g-1 col-10 col-xmd-8 col-ipp-10 col-xlg-6 margin-center py-2 py-md-3 py-xmd-4 py-ipp-3 py-lg-5">
            <Title>KLM ROYAL DUTCH AIRLINES </Title>
            <Heading1>User Interface design and development of the management software.</Heading1>
            <div className="d-flex column xmd-row ipp-column col-12 g-1">
                <div className="d-flex column col-xmd-3 col-ipp-12">
                    <ProjectHeading4>Services</ProjectHeading4>
                    <ImportantText>
                        Creating a management system.
                    </ImportantText>
                </div>
                <div className="d-flex column col-xmd-9 col-ipp-12">
                    <ProjectHeading4>Context</ProjectHeading4>
                    <ProjectParagraph>
                        KLM Royal Dutch Airlines has an airliner service and provides major multi-product MRO (Maintenance,
                        Repair, Overhaul) service. The Company supports over 3000 Aircrafts operated by 200 major airlines
                        worldwide with a workforce of over 14,000 people. KLM provides these services for Indian states too -
                        in Bombay, Delhi, Bangalore, Hyderabad, and Chennai.
                    </ProjectParagraph>
                </div>
            </div>
        </div>
        <Banner className="" src="https://ik.imagekit.io/bizwem110d/inkling/KLM/KLM_signin_nWmnvkWOg.png?tr=w-1000" />
        <div className="d-flex column xmd-row g-2 col-10 col-xlg-6 margin-center py-2 py-xmd-5">
            <div className="d-flex column r-g-1 flex-xmd-1">
                <ProjectHeading4>THE BRIEF</ProjectHeading4>
                <ProjectParagraph>
                    The Maintenance and Management team(s) at KLM India had to physically document the status of all the aircrafts across multiple
                    airlines that arrived at their respective ports. This process was timeconsuming. It was difficult to search, update, delete records easily
                    and instantly. These documents were required to be split across centres, and this made it very difficult for stakeholders to access.
                    The staff information, general documents and documents that were audited related contained sensitive information – the old system didn’t
                    have a fool proof, secure way of handling this information.
                </ProjectParagraph>
                <ProjectHeading4>RESEARCH</ProjectHeading4>
                <ProjectParagraph>
                    We had to study their current processes and structure of reports to better understand their needs and the scope of the system. We
                    scrutinized the structure of the different reports that were stored across different airlines to understand the data architecture required
                    to solve this problem. The goal was to understand the current report structure, limitations of the current system and requirements for the
                    web app without interrupting the current functioning.
                </ProjectParagraph>
            </div>
            <div className="d-flex column r-g-1 flex-xmd-1">
                <div className="">
                    <ProjectHeading4>THE SOLUTION</ProjectHeading4>
                    <ProjectParagraph>
                        A complete centralized end-to-end web app that enabled the maintenance team to store, handle, update and maintain their monthly
                        reports, generate automated reports and secure store staff information, general documents and audits.
                    </ProjectParagraph>
                    <ProjectParagraph>
                        The first version of the web app included the following features:
                        <UnorderedList>
                            <ListItem>Validated the User Management to add, edit, delete new centres.</ListItem>
                            <ListItem>Entitled the Engineers to fill in monthly reports in an excel-like interface</ListItem>
                            <ListItem>Allowed the Managers to securely add staff information, upload general and audit related documents based on a folder-like structure</ListItem>
                            <ListItem>Enabled various stakeholders to search information and download reports instantly.</ListItem>
                        </UnorderedList>
                    </ProjectParagraph>
                </div>
                <ProjectHeading4>IMPACT</ProjectHeading4>
                <ProjectParagraph>
                    The system not only saved time, but also brought a halt to the possible human errors, the tedious and redundant physical storage, maintenance,
                    updation and deletion the staff had to manually handle.
                </ProjectParagraph>
            </div>
        </div>
        <Banner className="" src="https://ik.imagekit.io/bizwem110d/inkling/KLM/KLM_system_MAggtzbLs.png?tr=w-1000" />
        <NavButtons prev="pathways" pName="Pathways" next="mainbhiambani" nName="Main Bhi Ambani" />
    </Fragment>
}