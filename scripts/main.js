'use strict';

var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('backbone/node_modules/underscore')
window.$ = $;
window.jQuery = $;

Parse.initialize('rtFqJShVSwzz4iKOoXHCdFmbhKNbq3IABeW6fJdB', 'nioCucgyW1qr5BDvxcycrcu5A7GoMWAaUZaGCpVA');

var NavComponent = require('./components/NavComponent.js');

var Nav = document.getElementById('nav');

React.render (
	<div>
		<NavComponent />
	</div>,
	Nav
)
