import { SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse } from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface UserEvent {
  test: string;
}

@WebSocketGateway()
export class UserGateway {
  @SubscribeMessage('user')
  onEvent(client: any, data: any): Observable<WsResponse<UserEvent>> {
    console.log('data', data);
    return from([{ test: 'ok' }]).pipe(map(item => ({ event: 'user', data: item })));
  }
}
