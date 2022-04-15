import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateSaleOrderInput } from './create-sale-order.input';

@InputType()
export class UpdateSaleOrderInput extends PartialType(CreateSaleOrderInput) {
  @Field(() => Int)
  id: number;
}
