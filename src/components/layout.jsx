import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from "./layout.module.css"

const GET_SITE_METADATA = graphql`
  query {
    site {
      siteMetadata {
        author
        description
        title
      }
    }
  }
`

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(GET_SITE_METADATA)

  console.log(data)

  return (
    <main className={container}>
      <title>{pageTitle}</title>
      <p className={siteTitle}>{data.site.siteMetadata.title}</p>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <h1 className={heading}>{pageTitle}</h1>
      {children}
    </main>
  )
}

export default Layout
