import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"

const Project = ({ description, github, title, url, image, stack, index }) => {

  return (
    <article className="project">
      <Image fluid={image.childImageSharp.fluid} className="project-img" />
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <h3>{title || "defaul title"}</h3>
        <p className="project-desc">
          {description}
        </p>
        <div className="project-stack">
          {stack.map(item => {
            return <span key={item.id}>{item.label}</span>
          })}
        </div>
        <div className="project-links">
          <a href={github} target="_blank">
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={url} target="_blank">
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}


Project.propTypes = {
  title: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
  image: PropTypes.object.isRequired,  // image is an object
}

export default Project
