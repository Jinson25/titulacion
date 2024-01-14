import { Body, Controller, Post, Get, UseGuards, Req } from '@nestjs/common';
import { AutenticacionService } from './autenticacion.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { Request } from 'express';
import { Role } from '../enums/rol.enum';
import { Auth } from '../decorators/auth.decorator';
import { ActiveUser } from 'src/common/decorators/active-user.decorator';
import { UserActiveInterface } from 'src/common/interfaces/user-active.interface';

interface RequestWithUser extends Request {
  usuario: { email: string; role: string };
}
@Controller('auth')
export class AutenticacionController {
  constructor(private readonly autenticacionService: AutenticacionService) {}
  @Post('register')
  register(
    @Body()
    registerDto: RegisterDto,
  ) {
    console.log(registerDto);
    return this.autenticacionService.register(registerDto);
  }

  @Post('login')
  login(
    @Body()
    loginDto: LoginDto,
  ) {
    return this.autenticacionService.login(loginDto);
  }
  @Get('profile')
  @Auth(Role.USER)
  profile(@ActiveUser() usuario: UserActiveInterface) {
    return this.autenticacionService.profile(usuario);
  }
}
