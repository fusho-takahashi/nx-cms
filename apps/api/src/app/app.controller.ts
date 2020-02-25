import {
  Controller,
  Get,
  Param,
  Post,
  HttpCode,
  HttpStatus,
  Body
} from '@nestjs/common';

import { AppService } from './app.service';
import { PostDetail } from '@nx-cms/model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('posts')
  getPosts() {
    return this.appService.getPosts();
  }

  @Get('post/:id')
  getPostDetail(@Param('id') id: string) {
    return this.appService.getPostDetail(parseInt(id, 10));
  }

  @Post('new-post')
  @HttpCode(HttpStatus.ACCEPTED)
  addPost(@Body() post: PostDetail) {
    return this.appService.addPost(post);
  }
}
