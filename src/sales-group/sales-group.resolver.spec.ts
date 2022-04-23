import { Test, TestingModule } from '@nestjs/testing';
import { SalesGroupResolver } from './sales-group.resolver';
import { SalesGroupService } from './sales-group.service';

describe('SalesGroupResolver', () => {
  let resolver: SalesGroupResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SalesGroupResolver, SalesGroupService],
    }).compile();

    resolver = module.get<SalesGroupResolver>(SalesGroupResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
