import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get('/:id')
  async getUser(@Param('id') id: string): Promise<User> {
    return this.userService.finById(id);
  }

  @Post()
  async setUser(@Body() userData: CreateUserDto): Promise<User> {
    return this.userService.create(userData);
  }

  @Put('/:id')
  async updateUser(
    @Param('id')
    id: string,
    @Body()
    userData: UpdateUserDto,
  ): Promise<User> {
    return this.userService.updateById(id, userData);
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    return this.userService.delete(id);
  }
}
