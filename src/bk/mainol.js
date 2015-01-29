define(function(require, exports, module) {

	var Engine = require('famous/core/Engine');
	var Surface = require('famous/core/Surface');
	var Transform = require('famous/core/Transform');
	var StateModifier = require('famous/modifiers/StateModifier');
	var Transitionable = require('famous/transitions/Transitionable');
	var ImageSurface = require('famous/surfaces/ImageSurface');
    var Modifier = require('famous/core/Modifier');
    var Lightbox = require('famous/views/Lightbox');
    var Easing = require('famous/transitions/Easing');
    var Logo = require('views/Logo');

	var mainContext = Engine.createContext();

    var splashScreen = new SplashScreenView();
    var appLightbox = new Lightbox({
        inOpacity: 1,
        showOpacity: 1,
        outOpacity: 1,
        inTransform: Transform.identity,
        showTransform: Transform.translate(0,0,1),
        outTransform: Transform.translate(0,500,1),
        overlap: false
    });
    mainContext.add(appLightbox);
    appLightbox.show(splashScreen, {
        duration: 0
    });
    splashScreen.play(function() {
        appLightbox.hide({
            curve: Easing.inBack,
            duration: 800
        });
    }.bind(this));

});
