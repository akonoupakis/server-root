var path = require('path');
var currentPath = null;

module.exports = {
    mapPath: function (paths) {
        if(currentPath !== null)
            return path.join(currentPath, paths);

        var dir = __dirname;
        if (dir.indexOf('node_modules') !== -1)
            dir = dir.substring(0, dir.indexOf('node_modules'));

        currentPath = dir;

        return path.join(dir, paths);
    }
};