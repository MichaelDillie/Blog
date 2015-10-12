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
			return (
					<div className="singalPost">
						<div key={post.id}>
							<div className="title">{post.get('title')}</div>
							<div className="author">{post.get('author')}</div>
							<div className="newPost">{post.get('newPost')}</div>
						</div>
						<a href="#ReadMore">
							<div className="readMoreLink">Read More</div>
						</a>
					</div>
			);
		});
		return (
			<div className="homePageContainer">
				<div className="test">
					{postElement}
				</div>
			</div>
		);
	}
});
