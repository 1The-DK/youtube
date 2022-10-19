import * as React from "react"
import { Link } from 'gatsby'

import Layout from "../components/Layout"

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <section className="mb-24 lg:mb-">
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="lg:col-start-2 col-span-12 lg:col-span-10">
              <h1 className="mb-6">
                Page not found
              </h1>
              <p class="mb-4 lg:mb-8">Error 404</p>
              <Link to="/" className="btn">
                Return home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default NotFoundPage
