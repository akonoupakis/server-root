var path = require('path');

module.exports = {
    root: null,
        
    mapPath: function (paths) {
        if(this.root !== null)
            return path.join(this.root, paths);

        var dir = __dirname;
        if (dir.indexOf('node_modules') !== -1)
            dir = dir.substring(0, dir.indexOf('node_modules'));

        this.root = dir;

        return path.join(dir, paths);
    }
};