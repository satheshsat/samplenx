import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Post()
  login(@Body() body,){
    if(body.username=='admin'&&body.password=='admin'){
      return {"status": "Login Success"};
    }
    throw new HttpException({
      status: HttpStatus.FORBIDDEN,
      error: 'Invalid credentials',
    }, HttpStatus.FORBIDDEN);
  }
}
