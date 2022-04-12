import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreatePlanInput } from './dto/create-plan.input';
import { RemovePlanInput } from './dto/remove-plan.input';
import { UpdatePlanInput } from './dto/update-plan.input';

@Injectable()
export class PlanService {
  constructor(private readonly prisma: PrismaService) {}
  create(createPlanInput: CreatePlanInput, userId: string) {
    return this.prisma.plan.create({ data: { ...createPlanInput, userId } });
  }

  findAll(userId: string) {
    return this.prisma.plan.findMany({ where: { userId } });
  }

  update(updatePlanInput: UpdatePlanInput, userId: string) {
    return this.prisma.plan.update({
      where: { id_userId: { id: updatePlanInput.id, userId } },
      data: updatePlanInput,
    });
  }

  remove(removePlanInput: RemovePlanInput, userId) {
    return this.prisma.plan.delete({
      where: { id_userId: { id: removePlanInput.id, userId } },
    });
  }
}
