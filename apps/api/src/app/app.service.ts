import { Injectable } from '@nestjs/common';
import { PostMetaData, PostDetail } from '@nx-cms/model';

@Injectable()
export class AppService {
  posts: PostDetail[] = [
    {
      id: 1,
      title: 'テスト投稿1',
      published: new Date('2020-02-23T08:55:28.087Z'),
      tags: ['Nx', 'Angular'],
      article: ['皆さんこんにちは。', 'これはテスト投稿です。']
    },
    {
      id: 2,
      title: 'テスト投稿2',
      published: new Date('2020-02-23T08:55:28.087Z'),
      tags: ['Nx', 'Angular'],
      article: ['皆さんこんにちは。', 'これはテスト投稿です。']
    }
  ];

  getPosts(): PostMetaData[] {
    const postMetaDatas: PostMetaData[] = [];
    this.posts.forEach((post: PostDetail) => {
      postMetaDatas.push({
        id: post.id,
        title: post.title,
        published: post.published
      });
    });
    return this.posts;
  }
}
