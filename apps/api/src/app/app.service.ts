import { Injectable } from '@nestjs/common';
import { PostMetaData } from '@nx-cms/model';

@Injectable()
export class AppService {
  posts: PostMetaData[] = [
    {
      id: 1,
      title: 'テスト投稿1',
      published: new Date('2020-02-23T08:55:28.087Z')
    },
    {
      id: 2,
      title: 'テスト投稿2',
      published: new Date('2020-02-23T08:55:28.087Z')
    }
  ];

  getPosts(): PostMetaData[] {
    return this.posts;
  }
}
