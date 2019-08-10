import React, { Component } from "react"
import get from "lodash/get"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitterSquare,
  faInstagram,
  faFacebookSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import BlogCard from "../components/BlogCard"
import LeftImageSectionHeading from "../components/LeftImageSectionHeading"
import RightImageSectionHeading from "../components/RightImageSectionHeading"
import News from "../components/News"
import Follow from "../components/Follow"
import JoinTheTeam from "../components/JoinTheTeam"
import Placeholder from "../assets/commu.png"
import Team from "../components/Team"
import PartnerLogos from "../components/PartnerLogos"
import teamspirit from "../assets/teamspirit.png"
import pin2 from "../assets/pin2.png"
import getDirection from "../assets/get-directions-button.png"
import { Link } from "gatsby"

class location extends Component {
  render() {
    const location = get(this.props, "data.contentfulLocationPage")
    const articles = get(this, "props.data.allContentfulBlogPost.edges")
    return (
      <>
        <section className="container-fluid">
          <Navbar />
          <section>
            <div
              className="location-hero"
              style={{ backgroundImage: `url(${location.image.file.url})` }}
            >
              <div className="row">
                <div className="col-md-12 col-lg-5 border-0 location-card mt-5 py-5 position-absolute">
                  <h1 className="location-title">
                    <img src={location.icon.file.url} alt="" />{" "}
                    {location.heading}
                  </h1>
                  {location.nextBatchDate ? (
                    <p className="text-muted batch-text">
                      Next Batch: {location.nextBatchDate}
                    </p>
                  ) : (
                    <p className="text-muted batch-text">
                      Next Batch will be announced soon
                    </p>
                  )}
                  {location.isOpen ? (
                    <div>
                      <a className="btn btn-primary mt-3 d-inline" href="/">
                        Apply now
                      </a>
                      <a
                        className="btn btn-secondary mt-3 d-inline"
                        href={`mailto:${
                          location.heading
                        }@techlabs.org?subject=Question from techlabs.org`}
                      >
                        Contact us
                      </a>
                    </div>
                  ) : (
                    <div>
                      <a
                        className="btn btn-primary mt-3 d-inline"
                        href={`mailto:${
                          location.heading
                        }@techlabs.org?subject=Question from techlabs.org`}
                      >
                        Contact us
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
          <section className="container location">
            <PartnerLogos
              logoOne={location.partnerOne.file.url}
              logoTwo={location.partnerTwo.file.url}
              logoThree={location.partnerThree.file.url}
              logoFour={location.partnerFour.file.url}
            />
            {location.firstEntryTitle && (
              <LeftImageSectionHeading
                heading={location.firstEntryTitle}
                subheading="Text Text Text"
                text={location.firstEntryText}
                image={location.firstEntryImage.file.url}
              />
            )}
            {location.secondEntryTitle && (
              <RightImageSectionHeading
                heading={location.secondEntryTitle}
                subheading="Text Text Text"
                text={location.secondEntryText}
                image={location.secondEntryImage.file.url}
              />
            )}
            {location.thirdEntryTitle && (
              <LeftImageSectionHeading
                heading={location.thirdEntryTitle}
                text={location.thirdEntryText.json.content[0].content[0].value}
                image={location.thirdEntryImage.file.url}
              />
            )}
            {location.teamNameOne && (
              <Team
                city={location.heading}
                firstName={location.teamNameOne}
                firstImage={location.teamImgOne.file.url}
                firstLinkedIn={location.teamLinkedInOne}
                secondName={location.teamNameTwo}
                secondImage={location.teamImgTwo.file.url}
                secondLinkedIn={location.teamLinkedInTwo}
                thirdName={location.teamNameThree}
                thirdImage={location.teamImgThree.file.url}
                thirdLinkedIn={location.teamLinkedInThree}
                fourthName={location.teamImgFour}
                fourthImage={location.teamNameFour.file.url}
                fourthLinkedIn={location.teamLinkedInFour}
              />
            )}
            <Follow
              heading="Follow us:"
              subheading="Stay up to date"
              facebookLink={location.facebookUrl}
              instagramLink={location.instagramUrl}
              linkedInLink={location.linkedinUrl}
              mediumLink={location.mediumUrl}
            />
          </section>
          {location.openPositionsLink && (
            <RightImageSectionHeading
              heading="Join the Team"
              subheading="Interested in joining the team?"
              text="Do you dream of a world with no digital illitarates? Are you passionate about tech? As a TechLabs Management Member you can actively support others in learning tech. Reach out and join the TechLabs-Team."
              image={teamspirit}
              hasButton={true}
              buttonLink={location.openPositionsLink}
              buttonText="Open Positions"
            />
          )}
          {location.officeName && (
            <div className="container h-100 my-5 py-5">
              <div className="row">
                <div className="col">
                  <h2>{`Our Office - ${location.officeName}`}</h2>
                  <div className="section-divider" />
                  <p className="basicSection--sub">Checkout our Workspace</p>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-md-7 office--img"
                  style={{
                    backgroundImage: `url(${location.officeImg.file.url})`,
                  }}
                >
                  <div className="w-75 office--card position-absolute">
                    <h3 className="office--heading">
                      Come & visit {location.officeName}
                    </h3>
                    <div className="row mt-4">
                      <img src={pin2} alt="pin" className="h-75 mx-3" />
                      <p className=" office--smalltext">
                        {location.officeAdress}
                      </p>
                    </div>
                    <div className="row mt-2">
                      <img src={getDirection} alt="pin" className="h-75 mx-3" />
                      <a
                        href={location.officeLink}
                        className="d-inline noDec office--smalltext"
                      >
                        Get Directions
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="row pl-5 d-flex h-100 mt-5 pr-5">
                    <p className="align-self-center justify-content-center office--text">
                      {location.officeText.json.content[0].content[0].value}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        <Footer />
      </>
    )
  }
}

export default location

export const pageQuery = graphql`
  query LocationByHeading($heading: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulLocationPage(heading: { eq: $heading }) {
      heading
      icon {
        file {
          url
        }
      }
      image {
        file {
          url
        }
      }
      isOpen
      nextBatchDate
      facebookUrl
      instagramUrl
      linkedinUrl
      twitterUrl
      mediumUrl
      usesFirstEntry
      firstEntryTitle
      firstEntryText
      firstEntryImage {
        file {
          url
        }
      }
      usesSecondEntry
      secondEntryTitle
      secondEntryText
      secondEntryImage {
        file {
          url
        }
      }
      usesThirdEntry
      thirdEntryTitle
      thirdEntryText {
        json
      }

      thirdEntryImage {
        file {
          url
        }
      }
      partnerOne {
        file {
          url
        }
      }
      partnerTwo {
        file {
          url
        }
      }
      partnerThree {
        file {
          url
        }
      }
      partnerFour {
        file {
          url
        }
      }
      teamNameOne
      teamLinkedInOne
      teamImgOne {
        file {
          url
        }
      }
      teamNameTwo
      teamLinkedInTwo
      teamImgTwo {
        file {
          url
        }
      }
      teamNameThree
      teamLinkedInThree
      teamImgThree {
        file {
          url
        }
      }
      teamNameFour {
        file {
          url
        }
      }
      teamLinkedInFour
      teamImgFour
      openPositionsLink
      officeName
      officeImg {
        file {
          url
        }
      }
      officeAdress
      officeText {
        json
      }
      officeLink
    }
    allContentfulBlogPost(limit: 3) {
      edges {
        node {
          title
          id
          readTime
          authorName
          slug
          abstract
          postImg {
            file {
              url
            }
          }
        }
      }
    }
  }
`
