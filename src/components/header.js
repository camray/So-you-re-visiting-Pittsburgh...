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
        textShadow: "black 1px 1px 1px",
        marginBottom: "4rem",
      }}
    >
      <div
        style={{
          padding: "4rem 0rem",
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <h1 className="display-4">{siteTitle}</h1>
          <p className="lead">{siteDescription}</p>
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
