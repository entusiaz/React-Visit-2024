import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet 
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        {name: 'keywords', content: data.site.siteMetadata.keywords },
      ]}
    />
    <Header />
    <Footer links={data.allContentfulLink.edges}>
      Backgrounds made in Cinema 4D, iOS app in Swift, site in React. <a href="mailto:support@designcode.io">Email us</a> to ask anything. © 2018
    </Footer>
      {children()}
    </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description 
        keywords
      }
    }
  }
`
