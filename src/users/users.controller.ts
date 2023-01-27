import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import * as bcrypt from 'bcrypt';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { LocalAuthGuard } from 'src/auth/local.auth.guard';
import { UsersService } from './users.service';
import { UserDTO } from "src/schemas/user.dto";

@ApiTags("Users")
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //post/ signup
  @Post('/signup')
  async addUser(@Body() userDTO: UserDTO) {
    //hash password
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(userDTO.password, saltOrRounds);

    const result = await this.usersService.insertUser(
      userDTO.username,
      hashedPassword,
    );
    return {
      msg: 'User successfully registered',
      userId: result.id,
      userName: result.username
    };
  }

  //Post / Login
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  login(@Request() req, @Body() userDTO: UserDTO,): any {
    return {User: UserDTO,
            msg: 'User logged in'};
  };

  //Get / protected
  @UseGuards(AuthenticatedGuard)
  @Get('/protected')
  getHello(@Request() req): string {
    return req.user;
  };

  //Get / logout
  @Get('/logout')
    logout(@Request() req): any {
      req.session.destroy()
      return { msg: 'The user session has ended' }
    }
}
