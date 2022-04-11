import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCastInput } from './dto/create-cast.input';
import { RemoveCastInput } from './dto/remove-cast.input';
import { UpdateCastInput } from './dto/update-cast.input';

@Injectable()
export class CastService {
  constructor(private readonly prisma: PrismaService) {}
  create(createCastInput: CreateCastInput, userId: string) {
    return this.prisma.cast.create({ data: { ...createCastInput, userId } });
  }

  findAll(userId) {
    return this.prisma.cast.findMany({ where: { userId } });
  }

  update(updateCastInput: UpdateCastInput, userId: string) {
    return this.prisma.cast.update({
      where: { id_userId: { id: updateCastInput.id, userId } },
      data: updateCastInput,
    });
  }

  remove(removeCastInput: RemoveCastInput, userId: string) {
    return this.prisma.cast.delete({
      where: { id_userId: { id: removeCastInput.id, userId } },
    });
  }
}
