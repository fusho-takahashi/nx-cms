import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostMetaData } from '@nx-cms/model';

@Component({
  selector: 'nx-cms-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  constructor(private router: Router) {}

  posts: PostMetaData[] = [
    {
      id: 1,
      title: 'テスト投稿',
      published: new Date('2020-02-23T08:55:28.087Z')
    }
  ];

  ngOnInit(): void {}

  goToPost(id: number) {
    this.router.navigate(['post', id]);
  }
}
