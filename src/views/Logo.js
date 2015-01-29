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

    var angle = 0;
    var angleTransitionable = new Transitionable(angle);

    function Logo() {
        View.apply(this, arguments);
        _createLogo.call(this);
    }

    Logo.prototype = Object.create(View.prototype);
    Logo.prototype.constructor = Logo;

    Logo.prototype.next = function() {
        angle = angle+2*Math.PI/30;
        angleTransitionable.set(angle, {
            duration: 1000,
            curve: Easing.inOutBounce
        }, function(){

        }.bind(this));
        soundEffect.slide.play();
    };

    Logo.prototype.prev = function() {
        angle = angle-2*Math.PI/30;
        angleTransitionable.set(angle, {
            duration: 1000,
            curve: Easing.inOutBounce
        }, function(){

        }.bind(this));
        soundEffect.slide.play();
    }

    function _createLogo() {
        var logoBackground = new ImageSurface({
            content: 'assets/imgs/logo/logo_bg.png'
        });
        var slides = new ImageSurface({
            content: 'assets/imgs/logo/logo_fg.png'
        });
        var slidesMod = new Modifier({
            origin: [.5,.5],
            align: [.5,.5],
            transform: function() {
                return Transform.rotateZ(angleTransitionable.get());
            }
        });
        this.add(logoBackground);
        this.add(slidesMod).add(slides);
        slides.pipe(this._eventOutput);
    }

    module.exports = Logo;
});
