import { CustomerController } from './customer.controller';
import { CustomerSchema } from './schemas/customer.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { CustomerService } from './customer.service';

describe('CustomerService', () => {
  let service: CustomerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forFeature([
          { name: 'Customer', schema: CustomerSchema },
        ]),
      ],
      providers: [CustomerService],
      controllers: [CustomerController],
    }).compile();

    service = module.get<CustomerService>(CustomerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
