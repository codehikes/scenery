'use strict'
const menu = require('./src/scenery/menu')
const pages = require('./src/scenery/pages')

module.exports = {
  theme: 'startbootstrap',
  meta: {
    name: 'Scenery',
    description: 'Simple Landing page for your portfolio',
    address: 'Jakarta',
    address2: 'Indonesia',
    contact: '021 007007',
    email: 'rori.development@gmail.com',
    menu: menu,
    pages: pages,
    socialMedia: {
      facebook: '#',
      twitter: '#',
      linkedin: '#'
    }
  },
  custom: {
    // your custom config
  },
};
