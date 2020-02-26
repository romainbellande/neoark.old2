import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtToken } from './jwt-token.interface';
import { ApiBody } from '@nestjs/swagger';
import { CredentialsDto } from './dto/credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiBody({ type: CredentialsDto })
  login(@Request() req): Promise<JwtToken> {
    return this.authService.login(req.user);
  }
}
