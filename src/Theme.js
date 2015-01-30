define(function(require, exports, module) {
    var loadTheme = _.memoize(function() {
        return {
            lightColor: '#dcdcdc',
            darkColor: '#2c2c2c',
            highlightColor: '#f7931e'
        };
    });
    module.exports = loadTheme();
});