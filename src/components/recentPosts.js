import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../actions';

class RecentPosts extends Component {

    componentDidMount(){
        this.props.fetchRecentPosts();
    }
    
    render() {
        return (
            <div className="recent-posts">
                <div className='recent-posts__wrapper'>
                    <div className='recent-posts__heading'>Recent Posts</div>
                    <ul className='recent-posts__posts'>
                        <li>post1</li>
                        <li>post2</li>
                        <li>post3</li>
                    </ul>
                </div>
                
            </div>
        );
    }
}
export default connect(null, actions)(RecentPosts);