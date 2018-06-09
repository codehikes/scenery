'use strict'
const menu = require('./src/scenery/menu')
const templates = require('./src/scenery/templates')

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
    templates: templates,
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
