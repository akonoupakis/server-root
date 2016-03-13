var path = require('path');

module.exports = {
    mapPath: function (paths) {

        var dir = __dirname;
        if (dir.indexOf('node_modules') !== -1)
            dir = dir.substring(0, dir.indexOf('node_modules'));

        return path.join(dir, paths);
    }
};