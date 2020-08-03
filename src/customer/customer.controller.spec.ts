import { CustomerService } from './customer.service';
import { CustomerSchema } from './schemas/customer.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { CustomerController } from './customer.controller';

describe('Customer Controller', () => {
  let controller: CustomerController;

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

    controller = module.get<CustomerController>(CustomerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
