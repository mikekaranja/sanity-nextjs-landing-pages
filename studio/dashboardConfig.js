export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '61924eeaac6c772822c14e93',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-aiirim37',
                  apiId: '05929d04-aa49-4bcb-9133-8edeea6556e0'
                },
                {
                  buildHookId: '61924eead1a6938a53c8b420',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-tqe21a3e',
                  apiId: '829d4d40-66ca-40ef-bb50-23dc6f44c027'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mikekaranja/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-tqe21a3e.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
