var React = require('react');
// var Backbone = require('backbone');
// var $ = require('jquery');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="navContainer">

				<a href="#Home">
					<div className="webName">BC</div>
				</a>

				<a href="#AddPost">
					<div className="addPostLink">Add A Post</div>
				</a>

				<a href="#Login">
					<div className="login">LogIn</div>
				</a>

			</div>
		);
	}
});
