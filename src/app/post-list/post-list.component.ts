import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/interface/post.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  showPosts: boolean;
  posts: Post[] = [
    {
      id: '1',
      title: 'Felicidade',
      category: 'Poesias',
      likes: 123,
      created: 'abr-2000',
      texts: ['Num dia que bem não lembro', 'Não sei se janeiro ou setembro...'],
      tags: ['#esculturas', '#poesianaopodefaltar']

    },
    {
      id: '2',
      title: 'Nosso segundo Post',
      category: 'Músicas',
      likes: 304
    },
    {
      id: '3',
      title: 'Nosso terceiro Post',
      category: 'Pinturas',
      likes: 75
    }
]

  constructor() { 
    this.showPosts = true;
  }

  ngOnInit(): void {
  }

}
