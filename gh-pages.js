const ghPages = require('gh-pages');

ghPages.publish('dist', {
    dotfiles: true // include the (.nojekyll) file to gh-pages
}, function () {
    console.log('done');
});