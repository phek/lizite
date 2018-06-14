import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import * as PostActions from '../../store/actions/post.actions'
import { AppState } from '../../store/reducers'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private store: Store<AppState>) {
  }

  addPost(text) {
    this.store.dispatch({
      type: PostActions.EDIT_TEXT,
      payload: text
    })
  }

  upVote() {
    this.store.dispatch({
      type: PostActions.UPVOTE
    })
  }

  downVote() {
    this.store.dispatch({
      type: PostActions.DOWNVOTE
    })
  }

  getPostState() {
    return this.store.select('post')
  }
}
