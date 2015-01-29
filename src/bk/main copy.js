define(function(require, exports, module) {

	var Engine = require('famous/core/Engine');
	var Surface = require('famous/core/Surface');
	var Transform = require('famous/core/Transform');
	var StateModifier = require('famous/modifiers/StateModifier');
	var Transitionable = require('famous/transitions/Transitionable');
	var ImageSurface = require('famous/surfaces/ImageSurface');
    var Modifier = require('famous/core/Modifier');
    var Easing = require('famous/transitions/Easing')
	var mainContext = Engine.createContext();

	var logoBackground = new ImageSurface({
		size: [512, 512],
		content: 'assets/imgs/logo/logo_bg.png'
	});

	var slides = new ImageSurface({
		size: [512, 512],
		content: 'assets/imgs/logo/logo_fg.png'
	});

	var angle = 0;
	var angleTransitionable = new Transitionable(angle);
	var slidesMod = new Modifier({
		origin: [0.5, 0.5],
		align: [0.5, 0.5],
		transform: function() {
			return Transform.rotateZ(angleTransitionable.get());
		}
	});

	var modifier = new Modifier({
		origin: [0.5, 0.5],
		align: [0.5, 0.5]
	})

	var centerNode = mainContext.add(modifier);
	centerNode.add(logoBackground);
	centerNode.add(slidesMod).add(slides);

	Engine.on('click', function(){
		angle = angle+2*Math.PI/30;
		angleTransitionable.set(angle, {
			duration: 1000,
			curve: Easing.inOutBounce
		});
	}.bind(this));


});
