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

    function TextButton() {
        View.apply(this, arguments);
        _createTextButton.call(this);
    }

    TextButton.prototype = Object.create(View.prototype);
    TextButton.prototype.constructor = TextButton;

    TextButton.prototype.showFinalPosition = function() {
        this.buttonMod.setAlign([.2,.955], {
            duration: 600,
            curve: Easing.outBounce
        });
        this.buttonMod.setTransform(Transform.scale(1,1,1), {
            duration: 600,
            curve: Easing.outBounce
        });
    };
    
    function _createTextButton() {
        this.button = new Surface({
            content: '<div>T</div>',
            properties: {
                fontSize: window.innerWidth *.08+'px',
                textAlign: 'center',
                fontFamily: 'Baskerville',
                fontWeight: 'Bold',
                color: theme.highlightColor
            }

        });
        this.buttonMod = new Modifier({
            size: [window.innerWidth *.2, window.innerWidth *.2],
            origin: [.5,.5],
            align: [.5,.955],
            transform: Transform.scale(0,0,1)
        });
        this.add(this.buttonMod).add(this.button);
        this.button.pipe(this._eventOutput);
    }

    module.exports = TextButton;
});
