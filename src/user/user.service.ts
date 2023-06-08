import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: mongoose.Model<User>,
  ) {}

  async findAll(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }

  async finById(id: string): Promise<User> {
    const isValidId = mongoose.isValidObjectId(id);

    if (!isValidId) {
      throw new BadRequestException('Infome um id válido');
    }

    const user = await this.userModel.findById(id);

    if (!user) {
      throw new NotFoundException('Usuário não encontrado.');
    }

    return user;
  }

  async create(user: User): Promise<User> {
    const res = await this.userModel.create(user);
    return res;
  }

  async updateById(id: string, userData: User): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, userData, {
      new: true,
      runValidators: true,
    });
  }

  async delete(id: string): Promise<User> {
    return await this.userModel.findByIdAndDelete(id);
  }
}
