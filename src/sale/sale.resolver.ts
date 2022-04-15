import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CreateSaleOrderInput } from './dto/create-sale-order.input';
import { CreateSaleInput } from './dto/create-sale.input';
import { UpdateSaleInput } from './dto/update-sale.input';
import { Sale } from './models/sale.model';
import { SaleService } from './sale.service';

@Resolver(() => Sale)
export class SaleResolver {
  constructor(private readonly saleService: SaleService) {}

  @Mutation(() => Sale)
  createSale(
    @Args('createSaleInput')
    createSaleInput: CreateSaleInput,
    @Args({ name: 'createSaleOrderInput', type: () => [CreateSaleOrderInput] })
    createSaleOrderInput: CreateSaleOrderInput[],
  ) {
    return this.saleService.create(createSaleInput, createSaleOrderInput);
  }

  @Query(() => [Sale], { name: 'sales' })
  findAll() {
    return this.saleService.findAll();
  }

  @Query(() => Sale, { name: 'sale' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.saleService.findOne(id);
  }

  @Mutation(() => Sale)
  updateSale(@Args('updateSaleInput') updateSaleInput: UpdateSaleInput) {
    return this.saleService.update(updateSaleInput.id, updateSaleInput);
  }

  @Mutation(() => Sale)
  removeSale(@Args('id', { type: () => Int }) id: number) {
    return this.saleService.remove(id);
  }
}
