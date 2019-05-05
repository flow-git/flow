// next.config.js
const withImages = require('next-images')
module.exports = withImages({
    exportPathMap: function() {
        return {
          '/': { page: '/' },
          '/Data': {page: '/Data'}
        }
      }
})