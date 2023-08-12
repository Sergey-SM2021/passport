import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      username: 'Sergei2003.k.96@gmail.com',
      password: 'Sergey@2003',
      userId: 1,
    },
    {
      username: 'gotobis457@vreaa.com',
      password: 'Sergey@2003',
      userId: 1,
    },
  ];

  getUser(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
