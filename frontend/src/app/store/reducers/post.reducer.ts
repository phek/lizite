import * as PostActions from '../actions/post.actions'
import { Post } from '../../models/post.model'

export interface PostState {
  posts: Post[]
}

const initialState: PostState = {
  posts: []
}

export function postReducer(state: PostState = initialState, action) {
  switch (action.type) {
    case PostActions.EDIT_TEXT:
      return {
        ...state
      }
    case PostActions.UPVOTE:
      return {
        ...state
      }
    case PostActions.DOWNVOTE:
      return {
        ...state
      }
    default:
      return state
  }
}
