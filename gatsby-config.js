module.exports = {
  siteMetadata: {
    siteUrl: `https://monumental-chimera-b1ace3.netlify.app/`,
    name: 'Daniel McCormack',
    title: `Daniel McCormack | Engineering Leader`,
    description: `Transformational product & engineering executive building platforms, teams, and AI-enabled products from zero to scale.`,
    linkedin: `https://www.linkedin.com/in/daniel-j-mccormack/`,
    about: `I build world-class products and engineering organizations across healthcare, e-commerce, biotech, and government. From FDA-cleared medical devices to 100M+ scale consumer systems, I align technology strategy with business outcomes.`,
    projects: [
      {
        name: 'Podimetrics',
        description:
          'AI-driven diabetic foot care platform combining FDA-regulated medical IoT, LLM-based workflows, and internal clinical tools.',
      },
      {
        name: 'EcoCart',
        description:
          'Climate impact platform with API ecosystem and Shopify integration used by Walmart and Saks; acquired by Frate Returns.',
      },
      {
        name: 'BrainSpec',
        description:
          'FDA-cleared neuroimaging ML pipeline deployed at top medical institutions; built HIPAA-compliant systems and models.',
      },
    ],
    experience: [
      {
        name: 'Podimetrics',
        description: 'Interim CIO / Head of Technology, 2024–2025',
      },
      {
        name: 'BrainSpec',
        description: 'Technology & Operations Consultant, 2023–2024',
      },
      {
        name: 'EcoCart',
        description: 'Director of Engineering, 2021–2023',
      },
      {
        name: 'MXTR Automation',
        description: 'Director of Engineering, 2020–2021',
      },
      {
        name: 'Gritstone Oncology',
        description: 'Lead Special Project Engineer, 2019–2020',
      },
      {
        name: 'BluCloud',
        description: 'Co-Founder & CTO, 2017–2019',
      },
      {
        name: 'BrainSpec',
        description: 'Founding CTO, 2014–2017',
      },
    ],
    skills: [
      {
        name: 'Leadership & Strategy',
        description:
          'Org design, product & engineering management, technical due diligence, roadmap alignment, M&A support.',
      },
      {
        name: 'Cloud & Infrastructure',
        description:
          'AWS, GCP, Azure, DynamoDB, containerization, distributed systems, DevOps culture.',
      },
      {
        name: 'AI, ML, & Healthcare',
        description:
          'Clinical ML pipelines, LLM integration, FDA 510(k), HIPAA compliance, MedTech innovation.',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 80,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { frontmatter: { date: DESC } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Your Site's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
