import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }
  url = 'https://jsonplaceholder.typicode.com/posts';

  get() {
    return this.http.get(this.url);
  }

  add(post) {
    return this.http.post(this.url, post);
  }

  update(post, updatedPost) {
    return this.http.put(this.url + `/${post.id}`, updatedPost);
  }

  delete(post) {
    return this.http.delete(this.url + `/${post.id}`);
  }
}
