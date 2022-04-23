import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateSaleInput } from './create-sale.input';

@InputType()
export class UpdateSaleInput extends PartialType(CreateSaleInput) {
  @Field(() => Int)
  id: number;
}
