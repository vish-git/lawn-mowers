import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }
}
