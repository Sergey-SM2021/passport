import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('/')
export class AppController {
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  username(@Request() req) {
    return req.user;
  }
}
