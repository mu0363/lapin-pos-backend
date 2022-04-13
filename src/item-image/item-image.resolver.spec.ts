import { Test, TestingModule } from '@nestjs/testing';
import { ItemImageResolver } from './item-image.resolver';
import { ItemImageService } from './item-image.service';

describe('ItemImageResolver', () => {
  let resolver: ItemImageResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemImageResolver, ItemImageService],
    }).compile();

    resolver = module.get<ItemImageResolver>(ItemImageResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
