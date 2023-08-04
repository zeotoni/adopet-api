import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from 'src/user/dto/login.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signin')
  signIn(@Body() loginDto: LoginDto): Promise<{ token: string }> {
    return this.authService.signin(loginDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getPayload(@Req() req: any) {
    console.log(req.user);
  }
}
