import { Test, TestingModule } from '@nestjs/testing';
import { ControllerController } from './controller.controller';
import { FactoryService } from '../factory/factory.service';
import { ISmsService } from '../services/isms.service';
import { SmsResponseDto } from '../dto/dto.sms.response';
import { MalawiSmsService } from '../services/sms.malawi.service';

describe('ControllerController', () => {
  let controller: ControllerController;
  let factoryService: FactoryService;
  let smsService: ISmsService;
  let spyReceiveSms: jest.SpyInstance;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ControllerController],
      providers: [
        MalawiSmsService,
        FactoryService
      ],
    }).compile();

    controller = module.get<ControllerController>(ControllerController);
    factoryService = module.get<FactoryService>(FactoryService);
    smsService = module.get<MalawiSmsService>(MalawiSmsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('create should be defined', () => {
    expect(controller.create).toBeDefined();
  });

  it('it should call the right service', async () => {
    const smsDto: SmsResponseDto = new SmsResponseDto();
    smsDto.msisdn = '00254763787073';
    smsDto.text = 'Hello world';
    smsDto.partner = 'equityguid';

    spyReceiveSms = jest.spyOn(smsService, 'receiveSms');
    const spyFactoryProvider = jest.spyOn(factoryService, 'getSmsProvider');

    await controller.create(smsDto);

    expect(spyReceiveSms).toHaveBeenCalledTimes(1);
    expect(spyFactoryProvider).toHaveBeenCalledWith(smsDto.partner);
  });
});
