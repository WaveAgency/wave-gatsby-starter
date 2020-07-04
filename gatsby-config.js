const siteTitle = "Wave gatsby starter";
const siteDescription = "Our custom in-house starter";
const siteAuthor = "@jakobrolik";
const siteUrl = "https://google.com";
const siteImage = `${siteUrl}/icons/icon_512x512.png`;
const siteKeywords = ["gatsby", "typescript", "starter", "javascript", "react"];

module.exports = {
  siteMetadata: {
    title: siteTitle,
    description: siteDescription,
    author: siteAuthor,
    url: siteUrl,
    keywords: siteKeywords,
    image: siteImage,
    siteUrl,
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-offline",
    "gatsby-plugin-robots-txt",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            subsets: [`latin`],
            variants: [`400`, `700`, "500", "900", "600"],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/assets/gatsby-icon.png", // This path is relative to the root of the site.
      },
    },
  ],
};
