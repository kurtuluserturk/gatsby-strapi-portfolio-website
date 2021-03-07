import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"

const About = ({
  data: { allStrapiAbout: { nodes } }
}) => {

  const { title, info, image, stack } = nodes[0]
  console.log(stack)
  return (
    <Layout>
      <SEO title="About" description="this is about page" />
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={image.childImageSharp.fluid} className="about-img" />
          <article className="about-text">
            <Title title={title} />
            <ReactMarkdown source={info} />
            {/* <p>{info}</p> */}
            <div className="about-stack">
              {stack.map(item => {
                return <span key={item.id}>{item.label}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        title
        info
        image {
          childImageSharp {
            fluid {
              src
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


export default About
