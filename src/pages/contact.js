import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return (
    <Layout>
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form action="https://formspree.io/f/mpzovaqr" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="name" />
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="email" />
              <textarea name="message" rows="10" className="form-control" placeholder="message"></textarea>
            </div>
            <button type="submit" className="btn submit-btn">submit</button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
