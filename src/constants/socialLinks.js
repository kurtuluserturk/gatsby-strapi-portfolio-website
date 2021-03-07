import React from "react"
import {
  FaInstagramSquare,
  FaLinkedin,
  FaMailBulk,
  FaGithubSquare
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
    url: "https://www.instagram.com/_kurtulus/",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/kurtulus-erturk/",
  },
  {
    id: 3,
    icon: <FaMailBulk className="social-icon"></FaMailBulk>,
    url: "mailto:erturkkurtulus360@gmail.com",
  },
  {
    id: 4,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/kurtuluserturk",
  }
]

const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
