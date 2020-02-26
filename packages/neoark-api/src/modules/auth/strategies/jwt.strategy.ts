import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Config } from '@/config';

interface ValidateResponse {
  uid: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: Config.JWT_SECRET,
    });
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  async validate(payload: any): Promise<ValidateResponse> {
    return { uid: payload.sub };
  }
}
