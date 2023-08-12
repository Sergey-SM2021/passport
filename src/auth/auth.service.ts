import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  validateUser(login: string, password: string) {
    const user = this.usersService.getUser(login);
    if (user && user.password === password) {
      return user;
    }
    return null;
  }
}
