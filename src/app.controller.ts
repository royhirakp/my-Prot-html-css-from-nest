import { Body, ConsoleLogger, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async fromSubmit(@Body() formData: any): Promise<any> {
    console.log(formData);
    return this.appService.fromSubmit(formData);
  }
}
