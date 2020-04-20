export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e9e147fd4931f2c4d9f1881',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-zeppxqfy',
                  apiId: 'e2560c46-14a8-4f91-bf1c-87f9c9380099'
                },
                {
                  buildHookId: '5e9e147fb9f992e5799f4b23',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-g8fini3w',
                  apiId: 'e47cc281-8612-488b-b246-161a4675b16b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mariajcb/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-g8fini3w.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
