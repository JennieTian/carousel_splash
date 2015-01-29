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
    var LightBody = require('views/LightBody');
    var DarkBody = require('views/DarkBody');

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
        size: [window.innerWidth, window.innerHeight *.7],
        origin: [.5,1],
        align: [.5,1]
    });
    mainContext.add(darkBodyMod).add(darkBody);

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

    animate();
    debug.call(this);

    function animate() {
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
        logoMod.setSize([window.innerWidth *.2, window.innerWidth *.2], {
            duration: 600,
            curve: Easing.outBounce
        }, function() {
            logoMod.setAlign([.5,.9],{
                duration: 800,
                curve: Easing.outBounce
            })
        });
        darkBodyMod.setAlign([.5,.99]);
        darkBodyMod.setSize([window.innerWidth *.96, window.innerHeight *.9], {
            duration: 600,
            curve: Easing.outBounce
        }, function() {

        });
    }

    function debug() {
        window.logo = logo;
    }
});