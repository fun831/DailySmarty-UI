import {
    SET_RECENT_POSTS
} from '../actions/types'
import { bindActionCreators } from '../../node_modules/redux';

const INIT_STATE = {
    posts: [],
    recentPosts: []
}

export default function(state = INIT_STATE) {
    switch (action.type) {
        case SET_RECENT_POSTS:
        
            return [...state, recentPosts: action.payload]
        default:
            return state;
    }
}