import { Test, TestingModule } from '@nestjs/testing';
import { JwtModule } from '@nestjs/jwt';
import { getModelToken } from '@nestjs/mongoose';

import { Config } from '@/config';
import { AuthService } from '../auth.service';
import { UserService } from '@/modules/user/user.service';
import { userModelMock } from '@/modules/user/__tests__/mocks/user-model.mock';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        JwtModule.register({
          secret: Config.JWT_SECRET,
          signOptions: { expiresIn: Config.JWT_EXPIRES_IN },
        }),
      ],
      providers: [
        UserService,
        {
          provide: getModelToken(Config.USER_MODEL),
          useValue: userModelMock,
        },
        AuthService,
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
