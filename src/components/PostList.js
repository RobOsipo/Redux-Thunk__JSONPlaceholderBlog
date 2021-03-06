import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index.js';
import UserHeader from './UserHeader.js';


class PostList extends React.Component {

    componentDidMount() {
        this.props.fetchPosts()
    }


    renderList() {
        return this.props.posts.map((post) => {
            // console.log(post.userId)
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId} />
                    </div>
                </div>
            )
        })
    }


    render() {
        
        return (
            <div className='ui relaxed divided list'>{this.renderList()}</div>
        )
    }
}

function mapStateToProps(state) {
    return { posts: state.posts}
}

export default connect(mapStateToProps, {fetchPosts: fetchPosts})(PostList);