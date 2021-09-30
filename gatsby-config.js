module.exports = {
  siteMetadata: {
    title: "portfolio-website",
    description: "Portfolio webpage showcasing development knowledge",
    author: "harman"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/assets/images/mandala.svg`,
      }
    },
  ],
};
