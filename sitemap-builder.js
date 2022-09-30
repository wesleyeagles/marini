require('babel-register');
 
const router = require('/src/components/Router').default;
const Sitemap = require('../').default;
 
(
    new Sitemap(router)
        .build('https://mariniconstrucoes.com.br')
        .save('./sitemap.xml')
);