import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Config } from '@/config';
import { UserSchema } from './user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Config.USER_MODEL, schema: UserSchema }])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
