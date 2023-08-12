import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  validateUser(username: string, password: string) {
    const user = this.usersService.getUser(username);
    if (user && user.password === password) {
      return user;
    }
    return null;
  }
}
