import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post } from '../shared/interface/post.interface';
import { PostsService } from '../shared/services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  showPosts = true;
  keyword: string | undefined;

  constructor(private postsService: PostsService, private route: ActivatedRoute) {
    this.route.params.subscribe(() => {
      this.getPosts();
    })

  }

  ngOnInit(): void {}

  getPosts() {
    this.keyword = this.route.snapshot.paramMap.get('keyword')?.replace('-', ' ');
    
    if(this.keyword) {
      this.postsService.searchPost(this.keyword).subscribe((res) => {
        this.posts = res;
      });

    } else {
      this.postsService.getPosts().subscribe((res) => {
        this.posts = res;
      });
    }
  }
}
