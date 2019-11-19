import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Category } from "../components/category"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query IndexPageQuery {
      allGoogleSpreadsheetSheet1 {
        edges {
          node {
            additionalDetails
            category
            description
            id
            location
            name
            url
          }
        }
      }
    }
  `)

  let things = data.allGoogleSpreadsheetSheet1.edges.map(t => t.node)

  // Aggregate categories
  let categoriesMap = new Map()
  things.forEach(thing => categoriesMap.set(thing.category, null))
  let categories = Array.from(categoriesMap).map(([category]) => ({
    category,
    id: category
      .toLowerCase()
      .split(" ")
      .join("-"),
    items: [...things.filter(t => t.category === category)],
  }))

  return (
    <Layout>
      <SEO title="Home" />
      <div className="mb-5">
        <h5>Categories:</h5>
        <ul className="nav nav-pills">
          {categories.map(c => (
            <li key={c.id} className="nav-link" role="presentation">
              <a className="categoryLink" href={`#${c.id}`}>
                {c.category}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="thingsToDo">
        {categories.map(category => (
          <Category key={category.category} {...category} />
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage
