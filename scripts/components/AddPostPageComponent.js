var React = require('react');

var BlogPostModel = require('../models/BlogPostModel.js');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="addPostPageContainer">
				<form className="form" onSubmit={this.onPost}>
					<input type="text" className="textInput" ref="title" placeholder="Title" />
					<input type="text" className="textInput" ref="author" placeholder="Author (that's you)" />
					<textArea type="text" className="textArea" ref="newPost" placeholder="Get to bloggin" />
					<button type="submit" className="submitPostBtn">Submit</button>
				</form>
			</div>
		);
	},
	onPost: function(e) {
		e.preventDefault();

		var newBlogPost = new BlogPostModel({
			title: this.refs.title.getDOMNode().value,
			author: this.refs.author.getDOMNode().value,
			newPost: this.refs.newPost.getDOMNode().value
		});

		newBlogPost.save();
	}
});
