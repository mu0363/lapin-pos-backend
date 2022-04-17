import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from './../prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  // FIXME 初回ログイン時にもストレージにファイルの保存する
  async initUser(createUserInput: CreateUserInput): Promise<User> {
    return await this.prisma.user.create({
      data: {
        uid: createUserInput.uid,
        username: createUserInput.username,
        email: createUserInput.email,
        avatarUrl: createUserInput.avatarUrl,
      },
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(uid: string) {
    return this.prisma.user.findUnique({
      where: { uid },
    });
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
