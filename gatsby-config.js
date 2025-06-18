module.exports = {
  siteMetadata: {
    siteUrl: 'https://monumental-chimera-b1ace3.netlify.app/',
    name: 'Daniel McCormack',
    title: 'Daniel McCormack | Engineering Leader',
    description: "Let's build something awesome.",
    linkedin: 'https://www.linkedin.com/in/daniel-j-mccormack/',
    github: 'https://github.com/danielmccormack',
    about: 'Transformational technology leader with a proven record of building and scaling world-class engineering organizations and product platforms across healthcare, e-commerce, biotech, and government.',
    projects: [
      {
        name: 'Podimetrics',
        description: 'AI diabetic foot care, medical IoT, internal clinical and ops platforms',
        link: 'https://www.podimetrics.com/',
      },
      {
        name: 'BrainSpec Core',
        description: 'FDA-cleared ML neuroimaging platform deployed to hospitals and researchers',
        link: 'https://brainspec.com/',
      },
      {
        name: 'EcoCart',
        description: 'Shopify climate impact app, enterprise API, CV/NLP ML stack',
        link: 'https://www.ecocart.io/',
      },
      {
        name: 'MXTR',
        description: 'CRM and multichannel marketing automation used by national brands',
        link: 'https://www.mxtrautomation.com/',
      },
      {
        name: 'BluCloud',
        description: 'Industrial IoT platform with ruggedized environmental sensors',
        link: 'https://example.com/blucloud',
      },
      {
        name: 'WeTrek',
        description: 'Travel SaaS with ultra-fast, mobile-first UX and ticketing engine',
        link: 'https://example.com/wetrek',
      },
    ],
    experience: [
      {
        name: 'Podimetrics, Inc.',
        description: 'Interim CIO / Head of Technology, 2024–2025',
        link: 'https://www.podimetrics.com/',
      },
      {
        name: 'BrainSpec, Inc.',
        description: 'Technology & Operations Consultant, 2023–2024',
        link: 'https://brainspec.com/',
      },
      {
        name: 'EcoCart',
        description: 'Director of Engineering, 2021–2023',
        link: 'https://www.ecocart.io/',
      },
      {
        name: 'MXTR Automation',
        description: 'Director of Engineering, 2020–2021',
        link: 'https://www.mxtrautomation.com/',
      },
      {
        name: 'Gritstone Oncology',
        description: 'Lead Special Project Engineer, 2019–2020',
        link: 'https://www.gritstonebio.com/',
      },
      {
        name: 'BluCloud',
        description: 'Co-Founder & CTO, 2017–2019',
        link: 'https://example.com/blucloud',
      },
      {
        name: 'BrainSpec',
        description: 'Founding CTO, 2014–2017',
        link: 'https://brainspec.com/',
      },
    ],
    skills: [
      {
        name: 'Languages & Frameworks',
        description: 'JavaScript (ES6+), Golang, Node.js, Express.js, React, Ruby on Rails, PHP',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostgreSQL, MySQL',
      },
      {
        name: 'Other',
        description: 'Docker, AWS, GCP, Azure, CI/CD, Microservices, API design, Agile/Scrum, FDA, HIPAA, GDPR',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
              wrapperStyle: 'margin: 0 0 30px;',
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          formats: ['auto', 'webp'],
          placeholder: 'dominantColor',
          quality: 80,
        },
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-feed',
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
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.edges.map(edge => ({
                ...edge.node.frontmatter,
                description: edge.node.excerpt,
                date: edge.node.frontmatter.date,
                url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                custom_elements: [{ 'content:encoded': edge.node.html }],
              })),
            query: `
              {
                allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
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
            title: "Daniel McCormack's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'ADD YOUR TRACKING ID HERE',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'devfolio',
        short_name: 'devfolio',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },
  ],
};
