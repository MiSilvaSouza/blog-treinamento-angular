import { Injectable } from '@angular/core';

import { Post } from '../interface/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

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

  constructor() { }

  getPosts() {
    return this.posts;
  }

  getPostById(postId: string | null): Post | undefined {
    return this.posts.find(post => post.id === postId);
  }

}
