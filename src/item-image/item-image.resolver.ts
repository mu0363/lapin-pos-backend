import { ParseUUIDPipe, UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args, Int } from '@nestjs/graphql';
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { GetCurrentUserId } from 'src/common/decorators/current-user-id.decorator';
import { AuthenticateGuard } from 'src/common/guards/authenticate.guard';
import { ItemImageService } from './item-image.service';
import { ItemImage } from './models/item-image.model';

@Resolver(() => ItemImage)
@UseGuards(AuthenticateGuard)
export class ItemImageResolver {
  constructor(private readonly itemImageService: ItemImageService) {}

  @Mutation(() => ItemImage)
  uploadItemImage(
    @GetCurrentUserId('userId', new ParseUUIDPipe()) userId: string,
    @Args({ name: 'file', type: () => GraphQLUpload }) file: FileUpload,
    @Args({ name: 'itemId', type: () => Int }) itemId: number,
  ) {
    return this.itemImageService.uploadItemImage(file, itemId, userId);
  }

  @Mutation(() => ItemImage)
  removeItemImage() {
    return this.itemImageService.remove();
  }
}
