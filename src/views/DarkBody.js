define(function(require, exports, module) {
    var View            = require('famous/core/View');
    var Surface         = require('famous/core/Surface');
    var ImageSurface    = require('famous/surfaces/ImageSurface');
    var Modifier        = require('famous/core/Modifier');
    var Transform       = require('famous/core/Transform');
    var StateModifier   = require('famous/modifiers/StateModifier');
    var Easing          = require('famous/transitions/Easing');
    var Transitionable  = require('famous/transitions/Transitionable');
    var Engine          = require('famous/core/Engine');
    var soundEffect     = require('SoundEffect');
    var theme           = require('Theme');

    function DarkBody() {
        View.apply(this, arguments);
        _createDarkBody.call(this);
    }

    DarkBody.prototype = Object.create(View.prototype);
    DarkBody.prototype.constructor = DarkBody;

    function _createDarkBody() {
        var background = new Surface({
            properties: {
                background: theme.darkColor
            }
        });
        this.add(background);
    }

    module.exports = DarkBody;
});
