import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCastInput } from './dto/create-cast.input';
import { UpdateCastInput } from './dto/update-cast.input';

@Injectable()
export class CastService {
  constructor(private readonly prisma: PrismaService) {}
  create(createCastInput: CreateCastInput) {
    return 'This action adds a new cast';
  }

  findAll() {
    return this.prisma.cast.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} cast`;
  }

  update(id: number, updateCastInput: UpdateCastInput) {
    return `This action updates a #${id} cast`;
  }

  remove(id: number) {
    return `This action removes a #${id} cast`;
  }
}
