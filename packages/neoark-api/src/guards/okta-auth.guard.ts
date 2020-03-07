import * as OktaJwtVerifier from '@okta/jwt-verifier';
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Config } from '@/config';
import { FastifyRequest } from 'fastify';

const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: `https://${Config.OKTA_HOST}/oauth2/default`, // required
});

@Injectable()
export class OktaAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }

  validateRequest(request: FastifyRequest) {
    const authHeader = request.headers.authorization || '';
    const match = authHeader.match(/Bearer (.+)/);
    console.log('match', match);

    if (!match) {
      return false;
    }

    const accessToken = match[1];

    return oktaJwtVerifier
      .verifyAccessToken(accessToken, `api://default`)
      .then(jwt => {
        console.log('jwt', jwt);
        request['jwt'] = jwt;
        return true;
      })
      .catch(err => {
        console.log('err', err);
        return false;
      });
  }
}
