import { CreateSalesGroupInput } from './create-sales-group.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSalesGroupInput extends PartialType(CreateSalesGroupInput) {
  @Field(() => Int)
  id: number;
}
