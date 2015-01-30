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
    var logo = new Logo();
    mainContext.add(logo);

});
