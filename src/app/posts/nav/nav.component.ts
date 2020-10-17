import { PostsService } from './../posts.service';
import { from } from 'rxjs';
import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class navcomponent {
  enteredContent ="";
  enteredTitle = "";


  constructor (public PostsService: PostsService) {}
  onAddNav(from: NgForm) {

this.PostsService.addPost(form.value.title, form.value.content);
  }
}
