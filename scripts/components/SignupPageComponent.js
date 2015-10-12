var React = require('react');
var Backbone = require('backbone');

var UserModel = require('../models/UserModel.js');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="signupContainer">
				<form onSubmit={this.onSignup}>
					<input type="text" className="textInput" ref="email" placeholder="Email" />
					<input type="password" className="textInput" ref="password" placeholder="Password"  />
					<input type="password" className="textInput" placeholder="Retype Password"  />
					<button type="submit" className="signupBtn">SignUp</button>
				</form>
			</div>
		);
	},
	onSignup: function(e) {
		e.preventDefault();

		var user = new Parse.User();
		user.signUp(
			{
				username: this.refs.email.value,
				password: this.refs.password.value
			},
			{
				success: (user) => {
					this.props.router.navigate('AddPost', {trigger: true});
				},
				error: (user, err) => {
					this.setState({
						error: error.message
					});
				}
			}
		);
	}
});
