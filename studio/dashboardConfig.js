export default {
  widgets: [
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
                  buildHookId: '5fce64001d2e21186c0979a7',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-12-7-20-studio',
                  apiId: '4ed01f18-45af-4c4d-a0f2-a6acef4f5747'
                },
                {
                  buildHookId: '5fce64007c3384123eb55efe',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-12-7-20',
                  apiId: 'fb4b1b5b-e431-4c59-a328-2c05429c7ccc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/erinjerri/sanity-kitchen-sink-12-7-20',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-12-7-20.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
