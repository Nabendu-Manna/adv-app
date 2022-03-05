import { Post } from "src/app/models/post.model";

export class GetAllPost {
  static readonly type = '[Post] GetAll';

  // constructor(public payload:Post){}
}

export class GetPost {
  static readonly type = '[Post] Get';

  constructor(public payload: number){}
}
