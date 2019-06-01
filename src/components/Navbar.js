import React from "react"
import "../styles/_main.scss"
import logo from "../assets/tl-logo.svg"
import MS from "../assets/loc-ms.svg"
import CPH from "../assets/loc-cph.svg"
import BCN from "../assets/loc-bcn.svg"
import SLACK from "../assets/slack-icon.svg"
import Headroom from "react-headroom"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <>
      <Headroom>
        <nav className="navbar navbar-expand-lg navbar-light navbar-add">
          <Link className="navbar-brand" to="/">
            <img src={logo} className="tl-logo" alt="tl-logo" />
          </Link>
          <a href="/career/" className="hire-button">
            👋 we're hiring
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navigations-08"
            aria-controls="navigations-08"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navigations-08">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown d-none d-sm-block">
                <Link
                  className="nav-link active"
                  to="/locations"
                  data-toggle="dropdown"
                >
                  Locations<span className="sr-only">(current)</span>
                </Link>
                <div className="dropdown-menu">
                  <Link className="dropdown-item dropdown-item-corr" to="/muenster">
                    <img src={MS} className="nav-loc-icon" alt="loc-ms" />
                    Muenster
                  </Link>
                  <a className="dropdown-item dropdown-item-corr" href="/">
                    <img src={BCN} className="nav-loc-icon" alt="loc-bcn" />
                    Barcelona
                  </a>
                  <a className="dropdown-item dropdown-item-corr" href="/">
                    <img src={CPH} className="nav-loc-icon" alt="loc-cph" />
                    Copenhagen
                  </a>
                  <div class="dropdown-divider" />
                  <a className="dropdown-item" href="/">
                    branch it <span role="img">🔥</span>
                  </a>
                </div>
              </li>

              <li className="nav-item d-block d-sm-none">
                <a className="nav-link" href="#">
                  Program
                </a>
              </li>

              <li className="nav-item dropdown d-none d-sm-block">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  data-toggle="dropdown"
                >
                  Program
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item " href="/">
                    Your Journey
                  </a>
                  <a className="dropdown-item" href="/">
                    Web Development
                  </a>
                  <a className="dropdown-item" href="/">
                    Data Science
                  </a>
                  <a className="dropdown-item" href="/">
                    Artificial Intelligence
                  </a>
                  <a className="dropdown-item" href="/">
                    UX Design
                  </a>
                </div>
              </li>

              <li className="nav-item d-block d-sm-none">
                <a className="nav-link" href="#">
                  Program
                </a>
              </li>

              <li className="nav-item">
                <Link to="/blog" className="nav-link">Blog</Link>
              </li>

              <li className="nav-item">
                <a className="nav-link">
                  <button className="btn-slack">
                    <img src={SLACK} className="slack-icon" alt="slack" />
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </Headroom>
    </>
  )
}

export default Navbar
