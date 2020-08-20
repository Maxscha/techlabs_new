import React, { Component } from "react"
import { graphql } from "gatsby"
import get from "lodash/get"

// components
import LeftImageSection from "../components/shared/LeftImageSection"
import RightImageSection from "../components/shared/RightImageSection"
import DatesCalendar from "../components/locations/DatesCalendar"
import Follow from "../components/locations/Follow"
import Team from "../components/locations/Team"
import Tooltip from "../components/smallComponents/Tooltip"
import Heading from "../components/smallComponents/Heading"
import Container from "../components/smallComponents/Container"
import Button from "../components/smallComponents/Button"
import Layout from "../components/Layout/Layout"
import PartnerLogos from "../components/locations/partnerLogos"

// assets
import teamspirit from "../assets/teamspirit.png"
import pin2 from "../assets/pin2.png"
import getDirection from "../assets/get-directions-button.png"
import ds from "../assets/ds.png"
import ai from "../assets/ai.png"
import web from "../assets/web.png"

class location extends Component {
  state = {
    modalIsOpen: false,
    x: 0,
    y: 0,
    text: "Web Dev",
  }

  handleOpenToolTip(e, track) {
    this.setState({
      modalIsOpen: true,
      x: e.clientX,
      y: e.clientY,
      text: track,
    })
  }
  render() {
    const location = get(this.props, "data.contentfulLocationPage")
    const { modalIsOpen, x, y, text } = this.state
    return (
      <Layout>
        <section className="container-fluid">
          <section>
            <div
              className="location-hero"
              style={{ backgroundImage: `url(${location.image.file.url})` }}
            >
              <Tooltip modalIsOpen={modalIsOpen} x={x} y={y} text={text} />
              <div className="row">
                <div className="col-md-12 col-lg-5 border-0 location-card mt-4 py-5 position-absolute">
                  <div className="row text-right fixed-top-absolute py-3">
                    <div className="col-md-12">
                      <small className="text-muted mr-4">
                        Available Tracks:
                      </small>
                      {location.avaiableTracks.web && (
                        <img
                          src={web}
                          alt="web development"
                          width="25"
                          className="mr-3"
                          onMouseOver={e =>
                            this.handleOpenToolTip(e, "Web Dev")
                          }
                          onFocus={e => 
                            this.handleOpenToolTip(e, "Web Dev")}
                          onMouseLeave={() =>
                            this.setState({
                              modalIsOpen: false,
                            })
                          }
                          role="presentation"
                        />
                      )}
                      {location.avaiableTracks.ai && (
                        <img
                          src={ai}
                          width="25"
                          className="mr-3"
                          alt="ai"
                          onMouseOver={e => this.handleOpenToolTip(e, "AI")}
                          onFocus={e => 
                            this.handleOpenToolTip(e, "AI")}
                          onMouseLeave={() =>
                            this.setState({
                              modalIsOpen: false,
                            })
                          }
                          role="presentation"
                        />
                      )}
                      {location.avaiableTracks.data && (
                        <img
                          src={ds}
                          width="25"
                          className="mr-3"
                          alt="data science"
                          onMouseOver={e =>
                            this.handleOpenToolTip(e, "Data Science")
                          }
                          onFocus={e => 
                            this.handleOpenToolTip(e, "Data Science")}
                          onMouseLeave={() =>
                            this.setState({
                              modalIsOpen: false,
                            })
                          }
                          role="presentation"
                        />
                      )}
                      {location.avaiableTracks.ux && (
                        <img
                          src={web}
                          width="25"
                          className="mr-3"
                          alt="ux"
                          onMouseOver={e =>
                            this.handleOpenToolTip(e, "UX Design")
                          }
                          onFocus={e => 
                            this.handleOpenToolTip(e, "UX Design")}
                          onMouseLeave={() =>
                            this.setState({
                              modalIsOpen: false,
                            })
                          }
                          role="presentation"
                        />
                      )}
                    </div>
                  </div>

                  <h1 className="location-title">
                    <img src={location.icon.file.url} alt="" width="60" />{" "}
                    {location.heading}
                  </h1>

                  <div className="row">
                    <div className="col">
                      {location.isOpen ? (
                        <p className="text-muted batch-text">
                          Next application phase:{" "}
                          <span className="a-black">
                            {location.nextBatchDate}
                          </span>
                        </p>
                      ) : (
                        <p className="text-muted batch-text">
                          Next Batch will be announced soon
                        </p>
                      )}
                    </div>
                  </div>

                  {location.isOpen ? (
                    <>
                      <Button
                        text="Apply now"
                        link={`${location.applicationLink}`}
                        isExternal={true}
                        primary={true}
                      />
                      <Button
                        text="Contact us"
                        primary={false}
                        isExternal={true}
                        link={`mailto:${location.email}`}
                      />
                    </>
                  ) : (
                    <>
                      <Button
                        text="Contact us"
                        primary={true}
                        isExternal={true}
                        link={`mailto:${location.email}`}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>
          <section className="container location">
            {location.hasCalendar && (
              <DatesCalendar
                eventsPage={location.eventsPage}
                city={location.heading}
                mail={location.email}
              />
            )}
            {location.firstEntryTitle && (
              <LeftImageSection
                heading={location.firstEntryTitle}
                subheading={location.firstEntrySubtitle}
                text={location.firstEntryText.json.content[0].content[0].value}
                image={location.firstEntryImage.file.url}
                leftPartSize="6"
                rightPartSize="6"
                float={true}
              />
            )}
            {location.secondEntryTitle && (
              <RightImageSection
                heading={location.secondEntryTitle}
                subheading={location.secondEntrySubtitle}
                text={location.secondEntryText.json.content[0].content[0].value}
                image={location.secondEntryImage.file.url}
                leftPartSize="6"
                rightPartSize="6"
                float={true}
              />
            )}
            {location.thirdEntryTitle && (
              <LeftImageSection
                heading={location.thirdEntryTitle}
                subheading={location.thirdEntrySubtitle}
                text={location.thirdEntryText.json.content[0].content[0].value}
                image={location.thirdEntryImage.file.url}
                leftPartSize="6"
                rightPartSize="6"
                float={true}
              />
            )}
            {location.team != null && (
              <Team
                city={location.heading && location.heading}
                team={location.team}
              />
            )}
            <Follow
              heading="Follow Us:"
              subheading="Stay up to date!"
              facebookLink={location.facebookUrl}
              instagramLink={location.instagramUrl}
              linkedInLink={location.linkedinUrl}
              mediumLink={location.mediumUrl}
            />
          </section>
          {location.openPositionsLink && (
            <RightImageSection
              heading="Join the Team"
              subheading="Interested in joining our team?"
              text="You are dreaming of a world with no digital illiterates and are passionate about tech? As a TechLabs Management-Team member you can actively support others in learning tech. Reach out and join the TechLabs family. "
              image={teamspirit}
              hasButton={true}
              buttonLink={location.openPositionsLink}
              buttonText="Open Positions"
            />
          )}
          {location.officeName && (
            <Container>
              <Heading
                heading={`Our Office - ${location.officeName}`}
                subheading="Checkout our Workspace"
              />
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
            </Container>
          )}
          {location.partners && (
            <PartnerLogos
              heading="Our Partners"
              subheading="Our location is proudly supported"
              partners={location.partners}
            />
          )}
        </section>
      </Layout>
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
      mediumUrl
      firstEntryTitle
      firstEntrySubtitle
      firstEntryText {
        json
      }
      firstEntryImage {
        file {
          url
        }
      }
      secondEntryTitle
      secondEntrySubtitle
      secondEntryText {
        json
      }
      secondEntryImage {
        file {
          url
        }
      }
      thirdEntryTitle
      thirdEntrySubtitle
      thirdEntryText {
        json
      }

      thirdEntryImage {
        file {
          url
        }
      }
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
      applicationLink
      email
      usesTeam
      hasCalendar
      team {
        linkedIn
        name
        image {
          sizes(quality: 100) {
            ...GatsbyContentfulSizes_withWebp
          }
          title
        }
      }
      avaiableTracks {
        ai
        data
        ux
        web
      }
      partners {
        name
        partnerLink
        logo {
          sizes(quality: 100) {
            ...GatsbyContentfulSizes_withWebp
          }
        }
      }
    }
  }
`
