module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "yoyo",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "",
        dataset: "",
      },
    },
  ],
};
