import { Test, TestingModule } from '@nestjs/testing';
import { SaleResolver } from './sale.resolver';
import { SaleService } from './sale.service';

describe('SaleResolver', () => {
  let resolver: SaleResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SaleResolver, SaleService],
    }).compile();

    resolver = module.get<SaleResolver>(SaleResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
