import { Component, OnInit } from '@angular/core';
import { PostDetail } from '@nx-cms/model';

@Component({
  selector: 'nx-cms-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  constructor() {}

  post: PostDetail = {
    id: 1,
    title: 'テスト投稿',
    published: new Date('2020-02-23T08:55:28.087Z'),
    tags: ['Nx', 'Angular'],
    article: ['皆さんこんにちは。', 'これはテスト投稿です。']
  };

  ngOnInit(): void {}
}
