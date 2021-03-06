import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post } from '../shared/interface/post.interface';
import { PostsService } from '../shared/services/posts.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {
  postId: string | null;
  post: Post | undefined;
  contentHtml = '<p>testando <b>negrito</b></b></p>';

  constructor(route: ActivatedRoute, postsService: PostsService) {
  this.postId = route.snapshot.paramMap.get('id');
  //this.post = postsService.getPostById(this.postId);
  postsService.getPostById(this.postId).subscribe((res) => {this.post = res});
  }

  ngOnInit(): void {
  }

}
