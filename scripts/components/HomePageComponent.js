var React = require('react');

var BlogPostModel = require('../models/BlogPostModel.js');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			posts: []
		};
	},
	componentWillMount: function() {
		var query = new Parse.Query(BlogPostModel);
		query.find().then(
			(posts) => {
				this.setState({posts: posts});
			},
			(err) => {
				console.log(err)
			}
		);
	},
	render: function() {
		var postElement = this.state.posts.map(function(post) {
			return (<div key={post.id}>
						<div>{post.get('title')}</div>
						<div>{post.get('author')}</div>
						<div>{post.get('newPost')}</div>
					</div>);
		});
		return (
			<div className="homePageContainer">
				<div className="test">{postElement}</div>
			</div>
		);
	}
});
