import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Header = ({ siteTitle, siteDescription }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "pittsburgh-header.jpg" }) {
        childImageSharp {
          original {
            src
          }
        }
      }
    }
  `)

  return (
    <header
      className="jumbotron-fluid"
      style={{
        background: `url("${data.file.childImageSharp.original.src}") no-repeat center`,
        backgroundSize: "cover",
        color: "white",
        // textShadow: "black 1px 1px 1px",
        marginBottom: "4rem",
      }}
    >
      <div
        style={{
          padding: "10rem 0rem",
          // backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1
            className="display-4"
            style={{
              backgroundColor: "#101820",
              display: "inline-block",
              borderBottom: "3px solid #FFB612",
              marginBottom: 0,
              padding: "0 1rem",
            }}
          >
            {siteTitle}
          </h1>
          <div
            className="lead"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <p style={{ backgroundColor: "#101820", padding: "0 1rem" }}>
              (the insider guidebook)
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
