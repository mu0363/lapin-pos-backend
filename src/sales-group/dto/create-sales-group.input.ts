import { InputType } from '@nestjs/graphql';
import { CreateSaleOrderInput } from 'src/sale/dto/create-sale-order.input';
import { CreateSaleInput } from './../../sale/dto/create-sale.input';

@InputType()
export class CreateSalesGroupInput {
  createSaleInput: CreateSaleInput;
  createSaleOrderInput: CreateSaleOrderInput[];
}
