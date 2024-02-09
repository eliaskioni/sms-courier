import { Test, TestingModule } from '@nestjs/testing';
import { MalawiSmsService } from './sms.malawi.service';

describe('ServicesService', () => {
  let service: MalawiSmsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MalawiSmsService],
    }).compile();

    service = module.get<MalawiSmsService>(MalawiSmsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
