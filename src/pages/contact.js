import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import layouttest from "../components/blocks/layouttest"
import SEO from "../components/seo"

const ContactPage = () => (
  <layouttest>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>

    <Link to="/">Go back to the homepage</Link>
  </layouttest>
)

export default ContactPage
