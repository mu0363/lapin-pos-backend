import { ParseUUIDPipe } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GetCurrentUserId } from 'src/common/decorators/current-user-id.decorator';
import { CreatePlanInput } from './dto/create-plan.input';
import { RemovePlanInput } from './dto/remove-plan.input';
import { UpdatePlanInput } from './dto/update-plan.input';

import { Plan } from './models/plan.model';
import { PlanService } from './plan.service';

@Resolver(() => Plan)
export class PlanResolver {
  constructor(private readonly planService: PlanService) {}

  @Mutation(() => Plan)
  createPlan(
    @GetCurrentUserId('userId', new ParseUUIDPipe()) userId: string,
    @Args('createPlanInput') createPlanInput: CreatePlanInput,
  ) {
    return this.planService.create(createPlanInput, userId);
  }

  @Query(() => [Plan], { name: 'plans' })
  findAll(@GetCurrentUserId('userId', new ParseUUIDPipe()) userId: string) {
    return this.planService.findAll(userId);
  }

  @Mutation(() => Plan)
  updatePlan(
    @GetCurrentUserId('userId', new ParseUUIDPipe()) userId: string,
    @Args('updatePlanInput') updatePlanInput: UpdatePlanInput,
  ) {
    return this.planService.update(updatePlanInput, userId);
  }

  @Mutation(() => Plan)
  removePlan(
    @GetCurrentUserId('userId', new ParseUUIDPipe()) userId: string,
    @Args('removePlanInput') removePlanInput: RemovePlanInput,
  ) {
    return this.planService.remove(removePlanInput, userId);
  }
}
