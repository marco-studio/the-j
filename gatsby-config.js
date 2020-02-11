module.exports = {
  siteMetadata: {
    title: `The J Experiment`,
    description: `A collection of intriguing tales`,
    author: `Julianne Anderson`,
    twitter: `https://www.twitter.com`,
    instagram: `https://www.instagram.com/jules_ando1/`,
    facebook: ``,
    youtube: ``,
    apple: `https://podcasts.apple.com/us/podcast/feed/id1498119632?at=11lo6V&ct=podnews_podcast`,
    stitcher: ``,
    google: ``,
    pocket: `http://pca.st/itunes/1498119632`,
    spotify: `https://open.spotify.com/show/3XPOAKHQwBEFtt93HMaRx1`,
    overcast: `https://overcast.fm/itunes1498119632`,
    castbox: `http://castbox.fm/vic/1498119632?ref=podnews`,
    castro: `https://castro.fm/itunes/1498119632`,
    podbean: `https://thejexperiment.podbean.com/`,
    beaker: `https://www.breaker.audio/shows?feed_url=https%3A%2F%2Ffeed.podbean.com%2Fthejexperiment%2Ffeed.xml`,
    player: `https://player.fm/subscribe?id=https://feed.podbean.com/thejexperiment/feed.xml`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `https://pbcdn1.podbean.com/imglogo/image-logo/2144795/26850174_531238480575311_1377019303222901017_o_1_.png`, // This path is relative to the root of the site.
        icon: `src/images/logo.png` // This path is relative to the root of the site.
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        // url: `https://www.gatsbyjs.org/blog/rss.xml`,
        // url: `https://boysinthecave.com/feed/podcast/`,
        // url: `http://boysinthecave.libsyn.com/rss`,
        url: `https://feed.podbean.com/thejexperiment/feed.xml`,
        name: `GatsbyBlog`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        parserOption: {
          customFields: {
            channel: ["title", "image"]
            // item: ["itunes:summary"],
            // item: ["itunes:image", "img"],
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`tailwindcss`)]
      }
    }
  ]
};
