import { Test, TestingModule } from '@nestjs/testing';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { Config } from '@/config';
import { AuthController } from '../auth.controller';
import { AuthService } from '../auth.service';
import { LocalStrategy } from '../strategies/local.strategy';
import { JwtStrategy } from '../strategies/jwt.strategy';
import { getModelToken } from '@nestjs/mongoose';
import { userModelMock } from '@/modules/user/__tests__/mocks/user-model.mock';
import { UserService } from '@/modules/user/user.service';

describe('Auth Controller', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
          secret: Config.JWT_SECRET,
          signOptions: { expiresIn: Config.JWT_EXPIRES_IN },
        }),
      ],
      controllers: [AuthController],
      providers: [
        UserService,
        AuthService,
        LocalStrategy,
        JwtStrategy,
        {
          provide: getModelToken(Config.USER_MODEL),
          useValue: userModelMock,
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
