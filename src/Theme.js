define(function(require, exports, module) {
    var loadTheme = _.memoize(function() {
        return {
            lightColor: '#dcdcdc',
            darkColor: '#2c2c2c'
        };
    });
    module.exports = loadTheme();
});