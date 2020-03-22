import { SubscribeMessage, WebSocketGateway, WsResponse, OnGatewayConnection, MessageBody } from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { oktaJwtVerifier } from '@/helpers/okta-jwt-verifier';
import { UseGuards, UnauthorizedException } from '@nestjs/common';
import { WsAuthGuard } from '@/guards/ws-auth-guard';
import { WsException } from '@nestjs/websockets';

interface UserEvent {
  test: string;
}

interface MessageEvent {
  message: string;
}

@WebSocketGateway()
export class UserGateway implements OnGatewayConnection {
  @SubscribeMessage('user')
  @UseGuards(WsAuthGuard)
  onEvent(client: any, data: any): Observable<WsResponse<UserEvent>> {
    return from([{ test: 'ok' }]).pipe(map(item => ({ event: 'user', data: item })));
  }

  async handleConnection(client: any, @MessageBody() data: any): Promise<WsResponse<MessageEvent>> {
    const url = new URL(`http://example.com${data.url}`);
    const accessToken = url.searchParams.get('token');

    try {
      const jwt = await oktaJwtVerifier.verifyAccessToken(accessToken, `api://default`);
      return jwt;
    } catch (error) {
      const POLICY_VIOLATION = 1008;
      return client.close(POLICY_VIOLATION, error.message);
    }
  }
}
