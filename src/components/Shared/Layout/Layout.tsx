import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../Theme/components/GlobalStyle';
import { theme } from '../Theme/Theme';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              {
                name: 'keywords',
                content: 'sample, something',
              },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
