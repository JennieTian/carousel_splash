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



    function _createLogo() {
        var logoBackground = new ImageSurface({
            content: 'assets/imgs/logo/iPhone.png'
        });


        this.add(logoBackground);
        module.exports = Logo;