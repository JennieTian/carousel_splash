define(function(require, exports, module) {

    //
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
    var CameraButton = require('views/CameraButton');
    var TextButton = require('views/TextButton');
    var LightBody = require('views/LightBody');
    var DarkBody = require('views/DarkBody');
    var soundEffect = require('SoundEffect');

	var mainContext = Engine.createContext();

    var lightBody = new LightBody();
    var lightBodyMod = new Modifier({
        size: [window.innerWidth, window.innerHeight],
        origin: [.5,1],
        align: [.5,1]
    });
    mainContext.add(lightBodyMod).add(lightBody);

    var darkBody = new DarkBody();
    var darkBodyMod = new Modifier({
        size: [window.innerWidth, window.innerHeight *.5],
        origin: [.5,1],
        align: [.5,1]
    });
    mainContext.add(darkBodyMod).add(darkBody);

    var cameraButton = new CameraButton();
    mainContext.add(cameraButton);

    var textButton = new TextButton();
    mainContext.add(textButton);

    var logo = new Logo();
    var logoMod = new Modifier({
        size: [window.innerWidth *.3, window.innerWidth *.3],
        origin: [.5,.5],
        align: [.5,.5]
    });
    mainContext.add(logoMod).add(logo);
    logo.on('click', function() {
        logo.next();
        animateApp();
    }.bind(this));

    logo.on('click', function() {
        logo.next();
        animateApp();
        window.location.reload()
    }.bind(this));

    animate();
    debug.call(this);

    function animate() {
        soundEffect.fan.play();
        animateCarousel();
    }

    function animateCarousel() {
        setTimeout(function(){
           logo.next();
           lightBody.next();
        },500);
        setTimeout(function(){
            logo.next();
            lightBody.next();
        },2500);
        setTimeout(function(){
            logo.prev();
            lightBody.next();
        },4500);
        setTimeout(function(){
            animateApp();
        },6000);
    }

    function animateApp() {

            setTimeout(function(){
                cameraButton.showFinalPosition();
                textButton.showFinalPosition();
            },400);

        logoMod.setSize([window.innerWidth *.2, window.innerWidth *.2], {
            duration: 600,
            curve: Easing.outBounce
        }, function() {
            //logoMod.setAlign([.5,.9],{
            //    duration: 800,
            //    curve: Easing.outBounce
            //});

        });
        logoMod.setAlign([.5,.9],{
            duration: 800,
            curve: Easing.outBounce
        }, function() {
            cameraButton.showFinalPosition();
            textButton.showFinalPosition();
        });


        darkBodyMod.setAlign([.5,.99]);
        darkBodyMod.setSize([window.innerWidth *.96, window.innerHeight *.9], {
            duration: 600,
            curve: Easing.outBounce
        }, function() {
            soundEffect.fan.stop();
        });
        lightBody.showFinalTitle();
    }

    function debug() {
        window.logo = logo;
    }
});
