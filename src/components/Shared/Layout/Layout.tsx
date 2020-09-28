import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql, StaticQuery } from "gatsby";
import { GlobalStyle } from "../Theme/components/GlobalStyle";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

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
        <div className={GlobalStyle}>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: "description", content: "Sample" },
              {
                name: "keywords",
                content: "sample, something"
              }
            ]}
          >
            <html lang="en" />
          </Helmet>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
