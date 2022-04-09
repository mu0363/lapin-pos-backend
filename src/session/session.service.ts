import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateSessionInput } from './dto/create-session.input';
import { RemoveSessionInput } from './dto/remove-session.input';
import { UpdateSessionInput } from './dto/update-session.input';

@Injectable()
export class SessionService {
  constructor(private readonly prisma: PrismaService) {}
  create(createSessionInput: CreateSessionInput, userId: string) {
    return this.prisma.session.create({
      data: { ...createSessionInput, userId },
      include: {
        customer: true,
        cast: true,
        plan: true,
        order: {
          include: {
            item: true,
          },
        },
      },
    });
  }

  findAll(userId: string) {
    return this.prisma.session.findMany({
      where: { userId },
      include: {
        customer: true,
        cast: true,
        plan: true,
        order: {
          include: {
            item: true,
          },
        },
      },
    });
  }

  update(updateSessionInput: UpdateSessionInput, userId: string) {
    return this.prisma.session.update({
      where: {
        id_userId: {
          id: updateSessionInput.id,
          userId,
        },
      },
      include: {
        customer: true,
        cast: true,
        plan: true,
        order: {
          include: {
            item: true,
          },
        },
      },
      data: {
        planId: updateSessionInput.planId,
      },
    });
  }

  remove(removeSessionInput: RemoveSessionInput, userId: string) {
    return this.prisma.session.delete({
      where: {
        id_userId: {
          id: removeSessionInput.id,
          userId,
        },
      },
      include: {
        customer: true,
        cast: true,
        plan: true,
        order: {
          include: {
            item: true,
          },
        },
      },
    });
  }
}
