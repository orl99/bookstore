import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) { }

  async findAll() {
    return await this.prismaService.user.findMany();
  }
}
