var styleguide = require('component-styleguide'),
    path = require('path');

styleguide({
    components: path.resolve(__dirname, 'components'),
    ext: 'html',
    data: path.resolve(__dirname, 'data'),
    static: path.resolve(__dirname, 'compiled')
});
