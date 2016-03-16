var assert = require('assert');
var path = require('path');
var server = require('../index.js');

describe('mapPath', function () {
    
    it('should return full path to "folder/file.txt"', function () {
        assert.equal(server.mapPath('folder/file.txt'), path.join(server.root, 'folder/file.txt'));
    });
    
    it('should return full path to "./folder/file.txt"', function () {
        assert.equal(server.mapPath('./folder/file.txt'), path.join(server.root, 'folder/file.txt'));
    });
    
    it('should return full path to "../folder/file.txt"', function () {
        assert.equal(server.mapPath('../folder/file.txt'), path.join(server.root, '../folder/file.txt'));
    });
    
});