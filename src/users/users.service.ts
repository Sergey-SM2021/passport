import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      login: 'sergey2003.k.96@gmail.com',
      password: 'sergey2003',
      userId: 1,
    },
    {
      login: 'gotobis457@vreaa.com',
      password: 'sergey2003',
      userId: 1,
    },
  ];

  getUser(login: string) {
    return this.users.find((user) => user.login === login);
  }
}
