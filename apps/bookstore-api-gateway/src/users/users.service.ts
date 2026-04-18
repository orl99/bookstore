import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UsersService {

    constructor(@Inject('USERS_CLIENT') private usersClient: ClientProxy) { }

    public findAll() {
        return this.usersClient.send('users.findAll', {});
    }
}
