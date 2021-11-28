import { Component, OnInit } from '@angular/core';

import { Post } from '../shared/interface/post.interface';
import { PostsService } from '../shared/services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[];
  showPosts: boolean;

  constructor( postsService: PostsService) {
    this.posts = postsService.getPosts();
    this.showPosts = true;
  }

  ngOnInit(): void {
  }

}
