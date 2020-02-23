import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostMetaData } from '@nx-cms/model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'nx-cms-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}

  readonly posts$ = this.http.get<PostMetaData[]>('/api/posts');

  ngOnInit(): void {}

  goToPost(id: number) {
    this.router.navigate(['post', id]);
  }
}
