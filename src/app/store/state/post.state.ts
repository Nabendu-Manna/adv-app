import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Post } from "src/app/models/post.model";
import { PostService } from "src/app/service/post.service";
import { GetAllPost, GetPost } from "../actions/post.action";
import { tap } from "rxjs/operators";
// import { tap } from 'rxjs/operators';
// import { tap } from "rxjs/internal/operators/tap";

export interface PostStateModel {
  post : Post[];
  loaded: boolean;
}

export interface PostDetailsStateModel {
  post : Post;
  loaded: boolean;
}

@State<PostStateModel>({
  name: 'allPost',
  defaults: {
    post : [],
    loaded : false
  }
})

@Injectable()
export class PostState {

  constructor(private postService: PostService){}

  /*
  * Get all post
  */

  @Selector()
  static getAllPost(state: PostStateModel){
    return state.post;
  }

  @Action(GetAllPost)
  getAllPost({getState, setState} : StateContext<PostStateModel>){
    return this.postService.getAllPost().pipe(tap(response => {
      const state = getState();
      setState({
        ...state,
        post: response.slice(0, 10),
        loaded: true
      })
    }))
  }

  @Selector()
  static getPostLoaded(state: PostDetailsStateModel){
    return state.loaded;
  }

  @Selector()
  static getPost(state: PostDetailsStateModel){
    return state.post;
  }


  @Action(GetPost)
  getPost({ getState, setState } : StateContext<PostDetailsStateModel){
    return this.getAllPost.find()
  }
}
