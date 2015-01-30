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

    LightBody.prototype.showFinalTitle = function() {
        this.appTitleMod.setAlign([.5,.055], {
            duration: 600,
            curve: Easing.outBounce
        });
        this.appTitleMod.setTransform(Transform.scale(.7,.7, 1), {
            duration: 600,
            curve: Easing.outBounce
        });
    };

    function _createLightBody() {
        this.background = new Surface({
            properties: {
                background: theme.darkColor
            }
        });
        this.add(this.background);

        this.appTitle = new Surface({
            content: "Carousel",
            properties: {
                fontSize: window.innerWidth *.12+'px',
                fontFamily: 'Marko One',
                textAlign: 'center',
                color: theme.darkColor
            }
        });
        this.appTitleMod = new Modifier({
            size: [window.innerWidth, window.innerWidth *.2],
            origin: [.5, .5],
            align: [.5, .25],
            transform: Transform.identity
        });

        this.add(this.appTitleMod).add(this.appTitle);
    }

    module.exports = LightBody;
});
