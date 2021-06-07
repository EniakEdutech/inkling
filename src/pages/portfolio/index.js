import { Component, Fragment } from 'react'
import styled, { css } from 'styled-components'
// statics
import dropdown from '../../assets/dropdown.svg'
import allProjects from '../../assets/allProjects.svg'
import design from '../../assets/design.svg'
import development from '../../assets/development.svg'
import cDesign from '../../assets/curriculumDesign.svg'
// components
import ScrollToTopOnMount from '../../atoms/scrollToTop'
import { Button } from '../../atoms/button'
import { Project } from '../../organisms/project'
import { ImportantText } from '../../atoms/importantText'

import { Image } from '../../atoms/image'

const ParentContainer = styled.div`
background-image: url('https://ik.imagekit.io/bizwem110d/inkling/Projects_web_FvBoVS1BU.png?tr=w-400');
background-size: cover;

min-height: var(--small-screen-100vh);
@media screen and (min-width: 768px) {
    min-height: var(--tablet-screen-100vh);
    background-image: url('https://ik.imagekit.io/bizwem110d/inkling/Projects_web_FvBoVS1BU.png?tr=w-768');
}

@media screen and (min-width: 992px) {
    min-height: var(--small-desktop-screen-100vh);
    background-image: url('https://ik.imagekit.io/bizwem110d/inkling/Projects_web_FvBoVS1BU.png?tr=w-992');
}

@media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (orientation: portrait) {
    min-height: var(--ipadpro-screen-100vh);
    background-image: url('https://ik.imagekit.io/bizwem110d/inkling/Projects_web_FvBoVS1BU.png?tr=w-1024');
}

@media screen and (min-width: 2560x) {
    min-height: var( --extra-large-screen-100vh);
    background-image: url('https://ik.imagekit.io/bizwem110d/inkling/Projects_web_FvBoVS1BU.png');
}
`

const CategoryDiv = styled.div`
box-shadow: 0px 0px 10px 0px var(--primary-lighter-variant);
border-radius: 5px;
top: 5em;
position: absolute;
z-index: 2;
background-color: white;
${props => props.toggleShow ? css`
display: flex;
` : css`
display: none;
`}

@media screen and (min-width: 992px) {
    display: flex;
    position: unset;
    box-shadow: none;
    border-radius: 0px;
    overflow-x: auto;
    white-space: nowrap;
}
`

const Category = styled.div`
cursor: pointer;
padding: 10px 0;
&>img {
    width: 15px;
}

@media screen and (min-width: 992px) {
    &>img {
        width: 20px;
    }
}

@media screen and (min-width: 1200px) {
    &>img {
        width: 30px;
    }
}
`

const CategoryImpText = styled(ImportantText)`
font-family: 'Montserrat', sans-serif;
color: var(--primary-light-variant);
text-transform: capitalize;
font-size: 13px;
letter-spacing: 1px;

&.selected {
    position: relative;
    padding-bottom: 5px;
}

&.selected::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 40%;
    height: 1px;
    border-bottom: 1px solid black;
}

@media screen and (min-width: 992px) {
    &.selected::before {
        left: 20%;
        bottom: -10px;
    }
}
`

const CategoryMenuDiv = styled.div`
@media screen and (min-width: 992px) {
    display: none;
}
`

const CategoryMenu = styled(CategoryImpText)`
font-size: 16px;
text-transform: uppercase;
font-weight: 400;
letter-spacing: 0px;

&.screen {
    display: none;
}

@media screen and (min-width: 992px) {
    position: relative;
    padding: 1em 0;

    &.screen {
        display: flex;
    }

    &::before {
        content: '';
        position: absolute;
        left: 20%;
        width: 60%;
        bottom: 10px;
        height: 1px;
        border-bottom: 1px solid black;
    }
}
`

const CategoryDropdown = styled(Image)`
width: 15px;
transition: .5s ease;

${props => props.show && css`
transform: rotateZ(180deg);
`}
`

const ProjectDiv = styled.div`
z-index: 1;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
grid-gap: 3em;

@media screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
}
`

const StyledPortfolioLink = styled(Button)`
box-shadow: none;
border-radius: 0px;
color: var(--primary-light-variant);
padding: 15px 30px;
border: transparent;
font-size: 17px;
font-family: 'Montserrat', san-serif;
font-weight: 700;
letter-spacing: 2px;
position: relative;
cursor: pointer;

&:before {
    content: '';
    position: absolute;
    top: 0;
    border-top: 1px solid var(--primary-light-variant);
    width: 50%;
    transition: .5s ease;
}

&:after {
    content: '';
    position: absolute;
    bottom: 0;
    border-top: 1px solid var(--primary-light-variant);
    width: 30%;
    transition: .5s ease;
}

&:hover {
    text-decoration: none;
    box-shadow: none;

    &:before {
        width: 30%;
    }

    &:after {
        width: 50%;
    }
}

&:active {
    box-shadow: none;
}
`

export class Portfolio extends Component {

    constructor(props) {
        super(props)
        this.state = {
            projects: [
                {
                    title: "Eniak",
                    image: "https://ik.imagekit.io/bizwem110d/inkling/Eniak_project_images/small-01_ZFX3FoFYE.png?tr=w-500,h-500",
                    alt: "Eniak",
                    link: "eniak",
                    category: ['Design', 'Development'],
                    cardType: "square",
                    nShown: false,
                    bSize: 'cover',
                },
                {
                    title: "ITK",
                    image: "https://ik.imagekit.io/bizwem110d/inkling/ITK_project/itk_portfolio_banner_msquWt3k9.png",
                    alt: "ITK",
                    link: "itk",
                    category: ['Development', 'Curriculum Design'],
                    cardType: "tall",
                    nShown: true,
                    bSize: 'cover',
                },
                {
                    title: "90min app challenge",
                    image: "https://ik.imagekit.io/bizwem110d/inkling/90_Min_App_Challenge/90min_logo_LwfeKLTs-.png?tr=w-1000,h-600,fo-custom",
                    alt: "90 min app challenge",
                    link: "90-min-app",
                    category: ['Development', 'Curriculum Design'],
                    cardType: "square",
                    nShown: true,
                    bSize: 'contain',
                },
                {
                    title: "Code for All",
                    image: "https://ik.imagekit.io/bizwem110d/inkling/Code_for_all/codeForAllProjectsbanner_IV6skIgg3.png?tr=h-500",
                    alt: "code for all",
                    link: "code-for-all",
                    category: ['Development', 'Curriculum Design'],
                    cardType: "square",
                    nShown: false,
                    bSize: 'cover',
                },
                {
                    title: "AllSpace Ventures",
                    image: "https://ik.imagekit.io/bizwem110d/inkling/AllSpace_Ventures/AllSpace_insta_JnP_iTILu.png?tr=h-500",
                    alt: "all space ventures",
                    link: "allspace-ventures",
                    category: ['Design'],
                    cardType: "square",
                    nShown: false,
                    bSize: 'cover',
                },
                {
                    title: "Aadhiyaran Agrarian Services",
                    image: "https://ik.imagekit.io/bizwem110d/inkling/Aadhiyaran_Agrarian_Services/Aadhiyaran_cards_v1HcYI1_Q.png?tr=h-500",
                    alt: "aadhiyaran agrarian services",
                    link: "aadhiyaran-agrarian-services",
                    category: ['Design'],
                    cardType: "tall",
                    nShown: false,
                    bSize: 'cover',
                },
                {
                    title: "Doolally",
                    image: "https://ik.imagekit.io/bizwem110d/inkling/Doolally/Doolally_finalposter1-01_RV2jbJUMj.png?tr=w-800,h-500,fo-custom",
                    alt: "doolally",
                    link: "doolally",
                    category: ['Design'],
                    cardType: "large",
                    nShown: false,
                    bSize: 'cover',
                },
                {
                    title: "Pathways Life Coaching",
                    image: "https://ik.imagekit.io/bizwem110d/inkling/Pathways/Screenshot_2021-05-28_at_3.12.17_PM_o5MCgTL1d.png?tr=h-500",
                    alt: "pathways life coaching",
                    link: "pathways",
                    category: ['Design'],
                    cardType: "square",
                    nShown: true,
                    bSize: 'cover',
                },
                {
                    title: "Armor Security",
                    image: "https://ik.imagekit.io/bizwem110d/inkling/Armor_Security/armorsecurityproject_Fz5CXZVgH.png?tr=h-500",
                    alt: "armor security",
                    link: "armor-security",
                    category: ['Design'],
                    cardType: "square",
                    nShown: true,
                    bSize: 'cover',
                },
                {
                    title: "Snapdeal",
                    image: "https://ik.imagekit.io/bizwem110d/inkling/Snapdeal/snap2-01_onEKKlsjQ.png",
                    alt: "snapdeal",
                    link: "snapdeal",
                    category: ['Design'],
                    cardType: "tall",
                    nShown: false,
                    bSize: 'cover',
                },
                {
                    title: "KLM Royal Dutch Airlines",
                    image: "https://ik.imagekit.io/bizwem110d/inkling/KLM/KLM_signin_nWmnvkWOg.png",
                    alt: "klm royal dutch airlines",
                    link: "klm",
                    category: ['Design', 'Development'],
                    cardType: "large",
                    nShown: false,
                    bSize: 'cover',
                },
                {
                    title: "Main Bhi Ambani",
                    image: "https://ik.imagekit.io/bizwem110d/inkling/Main_bhi_Ambani/mainbhiambani-banner-1_iLApmpYn2.png?tr=h-500,w-1200,fo-custom",
                    alt: "main bhi ambani",
                    link: "main-bhi-ambani",
                    category: ['Design', 'Development'],
                    cardType: "sqaure",
                    nShown: true,
                    bSize: 'contain',
                }
            ],
            showProjects: [],
            count: 5,
            category: 'all',
            showCat: false,
        }
    }

    componentDidMount() {
        this.categorySelector('all')
    }

    toggleCategories = () => {
        this.setState(prevState => {
            return {
                showCat: !prevState.showCat
            }
        })
    }

    categorySelector = async (category) => {
        if (category === 'all') {
            this.setState({
                showProjects: this.state.projects.slice(0, this.state.count),
                category: 'all'
            })
        } else {
            let showProjectList = []
            this.state.projects.map(project => {
                if (project.category.includes(category)) {
                    showProjectList.push(project)
                }
                return null
            })
            this.setState({
                showProjects: showProjectList.slice(0, this.state.count),
                category: category,
            })
        }
    }

    increaseCount = async () => {
        await this.setState({
            count: this.state.count + 5
        })
        this.categorySelector(this.state.category)
    }

    render() {
        return <Fragment>
            <ScrollToTopOnMount />
            <ParentContainer>
                <div className="d-flex column col-10 col-xlg-6 margin-center py-3 relative">
                    <CategoryMenuDiv className="d-flex align-center c-g-1 pb-3" onClick={this.toggleCategories}>
                        <CategoryMenu>Categories</CategoryMenu>
                        <CategoryDropdown src={dropdown} alt="dropdown" show={this.state.showCat} />
                    </CategoryMenuDiv>
                    <div className="d-flex center">
                        <CategoryMenu className="screen py-2">Categories</CategoryMenu>
                    </div>
                    <CategoryDiv className="column xmd-row xmd-space-between lg-space-evenly col-10 col-md-6 col-xmd-10 col-xlg-6 margin-center pl-2 py-2 px-xmd-none pt-xmd-none pb-xmd-3" toggleShow={this.state.showCat}>
                        <Category className="d-flex align-center c-g-1" onClick={() => this.categorySelector('all')}>
                            <Image src={allProjects} alt="all projects" />
                            <CategoryImpText
                                className={this.state.category === 'all' && "selected"}>All Projects</CategoryImpText>
                        </Category>
                        <Category className="d-flex align-center c-g-1" onClick={() => this.categorySelector('Design')}>
                            <Image src={design} alt="design" />
                            <CategoryImpText
                                className={this.state.category === 'Design' && "selected"}>Design</CategoryImpText>
                        </Category>
                        <Category className="d-flex align-center c-g-1" onClick={() => this.categorySelector('Development')}>
                            <Image src={development} alt="development" />
                            <CategoryImpText
                                className={this.state.category === 'Development' && "selected"}>Development</CategoryImpText>
                        </Category>
                        <Category className="d-flex align-center c-g-1" onClick={() => this.categorySelector('Curriculum Design')}>
                            <Image src={cDesign} alt="curriculum" />
                            <CategoryImpText
                                className={this.state.category === 'Curriculum Design' && "selected"}>Curriculum Design</CategoryImpText>
                        </Category>
                    </CategoryDiv>
                    <ProjectDiv>
                        {this.state.showProjects.map((project, index) => <Project
                            key={index}
                            title={project.title}
                            image={project.image}
                            alt={project.alt}
                            link={project.link}
                            nameShow={project.nShown}
                            cardType={project.cardType}
                            bSize={project.bSize} />)}
                    </ProjectDiv>
                    {this.state.count < this.state.projects.length &&
                        <div className="d-flex center" style={{ margin: "50px" }}>
                            <StyledPortfolioLink onClick={this.increaseCount} className="d-flex center align-center my-2">view more</StyledPortfolioLink>
                        </div>
                    }
                </div>
            </ParentContainer>
        </Fragment>
    }
}