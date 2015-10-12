var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="loginContainer">
				<input type="text" className="textInput" placeholder="Email" />
				<input type="password" className="textInput" placeholder="Password"  />
				<button className="loginBtn">LogIn</button>
				<div className="signUp">Not a user? Sign up now, its free</div>
				<a href="#Signup">
					<button className="signupBtn">SignUp</button>
				</a>
			</div>
		)
	}
});
