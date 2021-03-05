import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"

export default ({ data }) => {  // data comes from graphql query
  const { allStrapiProjects: { nodes: projects } } = data   // This destructing is the same pages/projects. We can compare them to udnerstand.

  return (
    <Layout>
      <Hero />
      <Services />
      <Jobs />
      <Projects
        projects={projects}
        title="featured projects"
        showLink
      />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        description
        github
        id
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          label
        }
      }
    }
  }
`
