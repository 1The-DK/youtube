require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Gastby minimal starter`,
    siteUrl: `https://www.baillieogrady.com`,
    description: "Minimal Gatsby starter theme",
  },
  plugins: [
    'gatsby-plugin-postcss',
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          process.env.MAILCHIMP_ENDPOINT || 'https://baillieogrady.us4.list-manage.com/subscribe/post?u=b2a5657c274fcc489afacf713&amp;id=c2f688d7af&amp;f_id=00da8de9f0',
        timeout: 3500
      }
    }
  ]
};