import React from "react"
import Slider from "../components/landingpage/Slider"
import RightImageSectionHeading from "../components/shared/RightImageSectionHeading"
import PartnerLogos from "../components/landingpage/PartnerLogos"
import GIC from "../assets/gic.svg"
import KeyBenefits from "../components/shared/KeyBenefits"
import Quote from "../components/shared/Quote"
import gic from "../assets/gic_team.png"
import { Link, graphql } from "gatsby"
import "../styles/_main.scss"
import "../styles/bootstrap.min.css"
import Heading from "../components/smallComponents/Heading"
import Container from "../components/smallComponents/Container"
import Button from "../components/smallComponents/Button"
import ApplicationPeriod from "../components/landingpage/applicationPeriod"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"
import Layout from "../components/Layout/Layout"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

class index extends React.Component {

  componentDidMount() {
    console.log(
      "%cTechLabs",
      "font-family:'helvetica'; display: block;font-weight:bold; font-size:48px;"
    )
    console.log(
      "%cPassionated about Tech? Become a Co-Founder of TechLabs => https://techlabs.org/foundYourOwn",
      "font-family:'helvetica'; font-weight:100;"
    )
  }

  render() {
    const { data, intl } = this.props
    return (
      <Layout>
        <div className="container-fluid">
          {/* header section */}
          <section className="py-5 padding-top-15">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 my-auto xs-margin-right">
                  <h1 className="display-4">
                    We Build.
                    <br />
                    <span className="highlighted lh-90">Digital. </span>
                    <br />
                    <span className="highlighted lh-90">Shapers.</span>
                  </h1>
                  <p className="index--lead mb-4 margin-top-15 margin-bottom-2 text-justify">
                    <FormattedMessage id={"landingpage.digital.shaper.part1"} />
                    <span className="text-bold">
                      <FormattedMessage
                        id={"landingpage.digital.shaper.part2"}
                      />
                    </span>
                  </p>
                  <div className="mt-5">
                    <Button text="Program" primary={false} link="/program" />
                    <Button text="About" primary={true} link="/about" />
                  </div>
                </div>
                <div className="col-md-7 d-none d-lg-block">
                  <Img
                    alt="commmunity"
                    fluid={data.imageOne.childImageSharp.fluid}
                  />
                </div>
              </div>
            </div>
          </section>
          {/* winner of GIC and partner logos */}
          <section className="gic py-5">
            <div className="container center">
              <img className="gic-badge" src={GIC} alt="gic" />
            </div>
            <PartnerLogos
              logoOne={data.accenture.childImageSharp.fluid}
              linkPartnerOne="https://www.accenture.com/de-de/interactive-index"
              logoTwo={data.sopra.childImageSharp.fluid}
              linkPartnerTwo="https://www.soprasteria.de/de"
              logoThree={data.westfalen.childImageSharp.fluid}
              linkPartnerThree="https://westfalen.com/de/de/privatkunden/"
              logoFour={data.ey.childImageSharp.fluid}
              linkPartnerFour="https://www.ey.com/de_de"
            />
          </section>
          {/* what we offer */}
          <section className="py-5 my-5">
            <BackgroundImage
              fluid={data.wwo.childImageSharp.fluid}
              style={{
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            >
              <div className="container">
                <Heading
                  heading={
                    <FormattedMessage id={"landingpage.what.we.offer.title"} />
                  }
                  subheading={
                    <FormattedMessage
                      id={"landingpage.what.we.offer.subtitle"}
                    />
                  }
                />
                <div className="row">
                  <div className="col-lg-5 d-none d-md-block">
                    <div className="d-flex flex-column h-100 p-4" />
                  </div>
                  <div className="d-flex col-lg-7 flex-wrap">
                    <div className="p-2 col-sm-6 mt-5">
                      <Link to="/program" className="card-a">
                        <div className="card h-100">
                          <h1 className="card-title">16</h1> <br />
                          <p className="card-subtitle">
                            {
                              <FormattedMessage
                                id={"landingpage.what.weeks.of.coding"}
                              />
                            }
                          </p>
                          <p className="text-muted">
                            {
                              <FormattedMessage
                                id={"landingpage.what.weeks.of.coding.text"}
                              />
                            }
                          </p>
                          <span className="card-discover">
                            {
                              <FormattedMessage
                                id={"landingpage.what.weeks.of.coding.discover"}
                              />
                            }
                          </span>
                        </div>
                      </Link>
                    </div>
                    <div className="p-2 col-sm-6 mt-5">
                      <Link to="/program" className="card-a">
                        <div className="card h-100">
                          <h1 className="card-title">4</h1> <br />
                          <p className="card-subtitle">
                            {
                              <FormattedMessage
                                id={"landingpage.what.digital.tracks"}
                              />
                            }
                          </p>
                          <p className="text-muted pb-4">
                            {
                              <FormattedMessage
                                id={"landingpage.what.digital.tracks.text"}
                              />
                            }
                          </p>
                          <span className="card-discover">
                            {
                              <FormattedMessage
                                id={"landingpage.what.digital.tracks.discover"}
                              />
                            }
                          </span>
                        </div>
                      </Link>
                    </div>
                    <div className="p-2 col-sm-6 mt-5">
                      <Link to="/locations" className="card-a">
                        <div className="card h-100">
                          <h1 className="card-title">300+</h1> <br />
                          <p className="card-subtitle">
                            {
                              <FormattedMessage
                                id={"landingpage.what.community.members"}
                              />
                            }
                          </p>
                          <p className="text-muted">
                            {
                              <FormattedMessage
                                id={"landingpage.what.community.members.text"}
                              />
                            }
                            <br />
                            <br />
                          </p>
                          <span className="card-discover">
                            {
                              <FormattedMessage
                                id={
                                  "landingpage.what.community.members.discover"
                                }
                              />
                            }
                          </span>
                        </div>
                      </Link>
                    </div>
                    <div className="p-2 col-sm-6 mt-5">
                      <Link to="/locations" className="card-a">
                        <div className="card h-100">
                          <h1 className="card-title">
                            {data.allContentfulLocationPage.edges.length}
                          </h1>
                          <br />
                          <p className="card-subtitle">
                            {
                              <FormattedMessage
                                id={"landingpage.what.location"}
                              />
                            }
                          </p>
                          <p className="text-muted pb-4">
                            We currently have local communities in different
                            locations from all over the world.
                          </p>
                          <span className="card-discover">
                            {
                              <FormattedMessage
                                id={"landingpage.location.discover"}
                              />
                            }
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </BackgroundImage>
          </section>
          {/* application deadlines                       */}
          <ApplicationPeriod
            wave={data.wave.childImageSharp.fluid}
            locationData={data.allContentfulLocationPage.edges}
          />
          {/* our community slider */}
          <Slider
            imageOne={data.jin.childImageSharp.fluid}
            imageOneMobil={data.jin_mobil.childImageSharp.fixed}
            imageOneThumbnail={data.jin_mobil_thumbnail.childImageSharp.fluid}
            imageTwo={data.huemeyra.childImageSharp.fluid}
            imageTwoMobil={data.huemeyra_mobil.childImageSharp.fixed}
            imageThree={data.miriam.childImageSharp.fluid}
            imageThreeMobil={data.miriam_mobil.childImageSharp.fixed}
            imageThreeThumbnail={
              data.miriam_mobil_thumbnail.childImageSharp.fluid
            }
          />

          <RightImageSectionHeading
            heading={<FormattedMessage
              id={"landingpage.googlechallenge.heading"}
            />}
            subheading={<FormattedMessage
            id={"landingpage.googlechallenge.subheading"}
            />}
            text={
              <FormattedMessage
              id={"landingpage.googlechallenge.text"}
            />
            }
            image={gic}
            hasButton={true}
            buttonText="Read more"
            buttonLink="https://www.wn.de/Muenster/3342867-Muensteraner-bei-Google-Impact-Challenge-ausgezeichnet-Non-Profit-Startup-Techlabs-gewinnt-20.000-Euro-Foerderpreis"
          />
          <Quote
            heading="The TechLabs Journey"
            subheading="What awaits you at TechLabs"
            text="Get up to speed learning tech skills in one semester by means
                  of our program that combines Online Learning, Project Work,
                  and TechLabs Community Meetings. Independent of the background
                  and prior knowledge - anyone can participate and learn
                  tech-skills. At TechLabs we don’t want money to be an issue.
                  That’s why our programs are free of charge. We help you to
                  complete your own tech project and qualify for tech roles."
            photo={data.nils.childImageSharp.fixed}
            name="Nils Bahr"
            job="Head of Product @ TechLabs"
          />
          <KeyBenefits
            heading={
              <FormattedMessage id={"program.local.keyBenefits.heading"} />
            }
            subheading={
              <FormattedMessage id={"program.local.keyBenefits.subheading"} />
            }
            firstHeading={
              <FormattedMessage
                id={"program.local.keyBenefits.first.heading"}
              />
            }
            firstText={
              <FormattedMessage id={"program.local.keyBenefits.first.text"} />
            }
            secondHeading={
              <FormattedMessage
                id={"program.local.keyBenefits.second.heading"}
              />
            }
            secondText={
              <FormattedMessage id={"program.local.keyBenefits.second.text"} />
            }
            thirdHeading={
              <FormattedMessage
                id={"program.local.keyBenefits.third.heading"}
              />
            }
            thirdText={
              <FormattedMessage id={"program.local.keyBenefits.third.text"} />
            }
            fourthHeading={
              <FormattedMessage
                id={"program.local.keyBenefits.fourth.heading"}
              />
            }
            fourthText={
              <FormattedMessage id={"program.local.keyBenefits.fourth.text"} />
            }
          />
          <section className="container-fluid mt-5 background h-100 py-5">
            <Container>
              <Heading
                heading="Learn More"
                subheading="Check out our locations and our Digital Shaper Program!"
              />
              <div className="row h-100">
                <div className="col-md-6 mt-3">
                  <Link to="/locations" className="noDec">
                    <div className="card">
                      <h2 className="mt-3 color-red">Locations →</h2>
                      <p className="color-gl">
                        Take a look at what is currently happening in our local
                        tech communities. Your town is still missing? Bring
                        TechLabs to your city, let’s build Digital Shapers
                        together.
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 mt-3">
                  <Link to="/program" className="noDec">
                    <div className="card">
                      <h2 className="mt-3 color-red">Program →</h2>
                      <p className="color-gl">
                        Not sure which learning track is the right one for you?
                        Check out our program and get more information about
                        each of our tracks.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </Container>
          </section>
        </div>
      </Layout>
    )
  }
}

export default injectIntl(index)

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
export const fixedImage = graphql`
  fragment fixedImage on File {
    childImageSharp {
      fixed(width: 50, height: 50) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "startPage.png" }) {
      ...fluidImage
    }
    accenture: file(relativePath: { eq: "accenture.png" }) {
      ...fluidImage
    }
    sopra: file(relativePath: { eq: "sopra.png" }) {
      ...fluidImage
    }
    westfalen: file(relativePath: { eq: "westfalen.png" }) {
      ...fluidImage
    }
    ey: file(relativePath: { eq: "ey.png" }) {
      ...fluidImage
    }
    wwo: file(relativePath: { eq: "wwo.png" }) {
      ...fluidImage
    }
    wave: file(relativePath: { eq: "wave.png" }) {
      ...fluidImage
    }
    jin: file(relativePath: { eq: "jinrhee.png" }) {
      ...fluidImage
    }
    jin_mobil: file(relativePath: { eq: "jinrhee_mobil.png" }) {
      ...fixedImage
    }
    jin_mobil_thumbnail: file(relativePath: { eq: "jin_mobil.png" }) {
      ...fluidImage
    }
    huemeyra: file(relativePath: { eq: "humeyra.png" }) {
      ...fluidImage
    }
    huemeyra_mobil: file(relativePath: { eq: "humeyra_mobil.png" }) {
      ...fixedImage
    }
    miriam: file(relativePath: { eq: "miriam.png" }) {
      ...fluidImage
    }
    miriam_mobil: file(relativePath: { eq: "miriam_mobil.png" }) {
      ...fixedImage
    }
    miriam_mobil_thumbnail: file(
      relativePath: { eq: "miriam_mobil_thumbnail.png" }
    ) {
      ...fluidImage
    }
    nils: file(relativePath: { eq: "nils.png" }) {
      ...fixedImage
    }
    allContentfulLocationPage {
      edges {
        node {
          heading
          country
          applicationStart
          applicationEnd
          applicationLink
        }
      }
    }
  }
`