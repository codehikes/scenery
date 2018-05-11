const menu = require('./src/menu')
const services = require('./src/services')
const portfolios = require('./src/portfolios')

module.exports = {
  theme: 'startbootstrap',
  meta: {
    name: 'Scenery',
    description: 'Simple Landing page for your portfolio',
    address: 'Jakarta',
    address2: 'Indonesia',
    contact: '021 007007',
    menu: menu,
    services: services,
    portfolio: portfolios,
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
