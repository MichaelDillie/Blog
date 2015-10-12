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
var LoginPageComponent = require('./components/LoginPageComponent.js');
var SignupPageComponent = require('./components/SignupPageComponent.js');
//**********HTML ID's**********
var Nav = document.getElementById('nav');
var Footer = document.getElementById('footer');
var Main = document.getElementById('main');


var Router = Backbone.Router.extend({

	routes: {
		'': 'home',
		'Home':'home',
		'AddPost': 'addPost',
		'Login': 'onLogin',
		'Signup': 'onSignup'
	},
	home: function() {
		React.render (
			<HomePageComponent router={r}/>,
			Main
		);
	},
	addPost: function() {
		React.render (
			<AddPostPageComponent router={r}/>,
			Main
		);
	},
	onLogin: function() {
		React.render (
			<LoginPageComponent router={r}/>,
			Main
		);
	},
	onSignup: function() {
		React.render (
			<SignupPageComponent router={r}/>,
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
