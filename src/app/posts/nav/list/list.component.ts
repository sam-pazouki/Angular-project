import { PostsService } from './../../posts.service';
import { Component, Input } from '@angular/core';
import { post } from './list.1';

@Component ({
selector: "app-list",
templateUrl: './list.component.html',
styleUrls: ['./list.component.css']
})
export class listComponent {


 @Input() Posts = []= [];
 PostsService: PostsService;

 constructor( public postsService: PostsService) {}


   } ngOnInit() {
    this.Posts= this.postsService.getPosts();
    this.postService.getPostUpdateListener()
    .subscribe((posts:post[])) => {
      this.posts = posts;
    });



