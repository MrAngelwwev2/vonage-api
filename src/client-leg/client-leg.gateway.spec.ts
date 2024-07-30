import { Test, TestingModule } from '@nestjs/testing';
import { ClientLegGateway } from './client-leg.gateway';

describe('ClientLegGateway', () => {
  let gateway: ClientLegGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientLegGateway],
    }).compile();

    gateway = module.get<ClientLegGateway>(ClientLegGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
