import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Post } from '../interface/post.interface';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  // posts: Post[] = [
  //   {
  //     id: '1',
  //     title: 'Felicidade',
  //     category: 'Poesias',
  //     likes: 123,
  //     created: 'abr-2000',
  //     texts: ['Num dia que bem não lembro', 'Não sei se janeiro ou setembro...'],
  //     tags: ['#esculturas', '#poesianaopodefaltar']

  //   },
  //   {
  //     id: '2',
  //     title: 'Nosso segundo Post',
  //     category: 'Músicas',
  //     likes: 304
  //   },
  //   {
  //     id: '3',
  //     title: 'Nosso terceiro Post',
  //     category: 'Pinturas',
  //     likes: 75
  //   }
  // ]

  constructor(private http: HttpClient) { }

  getPosts() {
    //return this.posts;
    return this.http.get<Post[]>(`${environment.backendApi}/user/1/post`);
  }

  getPostById(postId: string | null) {
    //return this.posts.find(post => post.id === postId);
    return this.http.get<Post>(`${environment.backendApi}/user/1/post/${postId}`);
  }

  searchPost(search: string) {
    return this.http.get<Post[]>(`${environment.backendApi}/user/1/post?search=${search}`);

  }

}
