import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AutenticacionService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register({ username, email, password }: RegisterDto) {
    const user = await this.usersService.findOneByEmail(email);

    if (user) {
      throw new BadRequestException('El usuario ya existe');
    }

    await this.usersService.create({
      username,
      email,
      password: await bcrypt.hash(password, 10),
    });

    const token = this.jwtService.sign({ email, role:"usuario" }, {
      secret: process.env.JWT_SECRET,
    });

    return {
      message: 'Usuario creado con éxito',
      username,
      email,
      role: "",
      token,
    };
  }

  async login(loginDto: LoginDto) {
    const user = await this.usersService.findOneByEmail(loginDto.email);
    if (!user) {
      throw new UnauthorizedException('El usuario no existe');
    }

    const ispassword = await bcrypt.compare(loginDto.password, user.password);
    if (!ispassword) {
      throw new UnauthorizedException('La contraseña es incorrecta');
    }

    const payload = { email: user.email, role: user.role };

    const token = this.jwtService.sign(payload as object, {
      secret: process.env.JWT_SECRET,
    });

    return {
      token,
      user,
    };
  }
  async profile({ email, role }: { email: string; role: string }) {
    if (role !== 'admin') {
      throw new UnauthorizedException(
        'No tienes permisos para ver este perfil',
      );
    }
    return await this.usersService.findOneByEmail(email);
  }
}
