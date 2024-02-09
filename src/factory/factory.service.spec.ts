import { Test, TestingModule } from '@nestjs/testing';
import { FactoryService } from './factory.service';
import { MalawiSmsService } from '../services/sms.malawi.service';

describe('FactoryService', () => {
  let service: FactoryService;
  let malawiSmsService: MalawiSmsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactoryService, MalawiSmsService],
    }).compile();

    service = module.get<FactoryService>(FactoryService);
    malawiSmsService = module.get<MalawiSmsService>(MalawiSmsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should throw when partner guid is not known', () => {
    expect(service)
  })
});
