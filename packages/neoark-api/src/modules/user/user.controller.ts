import { Controller, Get, Post, Body } from '@nestjs/common';

import { UserService } from './user.service';
import { User } from './user.interface';
import { UserDTO } from './user.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post()
  create(@Body() user: UserDTO): Promise<User> {
    return this.userService.create(user);
  }
}
