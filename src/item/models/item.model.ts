import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Category } from '@prisma/client';
import { Category as CategoryModel } from 'src/category/models/category.model';

@ObjectType()
export class Item {
  @Field(() => Int)
  id: number;

  itemName: string;
  itemUrl: string;

  @Field(() => Int)
  categoryId: number;

  @Field(() => CategoryModel)
  category: Category;

  @Field(() => Int)
  price: number;

  @Field(() => Int)
  stock: number;

  @Field(() => Int)
  cost: number;

  createdAt: Date;
  updatedAt: Date;
}
