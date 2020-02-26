import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';

import { UserController } from '../user.controller';
import { Config } from '@/config';
import { UserService } from '../user.service';
import { userModelMock } from './mocks/user-model.mock';

describe('User Controller', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [UserController],
      providers: [
        UserService,
        {
          provide: getModelToken(Config.USER_MODEL),
          useValue: userModelMock,
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
