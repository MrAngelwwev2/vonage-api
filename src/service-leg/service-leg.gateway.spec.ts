import { Test, TestingModule } from '@nestjs/testing';
import { ServiceLegGateway } from './service-leg.gateway';

describe('ServiceLegGateway', () => {
  let gateway: ServiceLegGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceLegGateway],
    }).compile();

    gateway = module.get<ServiceLegGateway>(ServiceLegGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
