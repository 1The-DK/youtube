import * as React from "react"
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import favicon from "../images/favicon.png";

import '../styles/app.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <div className="flex flex-col min-h-screen" role="document">
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
        <link rel="shortcut icon" type="image/png" href={favicon} />
      </Helmet>
      
      <a className="sr-only focus:not-sr-only" href="#main">
        Skip to content
      </a>

      <main className="flex-1" id="main">{children}</main>
      
    </div>
  )
}

export default Layout
