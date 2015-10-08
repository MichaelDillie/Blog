'use strict';

var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('backbone/node_modules/underscore')
window.$ = $;
window.jQuery = $;

Parse.initialize('rtFqJShVSwzz4iKOoXHCdFmbhKNbq3IABeW6fJdB', 'nioCucgyW1qr5BDvxcycrcu5A7GoMWAaUZaGCpVA');
//**********Components**********
var NavComponent = require('./components/NavComponent.js');
var FooterComponent = require('./components/FooterComponent.js');
var MainComponent = require('./components/MainComponent.js');
var AddPostPageComponent = require('./components/AddPostPageComponent.js');
var HomePageComponent = require('./components/HomePageComponent.js');
//**********HTML ID's**********
var Nav = document.getElementById('nav');
var Footer = document.getElementById('footer');
var Main = document.getElementById('main');


var Router = Backbone.Router.extend({

	routes: {
		'':'home',
		'AddPost': 'addPost'
	},
	home: function() {
		React.render (
			<HomePageComponent />,
			main
		);
	},
	addPost: function() {
		React.render (
			<AddPostPageComponent />,
			Main
		);
	}
});

var r = new Router();
Backbone.history.start();


React.render (
	<NavComponent router={r} />,
	Nav
);

React.render (
	<FooterComponent router={r} />,
	Footer
);
