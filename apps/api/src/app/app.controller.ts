import { Controller, Get, Param } from '@nestjs/common';

import { AppService } from './app.service';

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
}
