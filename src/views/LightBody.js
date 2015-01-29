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

    var appTitle;
    appTitle = new Surface({
        content: "Carousel",
        size: [368, 342],
        properties: {
            textAlign: 'center',
            textColor: 'rgb(247, 147, 30)',
            origin: [.5,.5],
            align: [.5,.25]
        }
    });

    function LightBody() {
        View.apply(this, arguments);
        _createLightBody.call(this);
    }

    LightBody.prototype = Object.create(View.prototype);
    LightBody.prototype.constructor = LightBody;

    LightBody.prototype.next = function() {
        this.background.setProperties({background: theme.darkColor});
        setTimeout(function(){
            this.background.setProperties({background: theme.lightColor});
        }.bind(this), 800);
    };

    LightBody.prototype.showTitle = function() {

    };

    LightBody.prototype.showFinalTitle = function() {

    };



    appTitle.prototype = Object.create(View.prototype);
    appTitle.prototype.constructor = appTitle;

    appTitle.prototype.next = function() {
        this.background.setProperties({background: theme.darkColor});
        setTimeout(function(){
            this.background.setProperties({background: theme.lightColor});
        }.bind(this), 800);
    };

    appTitle.prototype.showTitle = function() {

    };

    appTitle.prototype.showFinalTitle = function() {

    };



    function _createLightBody() {
        this.background = new Surface({
            properties: {
                background: theme.darkColor
            }
        });
        this.add(this.background);
    }

    module.exports = LightBody;
});
