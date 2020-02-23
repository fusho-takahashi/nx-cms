export interface PostMetaData {
  id: number;
  title: string;
  published: Date;
}

export interface PostDetail {
  id: number;
  title: string;
  published: Date;
  tags: string[];
  article: string[];
}
