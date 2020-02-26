import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Config } from '@/config';
import { User } from './user.interface';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(Config.USER_MODEL) private readonly userModel: Model<User>) {}

  async create(createUserDTO: UserDTO): Promise<User> {
    const createdUser = new this.userModel(createUserDTO);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.userModel.findOne({ username });
  }
}
