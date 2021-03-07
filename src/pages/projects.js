import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from "../components/SEO"

const ProjectsPage = ({ data: { allStrapiProjects: { nodes: projects } } }) => {  // This destructing is the same components/index. We can compare them to udnerstand.

  return (
    <Layout>
      <SEO title="Projects" description="this is projects page" />
      <section className="projects-page">
        <Projects projects={projects} title="all projects" />   {/* We don't use showLink because it is unnecessary button for all projects page. */}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects {
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

export default ProjectsPage
