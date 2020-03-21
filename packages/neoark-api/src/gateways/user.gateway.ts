import { SubscribeMessage, WebSocketGateway, WsResponse, OnGatewayConnection } from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface UserEvent {
  test: string;
}

@WebSocketGateway()
export class UserGateway implements OnGatewayConnection {
  @SubscribeMessage('user')
  onEvent(client: any, data: any): Observable<WsResponse<UserEvent>> {
    return from([{ test: 'ok' }]).pipe(map(item => ({ event: 'user', data: item })));
  }

  handleConnection(client: any, data: any) {
    const url = new URL(`http://example.com${data.url}`);
    const token = url.searchParams.get('token');
  }
}
