import { userReducer } from './user.reducer'
import { postReducer } from './post.reducer'
import { Post } from '../../models/post.model'
import { User } from '../../models/user.model'

export interface AppState {
  posts: Post[],
  user: User
}

export const reducers = {
  posts: postReducer,
  user: userReducer
}
