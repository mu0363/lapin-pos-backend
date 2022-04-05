import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateSessionInput } from './dto/create-session.input';
import { UpdateSessionInput } from './dto/update-session.input';

@Injectable()
export class SessionService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createSessionInput: CreateSessionInput) {
    const { customerId, castId, planId } = createSessionInput;
    const customer = await this.prisma.customer.findUnique({
      where: { id: customerId },
    });
    const cast = await this.prisma.cast.findUnique({
      where: { id: castId },
    });
    const plan = await this.prisma.plan.findUnique({
      where: { id: planId },
    });
    return this.prisma.session.create({
      data: { customerId, castId, planId },
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
