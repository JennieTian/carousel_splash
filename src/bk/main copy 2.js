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
		content: 'https://raw.githubusercontent.com/demobo/design/df5edd0f5a58f2bf42d850826dc8d450ab64724a/carousel/Carousel%20Logo%20Version%201%20Layers/Carousel%20Logo%20Version%201%20Layer%201-01.png',

	});


	var angleTransitionable = new Transitionable(0);

	var modifier = new Modifier({
		origin: [0.5, 0.5],
		align: [0.5, 0.5],
	})

	var centerNode = mainContext.add(modifier);
	centerNode.add(logoBackground);

    var slidesMod = new Modifier({
        origin: [0.5, 0.5],
        align: [0.5, 0.5],
        transform: function() {
            return Transform.rotateZ(angleTransitionable.get());
        }
    });
    var slidesNode = centerNode.add(slidesMod);
    var slides = [];
    for (var i = 0; i<30; i++) {
        var sModifier = new StateModifier({
            transform: Transform.translate(0, -150, 0)
        });
        var rModifier = new StateModifier({
            transform: Transform.rotateZ(i*2*Math.PI/30)
        });
        var s = new Surface({
            size: [7, 80]
        });
        slides.push(s);
        slidesNode.add(rModifier).add(sModifier).add(s);
    }
    var counter = 0;
    colorSlides();
	Engine.on('click', function(){
        counter++;
		var angle = counter*2*Math.PI/30;
		angleTransitionable.set(angle, {
			duration: 1000,
			curve: Easing.inOutBounce
		});
        colorSlides();
	}.bind(this));

    function colorSlides() {
        for (var i = 0; i<30; i++) {
            if (i<(5-counter) || i>(10-counter)) {
                slides[i].setProperties({
                    backgroundColor: 'orange'
                });
            } else {
                slides[i].setProperties({
                    backgroundColor: 'white'
                });
            }
        }
    }
});
