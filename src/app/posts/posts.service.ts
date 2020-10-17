import { Subject } from 'rxjs';
import { post } from './nav/list/list.1';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: post[] = [];
private postsUpdated = new Subject<post[]>();
getPosts() {
  return [...this.posts];
}

addPost(title: string, content:string) {
  const post: post = {title: title, content:content};
  this.posts.push(post);
  this.postsUpdated.next([...this.posts]);
}

}
