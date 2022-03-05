import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Post } from '../models/post.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  getAllPostUrl: string;
  getPostDetailsUrl: string;
  constructor(private httpClient:HttpClient) {
    this.getAllPostUrl = "https://jsonplaceholder.typicode.com/photos";
    this.getPostDetailsUrl = "https://jsonplaceholder.typicode.com/posts/";
  }

  getAllPost(): Observable<Post[]>{
    return this.httpClient.get<Post[]>(this.getAllPostUrl);
  }
}
