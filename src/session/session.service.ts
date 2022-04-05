import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateSessionInput } from './dto/create-session.input';
import { UpdateSessionInput } from './dto/update-session.input';

@Injectable()
export class SessionService {
  constructor(private readonly prisma: PrismaService) {}
  create(createSessionInput: CreateSessionInput, userId: string) {
    return this.prisma.session.create({
      data: { ...createSessionInput, userId },
    });
  }

  findAll() {
    return `This action returns all session`;
  }

  findOne(id: number) {
    return `This action returns a #${id} session`;
  }

  update(id: number, updateSessionInput: UpdateSessionInput) {
    return `This action updates a #${id} session`;
  }

  remove(id: number) {
    return `This action removes a #${id} session`;
  }
}
